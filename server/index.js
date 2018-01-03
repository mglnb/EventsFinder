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
function api (i) {
    axios.get('https://events-facebook.herokuapp.com/events?lat=-31.7452702&lng=-52.3468351&distance=' + i + '&sort=venue&accessToken=1772639816363661|MI7I_9u05sr7vW6LzDLRv__2brI')
        .then(response => {
            response.data.events.forEach((value) => {
                firebase.database().ref("events/list/" + value.id).set(value);
                firebase.database().ref("events/categories/" + value.venue.category.split('/')[0]).set(value.venue.category);
            })
            console.log(response.data.events.length)
        })
        .catch(err => console.log(err));
    console.log(i)
    console.log('acabou')
}


for(let i = 0; i < 200000; i += 500) {
    api(i)
}