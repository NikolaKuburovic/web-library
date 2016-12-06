import { Component, Directive } from 'angular2/core';
import { FormBuilder, Validators, ControlGroup, Control, FORM_DIRECTIVES, FORM_BINDINGS} from 'angular2/common';
import { Http, HTTP_PROVIDERS, Headers } from 'angular2/http';
import 'rxjs/Rx';
import { Router, ROUTER_PROVIDERS } from 'angular2/router';

@Component({
	selector: 'AdmIzdavac',
	templateUrl: 'app/admizdavac/admizdavac.html',
	directives: [FORM_DIRECTIVES],
	viewBindings: [FORM_BINDINGS]
})

export class AdmIzdavacComponent {
	registerForm: ControlGroup;
	http: Http;
	router: Router;
	postResponse: String;

	constructor(builder: FormBuilder, http: Http, router: Router) {
		this.http = http;
		this.router = router;
		this.registerForm = builder.group({
			id: ["", Validators.none],
			naziv: ["", Validators.none],
			mesto: ["", Validators.none],
			drzava: ["", Validators.none],
		});
				}

	dodajIzdavaca(): void {
		if (this.registerForm.value.id !== "") {
			alert("Ne treba da unosite vrednost u polje ID.")
		}
		if ((this.registerForm.value.naziv === "") || (this.registerForm.value.mesto === "")
			|| (this.registerForm.value.drzava === "")) {
			alert("Niste popunili sva polja u formi!");
		}
		else {
			var data = "&IZDAVAC_NAZIV=" + this.registerForm.value.naziv + "&IZDAVAC_MESTO=" + this.registerForm.value.mesto
				+ "&IZDAVAC_DRZAVA=" + this.registerForm.value.drzava;

			var headers = new Headers();

			headers.append('Content-Type', 'application/x-www-form-urlencoded');
			headers.append('token', localStorage.getItem('token'));


			this.http.post('http://localhost/WebBiblioteka/regizdavac.php', data, { headers: headers })
				.map(res => res)
				.subscribe(data => this.postResponse = data,
				err => alert(JSON.stringify(err)),
				() => {

					if (this.postResponse._body.indexOf("error") === -1) {
						alert("Uspesno dodavanje izdavaca");
						this.router.parent.navigate(['./AdmIzdavac']);
					} else {
						alert("Neuspesno dodavanje izdavaca");
					}
				}
				);
		}
	}

	izmeniIzdavaca(): void {
		if ((this.registerForm.value.id === "") || (this.registerForm.value.naziv === "") ||
			(this.registerForm.value.mesto === "") || (this.registerForm.value.drzava === "")) {
			alert("Niste popunili sva polja u formi!");
		}
		else {
			var data = "IZDAVAC_ID=" + this.registerForm.value.id + "&IZDAVAC_NAZIV=" + this.registerForm.value.naziv
				+ "&IZDAVAC_MESTO=" + this.registerForm.value.mesto + "&IZDAVAC_DRZAVA=" + this.registerForm.value.drzava;

			var headers = new Headers();

			headers.append('Content-Type', 'application/x-www-form-urlencoded');
			headers.append('token', localStorage.getItem('token'));


			this.http.post('http://localhost/WebBiblioteka/izmeniizdavaca.php', data, { headers: headers })
				.map(res => res)
				.subscribe(data => this.postResponse = data,
				err => alert(JSON.stringify(err)),
				() => {

					if (this.postResponse._body.indexOf("error") === -1) {
						alert("Uspesno izmenjen izdavac");
						this.router.parent.navigate(['./AdmIzdavac']);
					} else {
						alert("Neuspesno izmenjen izdavac");
					}
				}
				);
		}
	}

	obrisiIzdavaca(): void {
		if (this.registerForm.value.id === "") {
			alert("Niste popunili ID polje u formi!");
		}
		else {
			var data = "IZDAVAC_ID=" + this.registerForm.value.id;
			var headers = new Headers();

			headers.append('Content-Type', 'application/x-www-form-urlencoded');
			headers.append('token', localStorage.getItem('token'));


			this.http.get('http://localhost/WebBiblioteka/obrisiizdavaca.php?' + data, { headers: headers })
				.map(res => res)
				.subscribe(data => this.postResponse = data,
				err => alert(JSON.stringify(err)),
				() => {

					if (this.postResponse._body.indexOf("error") === -1) {
						alert("Uspesno obrisan izdavac");
						this.router.parent.navigate(['./AdmIzdavac']);
					} else {
						alert("Neuspesan pokusaj brisanja izdavaca. \nProverite da li postoji broj izdavaca koji ste naveli.");
					}
				}
				);
		}
	}
}