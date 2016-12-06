<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization, Token, token, TOKEN');

if($_SERVER['REQUEST_METHOD'] == "OPTIONS"){
	exit();
}

$servername = "localhost";
$username = "root";
$password = "root";
$database = "webbiblioteka";



$conn = new mysqli($servername, $username, $password, $database);
$conn2 = new mysqli($servername, $username, $password, $database);
$conn3 = new mysqli($servername, $username, $password, $database);

if(!$conn->set_charset("utf8")) {
printf("Error loading character set utf8: %s\n", $mysqli->error);
exit();
}
if(!$conn2->set_charset("utf8")) {
printf("Error loading character set utf8: %s\n", $mysqli->error);
exit();
}
if(!$conn3->set_charset("utf8")) {
printf("Error loading character set utf8: %s\n", $mysqli->error);
exit();
}
?>