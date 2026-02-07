# NCMT Hub (local)

This project now includes a simple Express backend with SQLite for user accounts, posts, comments, and likes.

## What I added
- `server.js` — Express server, SQLite (`app.db`) initialization, JWT auth, and REST endpoints under `/api/*`.
- `package.json` — dependencies for `express`, `sqlite3`, `bcrypt`, `jsonwebtoken`, `cors`.
- `script.js` — frontend login/signup wiring saving JWT to `localStorage` as `app_token` and `auth-action` button.

## Quick setup (Windows)
1. Install Node.js (includes `npm`) from https://nodejs.org/.
2. Open PowerShell in the project folder `c:\Users\HP\Desktop\krish chaudhary\codes`.
3. Install dependencies and start server:

```powershell
npm install
npm start
```

4. Open `http://localhost:3000` in your browser.

## Important environment
- Set `JWT_SECRET` environment variable for production:

```powershell
$env:JWT_SECRET = "your_strong_secret"
npm start
```

## API Endpoints (summary)
- `POST /api/signup` { username, email, password } -> { user, token }
- `POST /api/login` { email, password } -> { user, token }
- `GET /api/me` (Auth) -> { user }
- `GET /api/posts` -> [posts]
- `POST /api/posts` (Auth) { content } -> created post
- `POST /api/posts/:id/comments` (Auth) { content } -> comments
- `GET /api/posts/:id/comments` -> comments
- `POST /api/posts/:id/like` (Auth) -> { likes }

## Notes & next steps
- I couldn't run `npm install` here because the execution environment doesn't have `npm` installed. Run the commands above locally.
- After starting the server, creating an account via the signup form stores a JWT in `localStorage` under `app_token` and the `Login` button changes to `Logout`.

If you want, I can now:
- Wire the post feed UI to call `/api/posts` and render posts.
- Add UI for creating posts, commenting, and liking (client-side wiring).
- Add basic validation and error display on forms.

Tell me which to do next.
