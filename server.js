// const express = require('express');
// const app = express();




var express = require('express');
var app = express();
var SerialPort = require('serialport');
var mysql = require('mysql');
var bp = require('body-parser');
var portHttp = 4400;

const serv = require('http');
const http = serv.Server(app);
var io = require('socket.io')(http);
app.use(express.static(__dirname ));
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));


/* Connection to the database  */

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index1.html');
});





var db = mysql.createConnection({
  host: "localhost",
  user: "annie",
  password: "12345678",
  database: "arduina"
});

db.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  });

var coucou = "1 record inserted";


 app.post("/test",function(req,res)
  {
    var result = req.body.visitor_res;
    console.log(result);
    var sql = 'INSERT INTO response (response) VALUES ("' + result + '")';
    db.query(sql);
    // function (err, req, res) 
    //   {
    //     if (err) throw err;
    //     res.send(coucou);
    //   })
  });

  // app.get("/question",function(req,res)
  // {
  //   var question = 'SELECT * FROM questions';
  //   db.query(question);
  // });

  // var sql = "INSERT INTO response (response) VALUES ("+ response +")";
  // db.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log("1 record inserted");
  // });

  // db.query("SELECT * FROM response", function (result, fields) {
  //   return result;
  // });
 





  // db.query("SELECT * FROM test", function (result, fields) {
  //   console.log(fields);
  //   return fields;
  // });






/* Connection to the Serial Port */


var port = new SerialPort('/dev/ttyUSB0', 
{
  baudRate: 9600
});

 
port.on('data', dire_bonjour);







function dire_bonjour( data )
{
  io.on('connection', function (socket) {
    socket.broadcast.emit('user connected');
  });

  console.log('Coucou tout le monde');

  // require('app.js');
  // recognition.start();
  // app.post("/signal",function(req,res)
  // {
  //   var signal =true;
  //   // console.log( msg);
  //   // var say = require('say');
  //   // say.speak('hi luc');
  //   // say.stop();
  // });
};




http.listen(portHttp, function() 
{
  console.log('listening on port ' + portHttp);
});
