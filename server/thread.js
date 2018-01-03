var Worker = require('webworker-threads').Worker;

var worker = new Worker(function () {
  console.log('teste')

  importScripts('C:/Users/Migs/Projects/eventosSatolep/server/dependencies.js')
  console.log('teste')
  
  this.onmessage = function (event) {
    axios.get('https://events-facebook.herokuapp.com/events?lat=-31.7452702&lng=-52.3468351&distance='+event.data+'&sort=venue&accessToken=1772639816363661|MI7I_9u05sr7vW6LzDLRv__2brI')
      .then(response => {
        response.data.events.forEach((value) => {
          firebase.database().ref("events/list2/" + value.id).set(value);
          firebase.database().ref("events/categorys2/" + value.venue.category).set(value.venue.category);
        })
      });
    self.close();
  };
});
worker.onmessage = function (event) {
  console.log(new Date().getSeconds() + "Worker said : " + event.data);
};
worker.onerror = function(error) {
  console.log(error)
}
worker.postMessage(500);

var worker2 = new Worker(function () {
  this.onmessage = function (event) {
    postMessage('Hi ' + event.data);
    self.close();
  };
});
worker2.onmessage = function (event) {
  console.log(new Date().getSeconds() + "Worker sai2d : " + event.data);
};
worker2.postMessage('ali');