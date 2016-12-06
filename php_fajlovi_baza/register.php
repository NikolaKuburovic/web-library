<?php
	header("Access-Control-Allow-Origin: *");
	header('Access-Control-Allow-Methods: GET, POST');
	header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token, Authorization, Token,
		token, TOKEN');

	include("functions.php");


	if(isset($_POST['KORISNIK_IME']) && isset($_POST['KORISNIK_PREZIME']) && isset($_POST['KORISNIK_USERNAME']) && isset($_POST['KORISNIK_PASSWORD'])){
		$ime = $_POST['KORISNIK_IME'];
		$prezime = $_POST['KORISNIK_PREZIME'];
		$username = $_POST['KORISNIK_USERNAME'];
		$password = $_POST['KORISNIK_PASSWORD'];
		echo register($username,$password,$ime,$prezime);
		
	} else{
		echo '<script type="text/javascript">

		window.alert("Niste popunili sva polja.");

		document.location.href = "index_register.html"; 

	</script>';
	}

?>