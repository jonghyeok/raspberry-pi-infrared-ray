import 'babel-polyfill';
//import {Gpio} from 'onoff';

var sensor = require('node-dht-sensor');

var http = require('http');
http.post = require('http-post');

setTimeout(loop, 5000);

function loop() {
  sensor.read(22, 18, function(err, temperature, humidity) {
      if (!err) {
        http.post('http://asiancedev.cafe24.com/temp/do.php', { r: 'add_data', temp: temperature, humi : humidity , device_id : 'studio_room_tmp'  }, function(res){
            res.setEncoding('utf8');
            res.on('data', function(chunk) {
            });
        });


          console.log('temp: ' + temperature.toFixed(1) + '°C, ' +
              'humidity: ' + humidity.toFixed(1) + '%'
          );
      }
  });

  setTimeout(loop, 5000);
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
