<!DOCTYPE html>
<html lang="fr">
	<head>
		<meta charset="UTF-8">
		<link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css">
		<title>Questionnaire</title>
		<link rel="stylesheet" href="style.css">
	</head>
	<body>
		<h1>Tous au Numérique</h1>
		<h2>Voulez-vous répondre à notre questionnaire de satisfaction ?</h2>
	<div class="container">
		<form method="post">
			<div class="row">
				<div class="col-md-3"></div>
				<div class="col-md-7">
					<div>Quel ateliers, stands ou présentations avez-vous le plus apprécié ?</div>
					<div>
						<input class="espace scales" type="checkbox" id="atelier1" name="atelier1" value="atelier1">
						<label class="espace" for="atelier1">Atelier 1</label>

						<input class="espace scales" type="checkbox" id="atelier2" name="atelier2" value="atelier2">
						<label class="espace" for="atelier2">Atelier 2</label>

						<input class="espace scales" type="checkbox" id="stand3" name="stand3" value="stand3">
						<label class="espace" for="stand3">Stand 3</label>

						<input class="espace scales" type="checkbox" id="presentation5" name="presentation5" value="presentation5">
						<label class="espace" for="presentation5">Présentaion 5</label>
					</div>
					<div class="padding">Souhaitez-vous être recontacté prochainement ?

						<input class="espace scales" type="checkbox" id="oui" name="oui" value="oui">
						<label class="espace" for="oui">OUI</label>

						<input class="espace scales" type="checkbox" id="non" name="non" value="non">
						<label class="espace" for="non">NON</label>
					</div>
					<div>
						<input type="date" name="dateRdv" id="dateRdv">
						<input type="time" name="heureRdv" id="heureRdv">
					</div>

					<div class="padding">Quelles sont vos attentes vis-à-vis de notre structure ?</div>
					<div>
						<textarea name="attente" id="attente" cols="50" rows="10"></textarea>
					</div>
					<button id="envoyer" name="envoyer" type="submit" class="btn btn-primary">Envoyer</button>
				</div>
				<div class="col-md-2"></div>
			</div>
		</form>
	</div>
	</body>
</html>