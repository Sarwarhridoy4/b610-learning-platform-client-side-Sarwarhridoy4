# E-Pathshala Client

Frontend for the E-Pathshala learning platform.

## Tech Stack

- React 19 + Vite 7
- React Router 7
- Tailwind CSS 4 + DaisyUI
- Firebase (Auth + Hosting)

## Features

- Neomorphic UI theme (Mist / Midnight) with theme switch
- Firebase authentication (Google, GitHub, Email/Password)
- Route-level lazy loading for better initial performance
- Course details PDF export (loaded on demand)
- Home page random hadith section with refresh button

## External API

- Random Hadith: `https://hadith-server.vercel.app/api/random-hadith`

## Project Setup

```bash
cd /home/sarwar/Desktop/b610-learning-platform-client-side-Sarwarhridoy4
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Firebase Hosting (Manual Deploy)

Project ID: `e-pathshala-authentication`

1. Login to Firebase:
```bash
npx firebase-tools login
```

2. Build the app:
```bash
npm run build
```

3. Deploy hosting:
```bash
npx firebase-tools deploy --only hosting --project e-pathshala-authentication
```

## Useful Files

- Firebase config: `src/Firebase/firebase.config.js`
- Hosting config: `firebase.json`
- Firebase project alias: `.firebaserc`

## Links

- Live Site: https://e-pathshala-authentication.web.app/
- Client Repo: https://github.com/Sarwarhridoy4/b610-learning-platform-client-side-Sarwarhridoy4
- Server Repo: https://github.com/Sarwarhridoy4/b610-lerning-platform-server-side-Sarwarhridoy4
