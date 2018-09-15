const express = require("express");
const app = express();

const firebase = require("firebase");
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDwch5uhaM9_FPEvcYKuuP6lThX7p0phqI",
  authDomain: "aware-ecb04.firebaseapp.com",
  databaseURL: "https://aware-ecb04.firebaseio.com",
  projectId: "aware-ecb04",
  storageBucket: "",
  messagingSenderId: "941139577979"
});

const defaultDatabase = firebaseApp.database();


// middleware

// listen to port
const port = process.env.port || 3000;
app.listen(port, () => console.log(`Listening to port ${port}`));