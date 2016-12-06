<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET');

include("functions.php");

if(isset($_GET['KNJIGA_ISBN'])){
    echo obrisiKnjigu(intval($_GET['KNJIGA_ISBN']));
}

?>