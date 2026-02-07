const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));

// Serve the `codes` directory as static files
app.use(express.static(path.join(__dirname, 'codes')));

// Simple hardcoded user (demo only)
const USER = { email: 'user@example.com', password: 'secret123' };

app.post('/login', (req, res) => {
  const { email, password } = req.body || {};
  if (email === USER.email && password === USER.password) {
    return res.redirect('/index.html');
  }
  return res.redirect('/login.html?error=1');
});

app.get('/health', (req, res) => res.send('OK'));

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
