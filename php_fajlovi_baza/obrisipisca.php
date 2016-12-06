<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET');

include("functions.php");

if(isset($_GET['PISAC_ID'])){
    echo obrisiPisca(intval($_GET['PISAC_ID']));
}

?>