<?php
header('Access-Control-Allow-Methods: GET, POST');

include("functions.php");

if(isset($_POST['PISAC_ID']) && isset($_POST['IZDAVAC_ID']) && isset($_POST['KNJIGA_ISBN']) &&
 isset($_POST['KNJIGA_NASLOV']) && isset($_POST['KNJIGA_BROJ_STRANA']) && isset($_POST['KNJIGA_BROJ_IZDANJA']) && 
 isset($_POST['KNJIGA_GODINA_IZDANJA']) && isset($_POST['KNJIGA_OBLAST']) && isset($_POST['KNJIGA_OPIS']) &&
  isset($_POST['KNJIGA_ID'])){
    
    $pisacId = intval($_POST['PISAC_ID']);
    $izdavacId = intval($_POST['IZDAVAC_ID']);
    $knjigaIsbn = intval($_POST['KNJIGA_ISBN']);
    $knjigaNaslov = $_POST['KNJIGA_NASLOV'];
    $knjigaBrojStrana = intval($_POST['KNJIGA_BROJ_STRANA']);
    $knjigaBrojIzdanja = intval($_POST['KNJIGA_BROJ_IZDANJA']);
    $knjigaGodinaIzdanja = intval($_POST['KNJIGA_GODINA_IZDANJA']);
    $knjigaOblast = $_POST['KNJIGA_OBLAST'];
    $knjigaOpis = $_POST['KNJIGA_OPIS'];
    $knjigaId = intval($_POST['KNJIGA_ID']);
    
    echo izmeniKnjigu($pisacId, $izdavacId, $knjigaIsbn, $knjigaNaslov, $knjigaBrojStrana, $knjigaBrojIzdanja, 
        $knjigaGodinaIzdanja, $knjigaOblast, $knjigaOpis, $knjigaId);
}
?>
