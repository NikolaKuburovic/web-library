<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET');

include("functions.php");

if(isset($_GET['IZDAVAC_ID'])){
    echo obrisiIzdavaca(intval($_GET['IZDAVAC_ID']));
}

?>