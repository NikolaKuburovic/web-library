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
	$upit = mysql_query("SELECT KNJIGA_ID, KNJIGA_NASLOV, KNJIGA_BROJ_STRANA, PISAC.PISAC_ID, 
	PISAC.PISAC_IME, PISAC.PISAC_PREZIME, IZDAVAC.IZDAVAC_NAZIV, 
	KNJIGA_ISBN, KNJIGA_BROJ_IZDANJA, KNJIGA_GODINA_IZDANJA, KNJIGA_OBLAST, KNJIGA_OPIS FROM KNJIGA 
	JOIN PISAC USING (PISAC_ID) 
	JOIN IZDAVAC USING(IZDAVAC_ID)
    HAVING KNJIGA_OBLAST = 'Web Programiranje'") or die('greska');
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