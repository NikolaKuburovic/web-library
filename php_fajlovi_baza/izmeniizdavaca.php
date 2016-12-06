<?php
header('Access-Control-Allow-Methods: GET, POST');

include("functions.php");

if(isset($_POST['IZDAVAC_NAZIV']) && isset($_POST['IZDAVAC_MESTO']) && isset($_POST['IZDAVAC_DRZAVA']) && 
isset($_POST['IZDAVAC_ID'])){
    
    $izdavacNaziv = $_POST['IZDAVAC_NAZIV'];
    $izdavacMesto = $_POST['IZDAVAC_MESTO'];
    $izdavacDrzava = $_POST['IZDAVAC_DRZAVA'];
    $izdavacId = intval($_POST['IZDAVAC_ID']);
    
    echo izmeniIzdavaca($izdavacNaziv, $izdavacMesto, $izdavacDrzava, $izdavacId);
}
?>
