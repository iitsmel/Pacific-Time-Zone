var myapp = require('electron').ipcRenderer;
var moment = require('moment-timezone');

myapp.on('show', function (event, message) {
  ShowTime();
})

function ShowTime() {
  var now = moment().tz('America/Los_Angeles');
  document.body.className = 'dark' ;
  document.getElementById('time').innerText = now.format('hh:mm a');
}