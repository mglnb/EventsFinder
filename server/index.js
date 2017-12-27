const requests = require('request')
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
let array = [];
(async function () {

    await (async function () {
        for (i = 500; i <= 100000; i += 500) {
            await axios.get('https://events-facebook.herokuapp.com/events?lat=-31.7452702&lng=-52.3468351&distance=' + i + '&sort=venue&accessToken=1772639816363661|MI7I_9u05sr7vW6LzDLRv__2brI')
                .then(response => {
                    console.log(response.data.metadata)
                    array = [
                        ...array,
                        ...response.data.events
                    ]
                    console.log(array.length)
                });
            console.log(i)
        }
    })()
    console.log('acabou')
    array.forEach((value) => {
        firebase.database().ref("events/list/" + value.id).set(value);        
        firebase.database().ref("events/categorys/" + value.venue.category).set(value.venue.category);        
    })
})()