<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token, Authorization, Token,
	token, TOKEN');
header("Content-type: application/json");


include("functions.php");


$db = mysql_connect($servername, $username, $password) or die('Ne moze da se poveze'); 
mysql_select_db($database, $db) or die('');

if(checkIfLoggedIn()){
	$upit = mysql_query("SELECT PISAC_IME, PISAC_PREZIME, PISAC_BR_PREGLEDA, PISAC_DRZAVA  
    FROM PISAC
    ORDER BY PISAC_BR_PREGLEDA DESC LIMIT 5 ") or die('greska');
	$redovi = array();
	
	while ($r = mysql_fetch_assoc($upit, MYSQL_ASSOC)) {
		$redovi[] = $r;
	}
	echo json_encode($redovi);
}
else{
	$redovi['error'] = "Please log in";
	header('HTTP/1.1 401 Unauthorized');
	echo json_encode($redovi);
	
}

?>