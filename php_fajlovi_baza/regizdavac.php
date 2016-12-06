<?php 
	
	header("Access-Control-Allow-Origin: *");
	header('Access-Control-Allow-Methods: GET, POST');
	header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization, Token, token, TOKEN');

	include("functions.php");
	

	if(!empty($_POST['IZDAVAC_NAZIV']) && !empty($_POST['IZDAVAC_MESTO']) && !empty($_POST['IZDAVAC_DRZAVA'])){
		$izdavacNaziv = $_POST['IZDAVAC_NAZIV'];
		$izdavacMesto = $_POST['IZDAVAC_MESTO'];
		$izdavacDrzava = $_POST['IZDAVAC_DRZAVA'];
		

		dodajIzdavaca($izdavacNaziv, $izdavacMesto, $izdavacDrzava);
		
	}else{
		die();
		echo '<script type="text/javascript">

 		window.alert("Niste popunili sva polja u formi.");

 		</script>';
	}
?>