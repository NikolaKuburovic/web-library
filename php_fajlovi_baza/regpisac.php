<?php 
	
	header("Access-Control-Allow-Origin: *");
	header('Access-Control-Allow-Methods: GET, POST');
	header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization, Token, token, TOKEN');

	include("functions.php");
	

	if(!empty($_POST['PISAC_IME']) && !empty($_POST['PISAC_PREZIME']) 
    && !empty($_POST['PISAC_GODINA_RODJENJA']) && !empty($_POST['PISAC_DRZAVA'])){
		$pisacIme = $_POST['PISAC_IME'];
		$pisacPrezime = $_POST['PISAC_PREZIME'];
		$pisacGodinaRodjenja = intval($_POST['PISAC_GODINA_RODJENJA']);
        $pisacDrzava = $_POST['PISAC_DRZAVA'];

		dodajPisca($pisacIme, $pisacPrezime, $pisacGodinaRodjenja, $pisacDrzava);
		
	}else{
		die();
		echo '<script type="text/javascript">

 		window.alert("Niste popunili sva polja u formi.");

 		</script>';
	}
?>