import { Component, Directive } from 'angular2/core';
import { FormBuilder, Validators, ControlGroup, Control, FORM_DIRECTIVES, FORM_BINDINGS} from 'angular2/common';
import { Http, HTTP_PROVIDERS, Headers } from 'angular2/http';
import 'rxjs/Rx';
import { Router, ROUTER_PROVIDERS } from 'angular2/router';

@Component({
	selector: 'AdmKorisnik',
	templateUrl: 'app/admkorisnik/admkorisnik.html',
	directives: [FORM_DIRECTIVES],
	viewBindings: [FORM_BINDINGS]
})

export class AdmKorisnikComponent {
	registerForm: ControlGroup;
	http: Http;
	router: Router;
	postResponse: String;

	constructor(builder: FormBuilder, http: Http, router: Router) {
		this.http = http;
		this.router = router;
		
		this.registerForm = builder.group({
			id: ["", Validators.none],
			ime: ["", Validators.none],
			prezime: ["", Validators.none],
			username: ["", Validators.none],
			password: ["", Validators.none],
			rola: ["", Validators.none],

		});
				}

	dodajKorisnika(): void {
		if (this.registerForm.value.id !== "") {
			alert("Ne treba da unosite vrednost u polje ID.")
		}
		if ((this.registerForm.value.ime === "") || (this.registerForm.value.prezime === "") ||
			(this.registerForm.value.username === "") || (this.registerForm.value.password === "") ||
			(this.registerForm.value.rola === "")) {
			alert("Niste popunili sva polja u formi!");
		}
		else {
			var data = "&KORISNIK_IME=" + this.registerForm.value.ime + "&KORISNIK_PREZIME=" + this.registerForm.value.prezime
				+ "&KORISNIK_USERNAME=" + this.registerForm.value.username + "&KORISNIK_PASSWORD=" + this.registerForm.value.password
				+ "&KORISNIK_ROLA=" + this.registerForm.value.rola;

			var headers = new Headers();

			headers.append('Content-Type', 'application/x-www-form-urlencoded');
			headers.append('token', localStorage.getItem('token'));


			this.http.post('http://localhost/WebBiblioteka/regkorisnik.php', data, { headers: headers })
				.map(res => res)
				.subscribe(data => this.postResponse = data,
				err => alert(JSON.stringify(err)),
				() => {

					if (this.postResponse._body.indexOf("error") === -1) {
						alert("Uspesno dodavanje korisnika");
						this.router.parent.navigate(['./AdmKorisnik']);
					} else {
						alert("Neuspesno dodavanje korisnika");
					}
				}
				);
		}
	}

	izmeniKorisnika(): void {
		if ((this.registerForm.value.id === "") || (this.registerForm.value.ime === "") ||
			(this.registerForm.value.prezime === "") || (this.registerForm.value.username === "") ||
			(this.registerForm.value.password === "") || (this.registerForm.value.rola === "")) {
			alert("Niste popunili sva polja u formi!");
		}
		else {
			var data = "KORISNIK_ID=" + this.registerForm.value.id + "&KORISNIK_IME=" + this.registerForm.value.ime
				+ "&KORISNIK_PREZIME=" + this.registerForm.value.prezime + "&KORISNIK_USERNAME=" + this.registerForm.value.username
				+ "&KORISNIK_PASSWORD=" + this.registerForm.value.password + "&KORISNIK_ROLA=" + this.registerForm.value.rola;

			var headers = new Headers();

			headers.append('Content-Type', 'application/x-www-form-urlencoded');
			headers.append('token', localStorage.getItem('token'));


			this.http.post('http://localhost/WebBiblioteka/izmenikorisnika.php', data, { headers: headers })
				.map(res => res)
				.subscribe(data => this.postResponse = data,
				err => alert(JSON.stringify(err)),
				() => {

					if (this.postResponse._body.indexOf("error") === -1) {
						alert("Uspesno izmenjen korisnik");
						this.router.parent.navigate(['./AdmKorisnik']);
					} else {
						alert("Neuspesno izmenjen korisnik");
					}
				}
				);
		}
	}

	obrisiKorisnika(): void {
		if (this.registerForm.value.id === "") {
			alert("Niste popunili ID polje u formi!");
		}
		else {
			var data = "KORISNIK_ID=" + this.registerForm.value.id;
			var headers = new Headers();

			headers.append('Content-Type', 'application/x-www-form-urlencoded');
			headers.append('token', localStorage.getItem('token'));


			this.http.get('http://localhost/WebBiblioteka/obrisikorisnika.php?' + data, { headers: headers })
				.map(res => res)
				.subscribe(data => this.postResponse = data,
				err => alert(JSON.stringify(err)),
				() => {

					if (this.postResponse._body.indexOf("error") === -1) {
						alert("Uspesno obrisan korisnik");
						this.router.parent.navigate(['./AdmKorisnik']);
					} else {
						alert("Neuspesan pokusaj brisanja korisnika. \nProverite da li postoji broj korisnika koji ste naveli.");
					}
				}
				);
		}
	}

}