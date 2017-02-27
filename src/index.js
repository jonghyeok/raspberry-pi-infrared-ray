import 'babel-polyfill';
//import {Gpio} from 'onoff';

const Gpio = require('onoff').Gpio; 

const receiverIR = new Gpio(18, 'in', 'both');

  console.info("System is started now!");


receiverIR.watch(async function(err, value){
  if (err) {
      console.error(err);
  }

  console.info(value);

});
