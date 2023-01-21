# `Facebook Clone` : Official Interactive Clone With React JS & Firebase
<!-- <p align=center>
<br><br><br>
<img src="./public/github_icon.jpg" width="300">
<br><br><br> -->

<p align="center">
  <a href="https://facebook-clone-132ae.web.app">
    <img src="./public/github_icon.png" 
    alt="facebook-icon" width="16%" />
  </a>
</p>
<h1 align="center">
  `Facebook Clone` : Official Interactive Clone With React JS & Firebase
</h1>

<p align="center">
  <a aria-label="Platforms" href="https://nodejs.org/en/download/">
    <img alt="" src="https://img.shields.io/badge/platform-linux-windows-macos-lightgrey.svg&labelColor=000">
  </a>
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


Shields

Features

Firebase

Building 


Demo Online @ https://facebook-clone-132ae.web.app

⚙️ Technology:

- [React](https://reactjs.org/) as Frontend Framework
- [Firebase](https://firebase.google.com/) as Cloud Authentication and Database Service

### Description:

- I have build a "Facebook Clone with REACT JS for Beginners!" with Clever Programmer @ Youtube.
- You need to provide your own firebaseConfig in `src/firebase.js`

  Go to `https://console.firebase.google.com/u/0/` and make `new project`

  Add `Web` as firebase app then go to `Firestore Database` and create new one.

  Add `collections` - `messages` with message / timestamp / username

  and `posts` - with image / message / profilePic / timestamp / username

  Go to Project settings -> General and you should have all credentials you need.

### How to start the application

- npm install
- change `src/firebase.js` -> firebaseConfig to your own
- npm run start

### Building Instructions

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