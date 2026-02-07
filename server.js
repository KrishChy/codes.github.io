const express = require('express');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET || 'dev_jwt_secret_change_me';

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from project root so HTML/CSS/JS load
app.use(express.static(__dirname));

// Initialize SQLite DB
const DB_PATH = path.join(__dirname, 'app.db');
const db = new sqlite3.Database(DB_PATH);

// Promisified helpers
function runAsync(sql, params = []) {
  return new Promise((resolve, reject) => {
    db.run(sql, params, function (err) {
      if (err) return reject(err);
      resolve(this);
    });
  });
}
const getAsync = (sql, params = []) => new Promise((res, rej) => db.get(sql, params, (e, r) => e ? rej(e) : res(r)));
const allAsync = (sql, params = []) => new Promise((res, rej) => db.all(sql, params, (e, r) => e ? rej(e) : res(r)));

async function initDb() {
  await runAsync(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT,
    email TEXT UNIQUE,
    password TEXT
  )`);

  await runAsync(`CREATE TABLE IF NOT EXISTS posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    content TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(user_id) REFERENCES users(id)
  )`);

  await runAsync(`CREATE TABLE IF NOT EXISTS comments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    post_id INTEGER,
    user_id INTEGER,
    content TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(post_id) REFERENCES posts(id),
    FOREIGN KEY(user_id) REFERENCES users(id)
  )`);

  await runAsync(`CREATE TABLE IF NOT EXISTS likes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    post_id INTEGER,
    user_id INTEGER,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(post_id, user_id),
    FOREIGN KEY(post_id) REFERENCES posts(id),
    FOREIGN KEY(user_id) REFERENCES users(id)
  )`);
}

initDb().catch(err => console.error('DB init error', err));

// Auth helpers
function createToken(user) {
  return jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: '7d' });
}

async function getUserByEmail(email) {
  return getAsync('SELECT * FROM users WHERE email = ?', [email]);
}

async function getUserById(id) {
  return getAsync('SELECT id, username, email FROM users WHERE id = ?', [id]);
}

async function authMiddleware(req, res, next) {
  const auth = req.headers.authorization;
  if (!auth || !auth.startsWith('Bearer ')) return res.status(401).json({ error: 'Missing token' });
  const token = auth.slice(7);
  try {
    const payload = jwt.verify(token, JWT_SECRET);
    const user = await getUserById(payload.id);
    if (!user) return res.status(401).json({ error: 'Invalid token' });
    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Invalid token' });
  }
}

// Routes
app.get('/health', (req, res) => res.send('OK'));

app.post('/api/signup', async (req, res) => {
  try {
    const { username, email, password } = req.body || {};
    if (!email || !password) return res.status(400).json({ error: 'Email and password required' });
    const existing = await getUserByEmail(email);
    if (existing) return res.status(400).json({ error: 'Email already used' });
    const hash = await bcrypt.hash(password, 10);
    const result = await runAsync('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [username || null, email, hash]);
    const user = { id: result.lastID, username: username || null, email };
    const token = createToken(user);
    res.json({ user, token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body || {};
    if (!email || !password) return res.status(400).json({ error: 'Email and password required' });
    const user = await getUserByEmail(email);
    if (!user) return res.status(400).json({ error: 'Invalid credentials' });
    const ok = await bcrypt.compare(password, user.password);
    if (!ok) return res.status(400).json({ error: 'Invalid credentials' });
    const publicUser = { id: user.id, username: user.username, email: user.email };
    const token = createToken(publicUser);
    res.json({ user: publicUser, token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Create a post
app.post('/api/posts', authMiddleware, async (req, res) => {
  try {
    const { content } = req.body || {};
    if (!content) return res.status(400).json({ error: 'Content required' });
    const result = await runAsync('INSERT INTO posts (user_id, content) VALUES (?, ?)', [req.user.id, content]);
    const post = await getAsync('SELECT * FROM posts WHERE id = ?', [result.lastID]);
    res.json(post);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// List posts with basic metadata
app.get('/api/posts', async (req, res) => {
  try {
    const posts = await allAsync(`SELECT p.*, u.username,
      (SELECT COUNT(*) FROM likes l WHERE l.post_id = p.id) AS like_count,
      (SELECT COUNT(*) FROM comments c WHERE c.post_id = p.id) AS comment_count
      FROM posts p JOIN users u ON u.id = p.user_id ORDER BY p.created_at DESC`);
    res.json(posts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Add comment
app.post('/api/posts/:id/comments', authMiddleware, async (req, res) => {
  try {
    const postId = Number(req.params.id);
    const { content } = req.body || {};
    if (!content) return res.status(400).json({ error: 'Content required' });
    await runAsync('INSERT INTO comments (post_id, user_id, content) VALUES (?, ?, ?)', [postId, req.user.id, content]);
    const comments = await allAsync('SELECT c.*, u.username FROM comments c JOIN users u ON u.id = c.user_id WHERE c.post_id = ? ORDER BY c.created_at', [postId]);
    res.json(comments);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get comments
app.get('/api/posts/:id/comments', async (req, res) => {
  try {
    const postId = Number(req.params.id);
    const comments = await allAsync('SELECT c.*, u.username FROM comments c JOIN users u ON u.id = c.user_id WHERE c.post_id = ? ORDER BY c.created_at', [postId]);
    res.json(comments);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Toggle like
app.post('/api/posts/:id/like', authMiddleware, async (req, res) => {
  try {
    const postId = Number(req.params.id);
    const existing = await getAsync('SELECT * FROM likes WHERE post_id = ? AND user_id = ?', [postId, req.user.id]);
    if (existing) {
      await runAsync('DELETE FROM likes WHERE id = ?', [existing.id]);
    } else {
      await runAsync('INSERT INTO likes (post_id, user_id) VALUES (?, ?)', [postId, req.user.id]);
    }
    const likeCount = await getAsync('SELECT COUNT(*) AS cnt FROM likes WHERE post_id = ?', [postId]);
    res.json({ likes: likeCount.cnt });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Basic user info
app.get('/api/me', authMiddleware, (req, res) => {
  res.json({ user: req.user });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
