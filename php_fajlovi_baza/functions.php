<?php

include("config.php");
//----------------------------------------------------------------
 //PRILAGODJENO BAZI WEBBIBLIOTEKA-------------------WEBBIBLIOTEKA
 //---------------------------------------------------------------
function checkIfLoggedIn(){
	global $conn;
	if(!empty($_SERVER['HTTP_TOKEN'])){
		$token = $_SERVER['HTTP_TOKEN'];
		$result = $conn->prepare("SELECT * FROM KORISNIK WHERE KORISNIK_TOKEN=?");
		$result->bind_param("s",$token);
		$result->execute();
		$result->store_result();

		$num_rows = $result->num_rows;
		if($num_rows > 0)
		{
			return true;
		}
		else{
			return false;
		}
		}
	else{
		return false;
	}
	}

//-------------------------------------------------------------
//POVEZANO SA LOGIN.PHP
//-------------------------------------------------------------
function login($username, $password){
	global $conn;
	global $conn2;
	$rarray = array();
	$rola = "";
	if(checkLogin($username,$password)){
		$id = sha1(uniqid());
		$result2 = $conn->prepare("UPDATE KORISNIK SET KORISNIK_TOKEN=? WHERE KORISNIK_USERNAME=?");
		$result2->bind_param("ss",$id,$username);
		$result2->execute();

		$rarray['token'] = $id;

		$result3 = $conn2->prepare("SELECT KORISNIK_ROLA FROM KORISNIK WHERE KORISNIK_USERNAME=? LIMIT 1");
		$result3->bind_param("s",$username);
		$result3->execute();
		$result3->bind_result($vr);
	
	if($result3->fetch()){
		$rola = $vr;
		if($rola === 'admin'){
			$admin = "yes";
			$rarray['admin'] = $admin;
		}
		}

	} else{
		header('HTTP/1.1 401 Unauthorized');
		$rarray['error'] = "Pogresan username/password";
	}
	return json_encode($rarray);
}

//-------------------------------------------------------------
function checkLogin($username, $password){
	global $conn;
	$username = mysqli_real_escape_string($conn,$username);
	$password = md5(mysqli_real_escape_string($conn,$password));
	$result = $conn->prepare("SELECT * FROM KORISNIK WHERE KORISNIK_USERNAME=? AND KORISNIK_PASSWORD=?");
	$result->bind_param("ss",$username,$password);
	$result->execute();
	$result->store_result();
	
	$num_rows = $result->num_rows;

	if($num_rows > 0)
	{
		return true;
	}
	else{
		return false;
	}
}

