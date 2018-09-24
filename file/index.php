<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>Tous au Numérique</title>
		<link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css">
		<link rel="stylesheet" href="style.css">
	</head>

	<body>
		<h1>Tous au numérique</h1>
		<div class="container">
			<div class="row">
				<div class="col-md-3"></div>
				<div class="col-md-7">
					<form method="POST">
						<button type="submit" class="btn btn-success" name="formInscription" id="formInscription">Formulaire d'inscription</button>
						<button type="submit" class="btn btn-success" name="questionnaire" id="questionnaire" >Questionnaire de satisfaction</button>
						<button type="submit" class="btn btn-success" name="administrateur" id="administrateur">Administrateur</button>
					</form>
					<div class="col-md-2"></div>
				</div>
			</div>
		</div>
		<div id="formAdmin"></div>
	</head>

	<body>

		<?php
			require('Asso.class.php');
			ini_set('display_errors', 1);
			
			if(isset($_POST['formInscription']))
			{
				header("location: formInscription.php");
			}

			if(isset($_POST['questionnaire']))
			{
				header("location: questionnaire.php");
			}

			if(isset($_POST['envoyer']))
			{
				$login = $_POST['login'];
				$password = $_POST['password'];
				$pdo = new PDO('mysql:host=localhost;dbname=tous_au_numerique', 'segond', 'loudmila32');
				$req = $pdo->query("SELECT * FROM admin");
				while($datas=$req->fetch())
				{
					if($datas['Identifiant'] == $login && $datas['motDePasse'] == $password)
					{
						$manager++;
					}
				}

				if($manager == 1)
				{
					header("location: statistique.php");
				}

				else
				{
					echo "Vous n'êtes pas un administrateur ! ";
				}
			}

		?>
	
		<script src="node_modules/jquery/dist/jquery.min.js"></script>
		<script src="app.js"></script>
	</body>



</html>