import { Component, Directive } from 'angular2/core';
import { FormBuilder, Validators, ControlGroup, Control, FORM_DIRECTIVES, FORM_BINDINGS} from 'angular2/common';
import { Http, HTTP_PROVIDERS, Headers } from 'angular2/http';
import 'rxjs/Rx';
import { Router, ROUTER_PROVIDERS } from 'angular2/router';

@Component({
	selector: 'AdmPisac',
	templateUrl: 'app/admpisac/admpisac.html',
	directives: [FORM_DIRECTIVES],
	viewBindings: [FORM_BINDINGS]
})

export class AdmPisacComponent {
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
            godinaRodjenja: ["", Validators.none],
			drzava: ["", Validators.none],

		});
				}

	dodajPisca(): void {
		if (this.registerForm.value.id !== "") {
			alert("Ne treba da unosite vrednost u polje ID.")
		}
		if ((this.registerForm.value.ime === "") || (this.registerForm.value.prezime === "")
			|| (this.registerForm.value.godinaRodjenja === "") || (this.registerForm.value.drzava === "")) {
			alert("Niste popunili sva polja u formi!");
		}
		else {
			var data = "&PISAC_IME=" + this.registerForm.value.ime + "&PISAC_PREZIME=" + this.registerForm.value.prezime
				+ "&PISAC_GODINA_RODJENJA=" + this.registerForm.value.godinaRodjenja + "&PISAC_DRZAVA=" + this.registerForm.value.drzava;

			var headers = new Headers();

			headers.append('Content-Type', 'application/x-www-form-urlencoded');
			headers.append('token', localStorage.getItem('token'));


			this.http.post('http://localhost/WebBiblioteka/regpisac.php', data, { headers: headers })
				.map(res => res)
				.subscribe(data => this.postResponse = data,
				err => alert(JSON.stringify(err)),
				() => {

					if (this.postResponse._body.indexOf("error") === -1) {
						alert("Uspesno dodavanje pisca");
						this.router.parent.navigate(['./AdmPisac']);
					} else {
						alert("Neuspesno dodavanje pisca");
					}
				}
				);
		}
	}

	izmeniPisca(): void {
		if ((this.registerForm.value.id === "") || (this.registerForm.value.ime === "") ||
			(this.registerForm.value.prezime === "") || (this.registerForm.value.godinaRodjenja === "")
            || (this.registerForm.value.drzava === "")) {
			alert("Niste popunili sva polja u formi!");
		}
		else {
			var data = "PISAC_ID=" + this.registerForm.value.id + "&PISAC_IME=" + this.registerForm.value.ime
				+ "&PISAC_PREZIME=" + this.registerForm.value.prezime + "&PISAC_GODINA_RODJENJA=" + this.registerForm.value.godinaRodjenja
				+ "&PISAC_DRZAVA=" + this.registerForm.value.drzava;

			var headers = new Headers();

			headers.append('Content-Type', 'application/x-www-form-urlencoded');
			headers.append('token', localStorage.getItem('token'));


			this.http.post('http://localhost/WebBiblioteka/izmenipisca.php', data, { headers: headers })
				.map(res => res)
				.subscribe(data => this.postResponse = data,
				err => alert(JSON.stringify(err)),
				() => {

					if (this.postResponse._body.indexOf("error") === -1) {
						alert("Uspesno izmenjen pisac");
						this.router.parent.navigate(['./AdmPisac']);
					} else {
						alert("Neuspesno izmenjen pisac");
					}
				}
				);
		}
	}

	obrisiPisca(): void {
		if (this.registerForm.value.id === "") {
			alert("Niste popunili ID polje u formi!");
		}
		else {
			var data = "PISAC_ID=" + this.registerForm.value.id;
			var headers = new Headers();

			headers.append('Content-Type', 'application/x-www-form-urlencoded');
			headers.append('token', localStorage.getItem('token'));


			this.http.get('http://localhost/WebBiblioteka/obrisipisca.php?' + data, { headers: headers })
				.map(res => res)
				.subscribe(data => this.postResponse = data,
				err => alert(JSON.stringify(err)),
				() => {

					if (this.postResponse._body.indexOf("error") === -1) {
						alert("Uspesno obrisan pisac");
						this.router.parent.navigate(['./AdmPisac']);
					} else {
						alert("Neuspesan pokusaj brisanja pisca. \nProverite da li postoji broj pisca koji ste naveli.");
					}
				}
				);
		}
	}

}