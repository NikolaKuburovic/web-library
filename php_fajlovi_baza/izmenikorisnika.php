<?php
header('Access-Control-Allow-Methods: GET, POST');

include("functions.php");

if(isset($_POST['KORISNIK_IME']) && isset($_POST['KORISNIK_PREZIME']) && isset($_POST['KORISNIK_USERNAME']) && 
isset($_POST['KORISNIK_PASSWORD']) && isset($_POST['KORISNIK_ROLA']) && isset($_POST['KORISNIK_ID'])){
    
    $korisnikIme = $_POST['KORISNIK_IME'];
    $korisnikPrezime = $_POST['KORISNIK_PREZIME'];
    $korisnikUsername = $_POST['KORISNIK_USERNAME'];
    $korisnikPassword = $_POST['KORISNIK_PASSWORD'];
    $korisnikRola = $_POST['KORISNIK_ROLA'];
    $korisnikId = intval($_POST['KORISNIK_ID']);
    
    echo izmeniKorisnika($korisnikIme, $korisnikPrezime, $korisnikUsername, $korisnikPassword, $korisnikRola, $korisnikId);
}
?>
