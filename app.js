

/*

Définitions des variables, appel aux modules 
de synthèse et reconnaissance vocale 

*/

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
        recognition.onresult = function(event){
         voice = event.results[0][0].transcript;
        }

        recognition.onend = function(){
            /*
            https://developers.google.com/web/updates/2014/01/Web-apps-that-talk-Introduction-to-the-Speech-Synthesis-API
            */
            var msg = new SpeechSynthesisUtterance(voice);
            window.speechSynthesis.speak(msg);

            console.log(msg.text);
            send(msg.text);
        }
function send(test)
{
    var visitor_res= test;
    console.log(visitor_res);
    $.ajax({
    method: "POST",
    url: "/test",
    data: { visitor_res : visitor_res }
    }).done(function() {
    console.log( "success" );
    }).fail(function() {
    console.log( "error" );
    }).always(function() {
    console.log( "complete" );
    });
}
/*

 Fonction Speech-To-Text (reconnaissance vocale)

 */


 // var recognition = new webkitSpeechRecognition();
 // recognition.continuous = false;
 // recognition.interimResults = true;
 // recognition.lang = 'fr-FR';
 //    //recognition.start();
 //    var voice = "";
 //    var your_text = document.getElementById('yourtext').value;
 //    recognition.onresult = function(event)
 //    {
 //    	//voice = event.results[0][0].transcript;
 //    	for (i = event.resultIndex; i < event.results.length; i++)
 //        {
 //            yourtext.value += event.results[i][0].transcript + "\n"
 //        }
 //    }
 //    recognition.onend = function()
 //    {
 //        var msg = new SpeechSynthesisUtterance(voice);
 //        synth.speak(msg);
 //        console.log(msg);
 //    }

 //    $('#go').on('click', function ()
 //    {   
 //    recognition.start();
 //    });

 









/* 

Fonction Text-to-Speech (synthese vocale), prend en paramètre une variable 
de type string et retourne la transcription orale du message 

*/
var welcome = document.getElementById('welcome').value;
function text_to_speech(text){
    var msg = new SpeechSynthesisUtterance(text);
    msg.voice = speechSynthesis.getVoices().filter(function(voice) { return voice.name == ''; })[0];
    var result = synth.speak(msg);
    return result;

}


  




//     recognition.start();
//     recup();



// $.get('/test' );
// console.log(visitor_res);

//document.getElementById("demo").innerHTML = "Hello JavaScript!";


text_to_speech(welcome);


/* 

afficher la liste des langages disponibles sur le navigateur 

*/

// speechSynthesis.getVoices().forEach(function(voice) {
//   console.log(voice.name, voice.default ? voice.default :'');
// });