//-------------------------------------------------------------
//POVEZANO SA REGISTER.PHP
//-------------------------------------------------------------
function register($username, $password, $ime, $prezime){
	global $conn2;
	$rarray = array();
	$errors = "";
	if(checkIfUserExists($username)){
		$errors .= "Korisnicko ime vec postoji\r\n";
	}
	if(strlen($username) < 5){
		$errors .= "Korisnicko ime mora da ima najmanje 5 karaktera\r\n";
	}
	if(strlen($password) < 5){
		$errors .= "Lozinka mora da ima najmanje 5 karaktera\r\n";
	}
	if(strlen($ime) < 3){
		$errors .= "Ime mora da ima najmanje 2 karaktera\r\n";
	}
	if(strlen($prezime) < 3){
		$errors .= "Prezime mora da ima najmanje 2 karaktera\r\n";
	}
	if($errors == ""){
		$stmt = $conn2->prepare("INSERT INTO KORISNIK (KORISNIK_IME, KORISNIK_PREZIME, 
		KORISNIK_USERNAME, KORISNIK_PASSWORD) VALUES (?, ?, ?, ?)");
		$stmt->bind_param("ssss", $ime, $prezime, $username, md5($password));
		if($stmt->execute()){
			$id = sha1(uniqid());
			$result2 = $conn2->prepare("UPDATE KORISNIK SET KORISNIK_TOKEN=? WHERE KORISNIK_USERNAME=?");
			$result2->bind_param("ss",$id,$username);
			$result2->execute();

			$rarray['token'] = $id;
		}else{
			header('HTTP/1.1 400 Bad <reque></reque>st');
			$rarray['error'] = "Database connection error";
		}
	} else{
		header('HTTP/1.1 400 Bad request');
		$rarray['error'] = json_encode($errors);
	}
	return json_encode($rarray);
}
//-------------------------------------------------------------
function checkIfUserExists($username){
	global $conn;
	$result = $conn->prepare("SELECT * FROM KORISNIK WHERE KORISNIK_USERNAME=?");
	$result->bind_param("s",$username);
	$result->execute();
	$result->store_result();

	$num_rows = $result->num_rows;
	if($num_rows > 0)
	{
		return true;
	}
	else{
		return false;
	}
}
//-------------------------------------------------------------
function checkIdKorisnik($korisnikId){
	global $conn;
	$id = mysqli_real_escape_string($conn,$korisnikId);
	$result = $conn->prepare("SELECT * FROM KORISNIK WHERE KORISNIK_ID=?");
	$result->bind_param("i",$id);
	$result->execute();
	$result->store_result();
	
	$num_rows = $result->num_rows;

	if($num_rows > 0)
	{
		return true;
	}
	else{
		echo "Result: " + $korisnikId;
		return false;
	}
}
//-------------------------------------------------------------
function checkIdPisac($pisackId){
	global $conn;
	$id = mysqli_real_escape_string($conn,$pisackId);
	$result = $conn->prepare("SELECT * FROM PISAC WHERE PISAC_ID=?");
	$result->bind_param("i",$pisackId);
	$result->execute();
	$result->store_result();
	
	$num_rows = $result->num_rows;

	if($num_rows > 0)
	{
		return true;
	}
	else{
		echo "Result: " + $pisacId;
		return false;
	}
}
//-------------------------------------------------------------
function checkIdIzdavac($izdavacId){
	global $conn;
	$id = mysqli_real_escape_string($conn,$izdavacId);
	$result = $conn->prepare("SELECT * FROM IZDAVAC WHERE IZDAVAC_ID=?");
	$result->bind_param("i",$izdavacId);
	$result->execute();
	$result->store_result();
	
	$num_rows = $result->num_rows;

	if($num_rows > 0)
	{
		return true;
	}
	else{
		echo "Result: " + $izdavacId;
		return false;
	}
}
//-------------------------------------------------------------
function checkIdKnjiga($knjigaIsbn){
	global $conn;
	$id = mysqli_real_escape_string($conn,$knjigaIsbn);
	$result = $conn->prepare("SELECT * FROM KNJIGA WHERE KNJIGA_ISBN=?");
	$result->bind_param("i",$knjigaIsbn);
	$result->execute();
	$result->store_result();
	
	$num_rows = $result->num_rows;

	if($num_rows > 0)
	{
		return true;
	}
	else{
		echo "Result: " + $knjigaIsbn;
		return false;
	}
}
//******************************************************************//
//******************************************************************//
//																	//
//          K O R I S N I K  ----------- F U N K C I J E            //
//																	//
//******************************************************************//
//******************************************************************//

