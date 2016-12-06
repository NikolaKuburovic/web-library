<?php
header('Access-Control-Allow-Methods: GET, POST');

include("functions.php");

if(isset($_POST['PISAC_IME']) && isset($_POST['PISAC_PREZIME']) && isset($_POST['PISAC_GODINA_RODJENJA']) && 
isset($_POST['PISAC_DRZAVA']) && isset($_POST['PISAC_ID'])){
    
    $pisacIme = $_POST['PISAC_IME'];
    $pisacPrezime = $_POST['PISAC_PREZIME'];
    $pisacGodinaRodjenja = intval($_POST['PISAC_GODINA_RODJENJA']);
    $pisacDrzava = $_POST['PISAC_DRZAVA'];
    $pisacId = intval($_POST['PISAC_ID']);
    
    echo izmeniPisca($pisacIme, $pisacPrezime, $pisacGodinaRodjenja, $pisacDrzava, $pisacId);
}
?>
