import { Component, Directive } from 'angular2/core';
import { FormBuilder, Validators, ControlGroup, Control, FORM_DIRECTIVES, FORM_BINDINGS} from 'angular2/common';
import {Router, ROUTER_PROVIDERS, ROUTER_DIRECTIVES} from 'angular2/router';
import {Http, HTTP_PROVIDERS, Headers} from 'angular2/http';
import 'rxjs/Rx';

@Component({
  selector: 'Progknjige',
  templateUrl: 'app/progknjige/progknjige.html',
  directives: [ROUTER_DIRECTIVES, FORM_DIRECTIVES],
  viewBindings: [FORM_BINDINGS]

})

export class ProgknjigeComponent {

  router: Router;
  http: Http;
  progknjige: Object[];

  constructor(builder: FormBuilder, router: Router, http: Http) {
    this.router = router;
    this.http = http;

  }

  ngOnInit() {
    this.proglista();
  }

  proglista() {
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('token', localStorage.getItem('token'));

    this.http.get('http://localhost/WebBiblioteka/progknjigejson.php', { headers: headers })
      .map(res => res.json()).share()
      .subscribe(progknjige => {
        this.progknjige = progknjige;
      },
      err => {
        this.router.parent.navigate(['./MainPage']);
      }
      );
  }
  //-------------------------------------------------------
  //FUNKCIJA KOJA SLUZI ZA POVECANJE BROJA PREGLEDA NA KLIK
  //-------------------------------------------------------

  brojpregleda(knjigaIsbn, pisacId): void {
    var data = knjigaIsbn;
    var data2 = pisacId;
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('token', localStorage.getItem('token'));


    this.http.get('http://localhost/WebBiblioteka/knjigabrojpregleda.php?KNJIGA_ISBN=' + data, { headers: headers })
      .map(res => res)
      .subscribe(data => this.postResponse = data,
      err => alert(JSON.stringify(err)),
      () => {

        if (this.postResponse._body.indexOf("error") === -1) {
          alert("Uspesno povecan broj pregleda");
          this.router.parent.navigate(['./MainPage']);
        } else {
          alert("Neuspesan pokusaj povecanja pregleda");
        }
      }
      );
    this.http.get('http://localhost/WebBiblioteka/pisacbrojpregleda.php?PISAC_ID=' + data2, { headers: headers })
      .map(res => res)
      .subscribe(data2 => this.postResponse = data2,
      err => alert(JSON.stringify(err)),
      () => {

        if (this.postResponse._body.indexOf("error") === -1) {
          alert("Uspesno povecan broj pregleda");
          this.router.parent.navigate(['./MainPage']);
        } else {
          alert("Neuspesan pokusaj povecanja pregleda");
        }
      }
      );
  }
}