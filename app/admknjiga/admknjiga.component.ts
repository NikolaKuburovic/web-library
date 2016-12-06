import { Component, Directive } from 'angular2/core';
import { FormBuilder, Validators, ControlGroup, Control, FORM_DIRECTIVES, FORM_BINDINGS} from 'angular2/common';
import { Http, HTTP_PROVIDERS, Headers } from 'angular2/http';
import 'rxjs/Rx';
import { Router, ROUTER_PROVIDERS } from 'angular2/router';

@Component({
	selector: 'AdmKnjiga',
	templateUrl: 'app/admknjiga/admknjiga.html',
	directives: [FORM_DIRECTIVES],
	viewBindings: [FORM_BINDINGS]
})

export class AdmKnjigaComponent {
	registerForm: ControlGroup;
	http: Http;
	router: Router;
	postResponse: String;
	imePrezime: Object[];
	izdavac: Object[];

	constructor(builder: FormBuilder, http: Http, router: Router) {
		this.http = http;
		this.router = router;
		this.registerForm = builder.group({
			knjigaId: ["", Validators.none],
            pisacId: ["", Validators.none],
            izdavacId: ["", Validators.none],
			isbn: ["", Validators.none],
			naslov: ["", Validators.none],
            brojStrana: ["", Validators.none],
			brojIzdanja: ["", Validators.none],
			godinaIzdanja: ["", Validators.none],
			oblast: ["", Validators.none],
			opis: ["", Validators.none],

		});
				}

	ngOnInit() {
		this.pisciImePrezime();
		this.izdavacNaziv();
	}

	pisciImePrezime() {
		var headers = new Headers();
		headers.append('Content-Type', 'application/x-www-form-urlencoded');
		headers.append('token', localStorage.getItem('token'));

		this.http.get('http://localhost/WebBiblioteka/piscijson.php', { headers: headers })
			.map(res => res.json()).share()
			.subscribe(imePrezime => {
				this.imePrezime = imePrezime;
			},
			err => {
				this.router.parent.navigate(['./MainPage']);
			}
			);
	}
	izdavacNaziv() {
		var headers = new Headers();
		headers.append('Content-Type', 'application/x-www-form-urlencoded');
		headers.append('token', localStorage.getItem('token'));

		this.http.get('http://localhost/WebBiblioteka/izdavacijson.php', { headers: headers })
			.map(res => res.json()).share()
			.subscribe(izdavac => {
				this.izdavac = izdavac;
			},
			err => {
				this.router.parent.navigate(['./MainPage']);
			}
			);
	}
	dodajKnjigu(): void {
		if (this.registerForm.value.knjigaId !== "") {
			alert("Ne treba da unosite vrednost u polje ID.")
		}
		if ((this.registerForm.value.pisacId === "") || (this.registerForm.value.izdavacId === "")
			|| (this.registerForm.value.isbn === "") || (this.registerForm.value.naslov === "")
			|| (this.registerForm.value.brojStrana === "") || (this.registerForm.value.brojIzdanja === "")
			|| (this.registerForm.value.godinaIzdanja === "") || (this.registerForm.value.oblast === "")
			|| (this.registerForm.value.opis === "")) {
			alert("Niste popunili sva polja u formi!");
		}
		else {
			var data = "&PISAC_ID=" + this.registerForm.value.pisacId + "&IZDAVAC_ID=" + this.registerForm.value.izdavacId
				+ "&KNJIGA_ISBN=" + this.registerForm.value.isbn + "&KNJIGA_NASLOV=" + this.registerForm.value.naslov
				+ "&KNJIGA_BROJ_STRANA=" + this.registerForm.value.brojStrana + "&KNJIGA_BROJ_IZDANJA=" + this.registerForm.value.brojIzdanja
				+ "&KNJIGA_GODINA_IZDANJA=" + this.registerForm.value.godinaIzdanja + "&KNJIGA_OBLAST=" + this.registerForm.value.oblast
				+ "&KNJIGA_OPIS=" + this.registerForm.value.opis;

			var headers = new Headers();

			headers.append('Content-Type', 'application/x-www-form-urlencoded');
			headers.append('token', localStorage.getItem('token'));


			this.http.post('http://localhost/WebBiblioteka/regknjiga.php', data, { headers: headers })
				.map(res => res)
				.subscribe(data => this.postResponse = data,
				err => alert(JSON.stringify(err)),
				() => {

					if (this.postResponse._body.indexOf("error") === -1) {
						alert("Uspesno dodavanje knjige");
						this.router.parent.navigate(['./AdmKnjiga']);
					} else {
						alert("Neuspesno dodavanje knjige");
					}
				}
				);
		}
	}

