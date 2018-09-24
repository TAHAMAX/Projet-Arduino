<!DOCTYPE html>
<html lang="fr">
	<head>
		<meta charset="UTF-8">
		<link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css">
		<title>formulaire d'inscription</title>
		<link rel="stylesheet" href="style.css">
	</head>
	<body>
		<h1>Tous au Numérique</h1>
		<h2>Bienvenue sur le formulaire d'inscription</h2>

		<div class="input-group mb-3">
			<div class="input-group-prepend">
		 		<span class="input-group-text" id="basic-addon1">Nom</span>
		 	</div>
		 	<input type="text" class="form-control" aria-label="Username" aria-describedby="basic-addon1">
		</div>

		<div class="input-group mb-3">
		 	<div class="input-group-append">
		 		<span class="input-group-text" id="basic-addon2">Prenom</span>
		 	</div>
		 	<input type="text" class="form-control" aria-label="Recipient's username" aria-describedby="basic-addon2">
		</div>

		<div class="input-group mb-3">
		 	<div class="input-group-prepend">
		 		<span class="input-group-text" id="basic-addon3">Société</span>
		 	</div>
		 	<input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3">
		</div>

		<div class="input-group mb-3">
		 	<div class="input-group-prepend">
		 		<span class="input-group-text" id="basic-addon3">Ville</span>
		 	</div>
		 	<input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3">
		</div>

		<div class="input-group paddingBot">
		 	<div class="input-group-prepend">
		 		<span class="input-group-text">Ou avez-vous entendu parlé de cet évènement?</span>
		 	</div>
		 	<textarea class="form-control" aria-label="With textarea"></textarea>
		</div>
		<div>
			<button id="envoyer" name="envoyer" type="submit" class="btn btn-primary">Envoyer</button>
		</div>

	</body>
</html>