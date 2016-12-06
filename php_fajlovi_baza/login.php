<?php

	header("Access-Control-Allow-Origin: *");
	header('Access-Control-Allow-Methods: POST');
	header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token, Authorization, Token,
	token, TOKEN');

	include("functions.php");
	
	if(isset($_POST['KORISNIK_USERNAME']) && isset($_POST['KORISNIK_PASSWORD'])){
		
		$username = $_POST['KORISNIK_USERNAME'];
		$password = $_POST['KORISNIK_PASSWORD'];
		echo login($username,$password);
        
	}

?>