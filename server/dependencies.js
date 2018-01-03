const firebase = require('firebase')
const axios = require('axios')
// Initialize Firebase
var config = {
    apiKey: "AIzaSyBj50FZoCv5v5LkXmEC4dAoNgWm--nAAkY",
    authDomain: "eventos-pelotas.firebaseapp.com",
    databaseURL: "https://eventos-pelotas.firebaseio.com",
    projectId: "eventos-pelotas",
    storageBucket: "eventos-pelotas.appspot.com",
    messagingSenderId: "1062765669672"
};
firebase.initializeApp(config);