	izmeniKnjigu(): void {
		if ((this.registerForm.value.knjigaId === "") || (this.registerForm.value.pisacId === "")
			|| (this.registerForm.value.izdavacId === "") || (this.registerForm.value.isbn === "")
			|| (this.registerForm.value.naslov === "") || (this.registerForm.value.brojStrana === "")
			|| (this.registerForm.value.brojIzdanja === "") || (this.registerForm.value.godinaIzdanja === "")
			|| (this.registerForm.value.oblast === "") || (this.registerForm.value.opis === "")) {
			alert("Niste popunili sva polja u formi!");
		}
		else {
			var data = "&KNJIGA_ID=" + this.registerForm.value.knjigaId + "&PISAC_ID=" + this.registerForm.value.pisacId
				+ "&IZDAVAC_ID=" + this.registerForm.value.izdavacId + "&KNJIGA_ISBN=" + this.registerForm.value.isbn
				+ "&KNJIGA_NASLOV=" + this.registerForm.value.naslov + "&KNJIGA_BROJ_STRANA=" + this.registerForm.value.brojStrana
				+ "&KNJIGA_BROJ_IZDANJA=" + this.registerForm.value.brojIzdanja + "&KNJIGA_GODINA_IZDANJA=" + this.registerForm.value.godinaIzdanja
				+ "&KNJIGA_OBLAST=" + this.registerForm.value.oblast + "&KNJIGA_OPIS=" + this.registerForm.value.opis;

			var headers = new Headers();

			headers.append('Content-Type', 'application/x-www-form-urlencoded');
			headers.append('token', localStorage.getItem('token'));


			this.http.post('http://localhost/WebBiblioteka/izmeniknjigu.php', data, { headers: headers })
				.map(res => res)
				.subscribe(data => this.postResponse = data,
				err => alert(JSON.stringify(err)),
				() => {

					if (this.postResponse._body.indexOf("error") === -1) {
						alert("Uspesno izmenjena knjiga");
						this.router.parent.navigate(['./AdmKnjiga']);
					} else {
						alert("Neuspesno izmenjena knjiga");
					}
				}
				);
		}
	}

	obrisiKnjigu(): void {
		if (this.registerForm.value.isbn === "") {
			alert("Niste popunili ISBN polje u formi!");
		}
		else {
			var data = "KNJIGA_ISBN=" + this.registerForm.value.isbn;
			var headers = new Headers();

			headers.append('Content-Type', 'application/x-www-form-urlencoded');
			headers.append('token', localStorage.getItem('token'));


			this.http.get('http://localhost/WebBiblioteka/obrisiknjigu.php?' + data, { headers: headers })
				.map(res => res)
				.subscribe(data => this.postResponse = data,
				err => alert(JSON.stringify(err)),
				() => {

					if (this.postResponse._body.indexOf("error") === -1) {
						alert("Uspesno obrisana knjiga");
						this.router.parent.navigate(['./AdmKnjiga']);
					} else {
						alert("Neuspesan pokusaj brisanja knjige. \nProverite da li postoji ISBN broj knjige koji ste naveli.");
					}
				}
				);
		}
	}

}