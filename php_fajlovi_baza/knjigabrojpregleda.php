<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token, Authorization, Token, token, TOKEN');

include("functions.php");


$knjigaIsbn = intval($_GET['KNJIGA_ISBN']);

echo "" + $knjigaIsbn + 100 + "// ";

echo knjigaBrojPregleda($knjigaIsbn);
?>