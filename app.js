console.log($);
function administrateur()
{
	$("#formAdmin").append("<form method='post'>" +
							"<div><label for='login'>Identifiant</label></div>" +
							"<div><input type='text' name='login' id='login'></div>" + 
							"<div><label for='password'>Mot de passe</label></div>" +
							"<div><input type='text' name='password' id='password'></div>" + 
							"<button type='submit' name='envoyer' id='envoyer'>Envoyer</button>" +
							"</form>");
	$(".container").empty();
}

$("#administrateur").click(administrateur);