//-------------------------------------------------------------
//POVEZANO SA REGKORISNIK.PHP-------------------WEBBIBLIOTEKA
//-------------------------------------------------------------
function dodajKorisnika($korisnikIme, $korisnikPrezime, $korisnikUsername, $korisnikPassword, $korisnikRola){
	global $conn;
	$rarray = array();
	if(checkIfLoggedIn()){
	$stmt = $conn->prepare("INSERT INTO KORISNIK (KORISNIK_IME, KORISNIK_PREZIME, 
	KORISNIK_USERNAME, KORISNIK_PASSWORD, KORISNIK_ROLA) VALUES (?, ?, ?, ?, ?)");
	$stmt->bind_param("sssss",$korisnikIme, $korisnikPrezime, $korisnikUsername, md5($korisnikPassword), $korisnikRola);
	if($stmt->execute()){
		$rarray['sucess'] = "ok";
	}else{
		$rarray['error'] = "Database connection error";
	}
	} 
	else{
		$rarray['error'] = "Please log in";	
		header('HTTP/1.1 401 Unauthorized');
	}
	return json_encode($rarray);
}
//-------------------------------------------------------------
//POVEZANO SA IZMENIKORISNIKA.PHP-------------------WEBBIBLIOTEKA
//-------------------------------------------------------------
function izmeniKorisnika($korisnikIme, $korisnikPrezime, $korisnikUsername, $korisnikPassword, $korisnikRola, $korisnikId){
	global $conn;
	$rarray = array();
	if(checkIfLoggedIn()){
		$stmt = $conn->prepare("UPDATE KORISNIK SET KORISNIK_IME=?, KORISNIK_PREZIME=?, 
		KORISNIK_USERNAME=?, KORISNIK_PASSWORD=?, KORISNIK_ROLA=? WHERE KORISNIK_ID=?");
		$stmt->bind_param("sssssi", $korisnikIme, $korisnikPrezime, $korisnikUsername, md5($korisnikPassword), $korisnikRola, $korisnikId);
		if($stmt->execute()){
			$rarray['success'] = "updated";
		}else{
			$rarray['error'] = "Database connection error";
		}
	} 
	else{
		$rarray['error'] = "Please log in";	
		header('HTTP/1.1 401 Unauthorized');
	}
	return json_encode($rarray);
}
//-------------------------------------------------------------
//POVEZANO SA OBRISIKORISNIKA.PHP
//-------------------------------------------------------------

function obrisiKorisnika($korisnikId){
	global $conn;
	$rarray = array();
	if(checkIfLoggedIn()){
		
		if(checkIdKorisnik($korisnikId)){
		$result = $conn->prepare("DELETE FROM KORISNIK WHERE KORISNIK_ID=?");
		$result->bind_param("i",$korisnikId);
		$result->execute();
		$rarray['success'] = "Uspesno obrisan korisnik";
		}
		else{
			$rarray['error'] = "Ne postoji broj korisnika koji ste uneli";
		}
	} else{
		$rarray['error'] = "Please log in";
		header('HTTP/1.1 401 Unauthorized');
	}
	return json_encode($rarray);
}


function vratiRolu($korisnikToken){
	global $conn;
	$id = mysqli_real_escape_string($conn,$korisnikToken);
	$result = $conn->prepare("SELECT KORISNIK_ROLA FROM KORISNIK WHERE KORISNIK_TOKEN=?");
	$result->bind_param("s",$korisnikToken);
	$result->execute();
	$result->store_result();
	
	$num_rows = $result->num_rows;

	
	if($num_rows > 0)
	{
		return true;
	}
	else{
		echo "Result: " + $korisnikRola;
		return false;
	}
}

//******************************************************************//
//******************************************************************//
//																	//
//          I Z D A V A C ------------------ F U N K C I J E        //
//																	//
//******************************************************************//
//******************************************************************//

//-------------------------------------------------------------
//POVEZANO SA REGIZDAVAC.PHP-------------------WEBBIBLIOTEKA
//-------------------------------------------------------------
function dodajIzdavaca($izdavacNaziv, $izdavacMesto, $izdavacDrzava){
	global $conn;
	$rarray = array();
	if(checkIfLoggedIn()){
	$stmt = $conn->prepare("INSERT INTO IZDAVAC (IZDAVAC_NAZIV, IZDAVAC_MESTO, IZDAVAC_DRZAVA) VALUES (?, ?, ?)");
	$stmt->bind_param("sss",$izdavacNaziv, $izdavacMesto, $izdavacDrzava);
	if($stmt->execute()){
		$rarray['success'] = "ok";
	}else{
		$rarray['error'] = "Database connection error";
	}
	}
	else{
		$rarray['error'] = "Please log in";	
		header('HTTP/1.1 401 Unauthorized');
	}
	return json_encode($rarray);
}
//-------------------------------------------------------------
//POVEZANO SA IZMENIIZDAVACA.PHP-------------------WEBBIBLIOTEKA
//-------------------------------------------------------------
function izmeniIzdavaca($izdavacNaziv, $izdavacMesto, $izdavacDrzava, $izdavacId){
	global $conn;
	$rarray = array();
	if(checkIfLoggedIn()){
		$stmt = $conn->prepare("UPDATE IZDAVAC SET IZDAVAC_NAZIV=?, IZDAVAC_MESTO=?, 
		IZDAVAC_DRZAVA=? WHERE IZDAVAC_ID=?");
		$stmt->bind_param("sssi", $izdavacNaziv, $izdavacMesto, $izdavacDrzava, $izdavacId);
		if($stmt->execute()){
			$rarray['success'] = "updated";
		}else{
			$rarray['error'] = "Database connection error";
		}
	} 
	else{
		$rarray['error'] = "Please log in";	
		header('HTTP/1.1 401 Unauthorized');
	}
	return json_encode($rarray);
}
//-------------------------------------------------------------
//POVEZANO SA OBRISIIZDAVACA.PHP
//-------------------------------------------------------------
function obrisiIzdavaca($izdavacId){
	global $conn;
	$rarray = array();
	if(checkIfLoggedIn()){
		if(checkIdIzdavac($izdavacId)){
		$result = $conn->prepare("DELETE FROM IZDAVAC WHERE IZDAVAC_ID=?");
		$result->bind_param("i",$izdavacId);
		$result->execute();
		$rarray['success'] = "Uspesno obrisan korisnik";
		}
		else{
			$rarray['error'] = "Ne postoji broj izdavaca koji ste uneli";
		}
	} else{
		$rarray['error'] = "Please log in";
		header('HTTP/1.1 401 Unauthorized');
	}
	return json_encode($rarray);
}

//-----------------------------------------------------------------------------
// -------------------- I Z D A V A C -- K R A J -------------------WEBBIBLIOTEKA
//-----------------------------------------------------------------------------

//******************************************************************//
//******************************************************************//
//																	//
//          K N J I G A ------------------ F U N K C I J E          //
//																	//
//******************************************************************//
//******************************************************************//

//-------------------------------------------------------------
//POVEZANO SA REGKNJIGA.PHP-------------------WEBBIBLIOTEKA
//-------------------------------------------------------------
function dodajKnjigu($pisacId, $izdavacId, $knjigaIsbn, $knjigaNaslov, $knjigaBrojStrana, $knjigaBrojIzdanja, 
        $knjigaGodinaIzdanja, $knjigaOblast, $knjigaOpis){
	global $conn;
	$rarray = array();
	if(checkIfLoggedIn()){
	$stmt = $conn->prepare("INSERT INTO KNJIGA (PISAC_ID, IZDAVAC_ID, KNJIGA_ISBN, KNJIGA_NASLOV, 
	KNJIGA_BROJ_STRANA, KNJIGA_BROJ_IZDANJA, KNJIGA_GODINA_IZDANJA, KNJIGA_OBLAST, KNJIGA_OPIS) 
	VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)");
	$stmt->bind_param("iiisiiiss",$pisacId, $izdavacId, $knjigaIsbn, $knjigaNaslov, $knjigaBrojStrana, 
	$knjigaBrojIzdanja, $knjigaGodinaIzdanja, $knjigaOblast, $knjigaOpis);
	if($stmt->execute()){
		$rarray['sucess'] = "ok";
	}else{
		$rarray['error'] = "Database connection error";
	}
	} 
	else{
		$rarray['error'] = "Please log in";	
		header('HTTP/1.1 401 Unauthorized');
	}
	return json_encode($rarray);
}
//-------------------------------------------------------------
//POVEZANO SA IZMENIKNJIGU.PHP-------------------WEBBIBLIOTEKA
//-------------------------------------------------------------

function izmeniKnjigu($pisacId, $izdavacId, $knjigaIsbn, $knjigaNaslov, $knjigaBrojStrana, $knjigaBrojIzdanja, 
        $knjigaGodinaIzdanja, $knjigaOblast, $knjigaOpis, $knjigaId){
	global $conn;
	$rarray = array();
	if(checkIfLoggedIn()){
		$stmt = $conn->prepare("UPDATE KNJIGA SET PISAC_ID=?, IZDAVAC_ID=?, KNJIGA_ISBN=?, KNJIGA_NASLOV=?, 
		KNJIGA_BROJ_STRANA=?, KNJIGA_BROJ_IZDANJA=?, KNJIGA_GODINA_IZDANJA=?, KNJIGA_OBLAST=?, KNJIGA_OPIS=?
		 WHERE KNJIGA_ID=?");
		$stmt->bind_param("iiisiiissi", $pisacId, $izdavacId, $knjigaIsbn, $knjigaNaslov, $knjigaBrojStrana, 
		$knjigaBrojIzdanja, $knjigaGodinaIzdanja, $knjigaOblast, $knjigaOpis, $knjigaId);
		if($stmt->execute()){
			$rarray['success'] = "updated";
		}else{
			$rarray['error'] = "Database connection error";
		}
	} 
	else{
		$rarray['error'] = "Please log in";	
		header('HTTP/1.1 401 Unauthorized');
	}
	return json_encode($rarray);
}
//-------------------------------------------------------------
//POVEZANO SA OBRISIKNJIGU.PHP-------------------WEBBIBLIOTEKA
//-------------------------------------------------------------
function obrisiKnjigu($knjigaIsbn){
	global $conn;
	$rarray = array();
	if(checkIfLoggedIn()){
		
		if(checkIdKnjiga($knjigaIsbn)){
		$result = $conn->prepare("DELETE FROM KNJIGA WHERE KNJIGA_ISBN=?");
		$result->bind_param("i",$knjigaIsbn);
		$result->execute();
		$rarray['success'] = "Uspesno obrisana knjiga";
		}
		else{
			$rarray['error'] = "Ne postoji ISBN broj knjige koji ste uneli";
		}
	} else{
		$rarray['error'] = "Please log in";
		header('HTTP/1.1 401 Unauthorized');
	}
	return json_encode($rarray);
}

//------------------------------------------------------------------
//POVEZANO SA KNJIGABROJPREGLEDA.PHP-------------------WEBBIBLIOTEKA
//------------------------------------------------------------------
function knjigaBrojPregleda($knjigaIsbn){
	global $conn;
	global $conn2;
	$rarray = array();
    $brpregleda = 0;
	
	$rslt = $conn->prepare("SELECT KNJIGA_BR_PREGLEDA FROM KNJIGA WHERE KNJIGA_ISBN=?");
	$rslt->bind_param("i", $knjigaIsbn);
	$rslt->execute();
	$rslt->bind_result($vr);
	
	if($rslt->fetch()){
		$brpregleda = $vr;
		$prg = $brpregleda + 1;
		
		$stmt = $conn2->prepare("UPDATE KNJIGA SET KNJIGA_BR_PREGLEDA=? WHERE KNJIGA_ISBN=?");
		$stmt->bind_param("ii", $prg, $knjigaIsbn);
		$stmt->execute();
		}
}

//-----------------------------------------------------------------------------
// -------------------- K N J I G A -- K R A J -------------------WEBBIBLIOTEKA
//-----------------------------------------------------------------------------


//******************************************************************//
//******************************************************************//
//																	//
//          P I S A C ------------------ F U N K C I J E            //
//																	//
//******************************************************************//
//******************************************************************//

//-------------------------------------------------------------
//POVEZANO SA REGPISAC.PHP-------------------WEBBIBLIOTEKA
//-------------------------------------------------------------
function dodajPisca($pisacIme, $pisacPrezime, $pisacGodinaRodjenja, $pisacDrzava){
	global $conn;
	$rarray = array();
	if(checkIfLoggedIn()){
	$stmt = $conn->prepare("INSERT INTO PISAC (PISAC_IME, PISAC_PREZIME, PISAC_GODINA_RODJENJA, 
	PISAC_DRZAVA) VALUES (?, ?, ?, ?)");
		$stmt->bind_param("ssis",$pisacIme, $pisacPrezime, $pisacGodinaRodjenja, $pisacDrzava);
	if($stmt->execute()){
		$rarray['sucess'] = "ok";
	}else{
		$rarray['error'] = "Database connection error";
	}
	} 
	else{
		$rarray['error'] = "Please log in";	
		header('HTTP/1.1 401 Unauthorized');
	}
	return json_encode($rarray);
}
//-------------------------------------------------------------
//POVEZANO SA IZMENIPISCA.PHP-------------------WEBBIBLIOTEKA
//-------------------------------------------------------------

function izmeniPisca($pisacIme, $pisacPrezime, $pisacGodinaRodjenja, $pisacDrzava, $pisacId){
	global $conn;
	$rarray = array();
	if(checkIfLoggedIn()){
		$stmt = $conn->prepare("UPDATE PISAC SET PISAC_IME=?, PISAC_PREZIME=?, 
		PISAC_GODINA_RODJENJA=?, PISAC_DRZAVA=? WHERE PISAC_ID=?");
		$stmt->bind_param("ssisi", $pisacIme, $pisacPrezime, $pisacGodinaRodjenja, $pisacDrzava, $pisacId);
		if($stmt->execute()){
			$rarray['success'] = "updated";
		}else{
			$rarray['error'] = "Database connection error";
		}
	} 
	else{
		$rarray['error'] = "Please log in";	
		header('HTTP/1.1 401 Unauthorized');
	}
	return json_encode($rarray);
}
//-------------------------------------------------------------
//POVEZANO SA OBRISIKNJIGU.PHP-------------------WEBBIBLIOTEKA
//-------------------------------------------------------------
function obrisiPisca($pisacId){
	global $conn;
	$rarray = array();
	if(checkIfLoggedIn()){
		
		if(checkIdPisac($pisacId)){
		$result = $conn->prepare("DELETE FROM PISAC WHERE PISAC_ID=?");
		$result->bind_param("i",$pisacId);
		$result->execute();
		$rarray['success'] = "Uspesno obrisan pisac";
		}
		else{
			$rarray['error'] = "Ne postoji broj pisca koji ste uneli";
		}
	} else{
		$rarray['error'] = "Please log in";
		header('HTTP/1.1 401 Unauthorized');
	}
	return json_encode($rarray);
}

//-----------------------------------------------------------------
//POVEZANO SA PISACBROJPREGLEDA.PHP-------------------WEBBIBLIOTEKA
//------------------------------------------------------------------
function pisacBrojPregleda($pisacId){
	global $conn;
	global $conn2;
	$rarray = array();
    $brpregleda = 0;
	
	$rslt = $conn->prepare("SELECT PISAC_BR_PREGLEDA FROM PISAC WHERE PISAC_ID=?");
	$rslt->bind_param("i", $pisacId);
	$rslt->execute();
	$rslt->bind_result($vr);
	
	if($rslt->fetch()){
		$brpregleda = $vr;
		$prg = $brpregleda + 1;
		
		$stmt = $conn2->prepare("UPDATE PISAC SET PISAC_BR_PREGLEDA=? WHERE PISAC_ID=?");
		$stmt->bind_param("ii", $prg, $pisacId);
		$stmt->execute();
		}
}
//-----------------------------------------------------------------------------
// -------------------- P I S A C -- K R A J -------------------WEBBIBLIOTEKA
//-----------------------------------------------------------------------------
?>