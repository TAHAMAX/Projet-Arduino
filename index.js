var SerialPort = require('serialport');

var port = new SerialPort('/dev/ttyUSB0', 
{
  baudRate: 9600
});
port.on('data', dire_bonjour);

function dire_bonjour( data )
{
    var say = require('say');
    // say.speak('hi marc');
    // say.stop();


	var res=get_speech();
	say.speak(res);
	say.stop();


	// if (res != null)
	//  {	
	//      say.speak(res);
	//      say.stop();
	//  }



}


	var texte;
	var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition ;
	recognition = new SpeechRecognition();
	recognition.continuous = true;
	recognition.lang = "fr-FR";
	recognition.start();

	recognition.onresult = function (event) {
		for (i = event.resultIndex; i < event.results.length; i++) 
		{
				 texte = textarea.value += event.results[i][0].transcript + "\n"
				document.getElementById("span").innerHTML =
					Math.round(event.results[i][0].confidence * 100) + " %";
		}
	}

	recognition.onend = function(){
		say.speak(texte);
	}
}