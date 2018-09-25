


/*
    Les sockets !
*/

// function speech_to_text
function SpeechReco()
{
    var synth = window.speechSynthesis;
    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
    var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
    var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent
    var recognition = new webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = true;
    recognition.lang = 'fr-FR';
    recognition.start();
    var voice = "";


    recognition.onresult = function(event)
    {
       voice = event.results[0][0].transcript;
       console.log(voice);
    }



            /*
            https://developers.google.com/web/updates/2014/01/Web-apps-that-talk-Introduction-to-the-Speech-Synthesis-API
            */
    recognition.onend = function()
    {
            var msg = new SpeechSynthesisUtterance(voice);
            window.speechSynthesis.speak(msg);
            console.log(msg.text);
            return msg.text;
    } 
}


function text_to_speech
var welcome = "Bonjour ! Je m'apelle Arduina, end";
text_to_speech(welcome);



function text_to_speech(text)
{
    var msg = new SpeechSynthesisUtterance(text);
    msg.voice = speechSynthesis.getVoices().filter(function(voice) { return voice.name == ''; })[0];
    var result = synth.speak(msg);
    return result;
}

//var socket = io();
var socket = io('http://localhost:4400');


socket.on('connection', function(socket)
{
    alert('connecté !');

    socket.on('mouvement', function(msg){
        console.log('message: ' + msg);
    });
});



/*

Définitions des variables, appel aux modules 
de synthèse et reconnaissance vocale 
>>>>>>> 378f2a015f4210cd649a45259c863649d495bcae

*/

var msg_text="no text";
function SpeechReco()
{
    var synth = window.speechSynthesis;
    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
    var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
    var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent
    var recognition = new webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = true;
    recognition.lang = 'fr-FR';
    recognition.start();
    var voice = "";
    var response = $('textarea[name=reponse_visitor]');
    recognition.onresult = function(event)
    {
       voice = event.results[0][0].transcript;
       response.val(voice);

       // msg_text=response.val();

    }

    recognition.onend = function()
    {
            /*
            https://developers.google.com/web/updates/2014/01/Web-apps-that-talk-Introduction-to-the-Speech-Synthesis-API
            */
            var msg = new SpeechSynthesisUtterance(voice);
            window.speechSynthesis.speak(msg);

            speak(msg_text);        
            console.log(response.val());
            msg_text=response.val();

     }

            return  msg_text;
}


 var text_rec=SpeechReco();
console.log(text_rec);


//CODE D OCEANE..... A ADAPTER A NOTRE CODE
// function text_to_speech
$( "#Recommencer" ).click(function()
{
    var msg = new SpeechSynthesisUtterance();
    msg.lang = 'fr-FR';
    var synth = window.speechSynthesis;
    var voices = synth.getVoices();

    speak("Bonjour !. Je m'apelle Arduina,Bienvenu aux portes ouvertes de l'école simplon promo 2, Nous sommes heureux de vous accueillir")

    function speak (message) 
    {
        msg.text = message;
        msg.onend = function () { console.log("on end!"); }
        msg.onerror = function () { console.log("on error!"); }
        msg.onpause = function () { console.log("on pause"); }
        msg.onresume = function () { console.log("on resume"); }
        msg.onstart = function () { console.log("on start"); }
        synth.cancel();
        synth.speak(msg);
        var r = setInterval(function () 
        {
            console.log(synth.speaking);
            if (!synth.speaking) clearInterval(r);
            else synth.resume();
        }, 14000);


        msg.onend = function(e) 
        {
            console.log('Finished in ' + event.elapsedTime + ' seconds.');
        };
    }
});

var textt=SpeechReco();




//CODE D OCEANE..... A ADAPTER A NOTRE CODE
// function text_to_speech


