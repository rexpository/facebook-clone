<p align="center">
  <a href="https://facebook-clone-132ae.web.app">
    <img src="./public/github_icon.png" 
    alt="facebook-icon" width="25%" />
  </a>
</p>
<h2 align="center">
  Facebook Clone: Official Interactive Clone With React JS & Firebase
</h2>

<p align="center">
  <a aria-label="NPM version" href="https://nodejs.org/en/download/">
    <img alt="" src="https://img.shields.io/npm/v/next.svg?style=for-the-badge&labelColor=000000">
  </a>
  <a aria-label="License" href="https://github.com/vercel/next.js/blob/canary/license.md">
    <img alt="" src="https://img.shields.io/npm/l/next.svg?style=for-the-badge&labelColor=000000">
  </a>
  <a aria-label="Make a Pull Request" href="http://makeapullrequest.com">
    <img alt="" src="https://img.shields.io/badge/PRs-welcome-blueviolet.svg?style=for-the-badge&labelColor=000000">
  </a>
</p>

<p align="center">
  <img src="./public/demo.gif" alt="Live Demo" width="70%"/>
</p>

--------------------
> This clone is built with [React](https://reactjs.org/) as the Frontend Framework and uses [Firebase](https://firebase.google.com/) for Google Authentication, Real-time Database Updates, and Cloud Hosting

- **Cloud Authentication:** Uses Google's Authentication Service to set Facebook's default poster as your account and imports your profile information (name, profilePic, timeZone) into the build.

<p align="center">
  <img src="./public/auth_demo.gif" alt="Authentication Demo" width="70%"/>
</p>

- **Real-time Database Updates:** Uses [React Hooks](https://reactjs.org/docs/hooks-intro.html) and [Firestore DB](https://firebase.google.com/docs/firestore) to update the feed and story reel with real-time snapshots from the collection of posts in the cloud. 

<p align="center">
  <img src="./public/db_demo.gif" alt="Database Demo" width="70%"/>
</p>






### Description:

- You need to provide your own firebaseConfig in `src/firebase.js`

  Go to `https://console.firebase.google.com/u/0/` and make `new project`

  Add `Web` as firebase app then go to `Firestore Database` and create new one.

  Add `collections` - `messages` with message / timestamp / username

  and `posts` - with image / message / profilePic / timestamp / username

  Go to Project settings -> General and you should have all credentials you need.\

### Live Demo Online @ https://facebook-clone-132ae.web.app

### Deploying the application on localhost

- cd...
- npm install
- change `src/firebase.js` -> firebaseConfig to your own
- npm run start

### Building and hosting the application

- cd...
- npm i -g firebase-tools

- firebase login
(Log in through google)

- firebase init
- select "Hosting: configure files for Firebase Hosting"
- select "Use an existing project"
- select your Firebase project from the list
- set public directory as "build"
- configure as a single-page app: Yes
- set up automatic builds with Github: No

- npm run build

- firebase deploy