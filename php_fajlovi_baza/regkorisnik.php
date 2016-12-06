<?php 
	
	header("Access-Control-Allow-Origin: *");
	header('Access-Control-Allow-Methods: GET, POST');
	header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization, Token, token, TOKEN');

	include("functions.php");
	

	if(!empty($_POST['KORISNIK_IME']) && !empty($_POST['KORISNIK_PREZIME']) && !empty($_POST['KORISNIK_USERNAME']) 
	&& !empty($_POST['KORISNIK_PASSWORD']) && !empty($_POST['KORISNIK_ROLA'])){
		$korisnikIme = $_POST['KORISNIK_IME'];
		$korisnikPrezime = $_POST['KORISNIK_PREZIME'];
		$korisnikUserame = $_POST['KORISNIK_USERNAME'];
        $korisnikPassword = $_POST['KORISNIK_PASSWORD'];
		$korisnikRola = $_POST['KORISNIK_ROLA'];
		

		dodajKorisnika($korisnikIme, $korisnikPrezime, $korisnikUserame, $korisnikPassword, $korisnikRola);
		
	}else{
		die();
		echo '<script type="text/javascript">

 		window.alert("Niste popunili sva polja u formi.");

 		</script>';
	}
?>