import 'babel-polyfill';
//import {Gpio} from 'onoff';

var sensor = require('node-dht-sensor');

setTimeout(loop, 1000);

function loop() {
  sensor.read(22, 18, function(err, temperature, humidity) {
      if (!err) {
          console.log('temp: ' + temperature.toFixed(1) + '°C, ' +
              'humidity: ' + humidity.toFixed(1) + '%'
          );
      }
  });

  setTimeout(loop, 1000);
}




/*
const Gpio = require('onoff').Gpio;

const receiverIR = new Gpio(18, 'in', 'both');

  console.info("System is started now!");


receiverIR.watch(async function(err, value){
  if (err) {
      console.error(err);
  }

  console.info(value);

});
*/
