<?php 
	
	header("Access-Control-Allow-Origin: *");
	header('Access-Control-Allow-Methods: GET, POST');
	header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization, Token, token, TOKEN');

	include("functions.php");
	

	if(!empty($_POST['PISAC_ID']) && !empty($_POST['IZDAVAC_ID']) 
    && !empty($_POST['KNJIGA_ISBN']) && !empty($_POST['KNJIGA_NASLOV']) && !empty($_POST['KNJIGA_BROJ_STRANA'])
     && !empty($_POST['KNJIGA_BROJ_IZDANJA']) && !empty($_POST['KNJIGA_GODINA_IZDANJA']) 
     && !empty($_POST['KNJIGA_OBLAST']) && !empty($_POST['KNJIGA_OPIS'])){
		$pisacId = intval($_POST['PISAC_ID']);
		$izdavacId = intval($_POST['IZDAVAC_ID']);
		$knjigaIsbn = intval($_POST['KNJIGA_ISBN']);
		$knjigaNaslov = $_POST['KNJIGA_NASLOV'];
        $knjigaBrojStrana = intval($_POST['KNJIGA_BROJ_STRANA']);
        $knjigaBrojIzdanja = intval($_POST['KNJIGA_BROJ_IZDANJA']);
		$knjigaGodinaIzdanja = intval($_POST['KNJIGA_GODINA_IZDANJA']);
        $knjigaOblast = $_POST['KNJIGA_OBLAST'];
		$knjigaOpis = $_POST['KNJIGA_OPIS'];

		dodajKnjigu($pisacId, $izdavacId, $knjigaIsbn, $knjigaNaslov, $knjigaBrojStrana, $knjigaBrojIzdanja, 
        $knjigaGodinaIzdanja, $knjigaOblast, $knjigaOpis);
		
	}else{
		die();
		echo '<script type="text/javascript">

 		window.alert("Niste popunili sva polja u formi.");

 		</script>';
	}
?>