var cont=true;
$( "#Confirmer" ).click(function()

{
    if (cont == true)
    {
        var msg = new SpeechSynthesisUtterance();
        msg.lang = 'fr-FR';
        var synth = window.speechSynthesis;
        var voices = synth.getVoices();
        // speak("textt")
        speak("Avez-vous,  2 minutes pour renseigner vos coordonnées s'il vous plaît?")

 {
         speak("Avez-vous,  2 minutes pour renseigner vos coordonnées s'il vous plaît?")
 };
    // speak("Avez-vous,  2 minutes pour renseigner vos coordonnées s'il vous plaît?")

    // speak("Etes-vous une femme ou un homme ?")
    // speak("Quel est votre prénom ?")
    // speak("Quel est votre nom ?")
    // speak("Quel est le nom de votre entreprise, organisation ou association ?")
    // speak("Merci de préciser la ville.")

    // speak("Où avez-vous entendu parler de cet évènement ?")
    function speak (message) 
    {
        msg.text = message;
        msg.onend = function () { console.log("on end!"); }
        msg.onerror = function () { console.log("on error!"); }
        msg.onpause = function () { console.log("on pause"); }
        msg.onresume = function () { console.log("on resume"); }
        msg.onstart = function () { console.log("on start"); }
        synth.cancel();
        synth.speak(msg);
        // var r = setInterval(function () 
        {
        // console.log(synth.speaking);
        // if (!synth.speaking) clearInterval(r);
        // else synth.resume();
        // }, 14000);

        // msg.onend = function(e) 
        {
        // console.log('Finished in ' + event.elapsedTime + ' seconds.');
        // };
        // }
            cont=false;
            console.log("1");
        }
    if (cont == false) 
    {
        var msg = new SpeechSynthesisUtterance();
        msg.lang = 'fr-FR';
        var synth = window.speechSynthesis;
        var voices = synth.getVoices();
        // speak("Avez-vous,  2 minutes pour renseigner vos coordonnées s'il vous plaît?")
        speak("Etes-vous une femme ou un homme ?")
        // speak("Quel est votre nom de famille ?")
        // speak("Quel est votre prénom ?")
        // speak("Quel est le nom de votre entreprise, organisation ou association ?")
        // speak("Merci de préciser la ville.")
        // speak("Où avez-vous entendu parler de cet évènement ?")




    function speak (message) 
    {
        msg.text = message;
        msg.onend = function () { console.log("on end!"); }
        msg.onerror = function () { console.log("on error!"); }
        msg.onpause = function () { console.log("on pause"); }
        msg.onresume = function () { console.log("on resume"); }
        msg.onstart = function () { console.log("on start"); }
        synth.cancel();
        synth.speak(msg);
        
        // var r = setInterval(function () {
        // console.log(synth.speaking);
        // if (!synth.speaking) clearInterval(r);
        // else synth.resume();
        // }, 14000);

        // msg.onend = function(e) {
        // console.log('Finished in ' + event.elapsedTime + ' seconds.');
        // };
        // }

        cont=true;
        console.log("2");

    }
    if (cont == 3) 
    {
        var msg = new SpeechSynthesisUtterance();
        msg.lang = 'fr-FR';
        var synth = window.speechSynthesis;
        var voices = synth.getVoices();
        // speak("Avez-vous,  2 minutes pour renseigner vos coordonnées s'il vous plaît?")
        // speak("Etes-vous une femme ou un homme ?")
        speak("Quel est votre nom de famille ?")
        // speak("Quel est votre prénom ?")
        // speak("Quel est le nom de votre entreprise, organisation ou association ?")
        // speak("Merci de préciser la ville.")
        // speak("Où avez-vous entendu parler de cet évènement ?")

    function speak (message) 
    {
        msg.text = message;
        msg.onend = function () { console.log("on end!"); }
        msg.onerror = function () { console.log("on error!"); }
        msg.onpause = function () { console.log("on pause"); }
        msg.onresume = function () { console.log("on resume"); }
        msg.onstart = function () { console.log("on start"); }
        synth.cancel();
        synth.speak(msg);
        var r = setInterval(function () 
        {
            console.log(synth.speaking);
            if (!synth.speaking) clearInterval(r);
            else synth.resume();
        }, 14000);

        msg.onend = function(e) 
        {
            console.log('Finished in ' + event.elapsedTime + ' seconds.');
        };
    }

    cont+=1;
}
    if (cont == 4) 
    {
        var msg = new SpeechSynthesisUtterance();
        msg.lang = 'fr-FR';
        var synth = window.speechSynthesis;
        var voices = synth.getVoices();
        speak("Avez-vous,  2 minutes pour renseigner vos coordonnées s'il vous plaît?")
        // speak("Etes-vous une femme ou un homme ?")
        // speak("Quel est votre nom de famille ?")
        // speak("Quel est votre prénom ?")
        // speak("Quel est le nom de votre entreprise, organisation ou association ?")
        // speak("Merci de préciser la ville.")
        // speak("Où avez-vous entendu parler de cet évènement ?")
        function speak (message) 
        {
            msg.text = message;
            msg.onend = function () { console.log("on end!"); }
            msg.onerror = function () { console.log("on error!"); }
            msg.onpause = function () { console.log("on pause"); }
            msg.onresume = function () { console.log("on resume"); }
            msg.onstart = function () { console.log("on start"); }
            synth.cancel();
            synth.speak(msg);
            var r = setInterval(function () {
                console.log(synth.speaking);
                if (!synth.speaking) clearInterval(r);
                else synth.resume();
            }, 14000);

            msg.onend = function(e) {
                console.log('Finished in ' + event.elapsedTime + ' seconds.');
            };
        }

    cont+=1;
}
    if (cont == 5)
    {
        var msg = new SpeechSynthesisUtterance();
        msg.lang = 'fr-FR';
        var synth = window.speechSynthesis;
        var voices = synth.getVoices();
        speak("Avez-vous,  2 minutes pour renseigner vos coordonnées s'il vous plaît?")
        // speak("Etes-vous une femme ou un homme ?")
        // speak("Quel est votre nom de famille ?")
        // speak("Quel est votre prénom ?")
        // speak("Quel est le nom de votre entreprise, organisation ou association ?")
        // speak("Merci de préciser la ville.")
        // speak("Où avez-vous entendu parler de cet évènement ?")
        function speak (message) 
        {
            msg.text = message;
            msg.onend = function () { console.log("on end!"); }
            msg.onerror = function () { console.log("on error!"); }
            msg.onpause = function () { console.log("on pause"); }
            msg.onresume = function () { console.log("on resume"); }
            msg.onstart = function () { console.log("on start"); }
            synth.cancel();
            synth.speak(msg);
            var r = setInterval(function () 
            {
                console.log(synth.speaking);
                if (!synth.speaking) clearInterval(r);
                else synth.resume();
            }, 14000);

            msg.onend = function(e) 
            {
                console.log('Finished in ' + event.elapsedTime + ' seconds.');
            };
        }

        cont+=1;
    }
    };

    // speak("Où avez-vous entendu parler de cet évènement ?")    

var msg = new SpeechSynthesisUtterance();
msg.lang = 'fr-FR';
var synth = window.speechSynthesis;
var voices = synth.getVoices();
function speak (message) 
        {
            msg.text = message;
            synth.cancel();
            synth.speak(msg);
        }

