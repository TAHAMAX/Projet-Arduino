# Projet-Arduino
Cross-platform 'say' command using Electron
taper  les commande

sudo apt-get install festvox-kallpc16k fs 
then 
npm install say

///////////////////////////////////////////////////////////////
then  >>>

rec temp.wav 
or 
arecord temp.wav


sudo apt-get update
sudo apt-get upgrade
sudo apt-get install alsa-base alsa-utils
npm install mic



///////////////////////////////////////////////////////////////

dan votre ficher index.js >>>

///////////////////////////////////////////////////////////////

var SerialPort = require('serialport');
// récupérer des données du port
var port = new SerialPort('/dev/ttyUSB0', 
{
  baudRate: 9600
});

// envoyer des données à la fonction dire_bonjour
port.on('data', dire_bonjour);


// function speak
function dire_bonjour( data )
{
var say = require('say');
say.speak('hi luc');
say.stop();
}


///////////////////////////////////////////////////////////////

code arduino

///////////////////////////////////////////////////////////////

int echo = 11;
long lecture_echo;
long cm;

void setup()
{
  pinMode(trig, OUTPUT);
  digitalWrite(trig, LOW);
  pinMode(echo, INPUT);
  Serial.begin(9600);
}


void loop()
{
  digitalWrite(trig, HIGH);
  delayMicroseconds(10);
  digitalWrite(trig, LOW);
  lecture_echo = pulseIn(echo, HIGH);
  cm = lecture_echo / 58;

  if( cm < 100 ){
    Serial.print("gogogo");
  }
  delay(10);
}

///////////////////////////////////////////////////////////////
