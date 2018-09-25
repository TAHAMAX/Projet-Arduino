


/*
    Les sockets !
*/
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

$( "#Confirmer" ).click(function()
 {
         speak("Avez-vous,  2 minutes pour renseigner vos coordonnées s'il vous plaît?")
 });
    // speak("Avez-vous,  2 minutes pour renseigner vos coordonnées s'il vous plaît?")
    // speak("Etes-vous une femme ou un homme ?")
    // speak("Quel est votre prénom ?")
    // speak("Quel est votre nom ?")
    // speak("Quel est le nom de votre entreprise, organisation ou association ?")
    // speak("Merci de préciser la ville.")
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
