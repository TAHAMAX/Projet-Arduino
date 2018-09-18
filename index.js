var SerialPort = require('serialport');


var port = new SerialPort('/dev/ttyUSB0', 
{
  baudRate: 9600
});
port.on('data', dire_bonjour);

function dire_bonjour( data )
{
var say = require('say');
say.speak('hi luc');
say.stop();
       
// Record();
// stop();
// play();

}

