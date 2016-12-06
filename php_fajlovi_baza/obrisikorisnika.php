<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET');

include("functions.php");

if(isset($_GET['KORISNIK_ID'])){
    echo obrisiKorisnika(intval($_GET['KORISNIK_ID']));
}

?>