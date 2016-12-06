<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token, Authorization, Token, token, TOKEN');

include("functions.php");


$pisacId = intval($_GET['PISAC_ID']);

echo "" + $pisacId + 100 + "// ";

echo pisacBrojPregleda($pisacId);
?>