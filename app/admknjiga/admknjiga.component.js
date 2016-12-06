System.register(['angular2/core', 'angular2/common', 'angular2/http', 'rxjs/Rx', 'angular2/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, http_1, router_1;
    var AdmKnjigaComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            AdmKnjigaComponent = (function () {
                function AdmKnjigaComponent(builder, http, router) {
                    this.http = http;
                    this.router = router;
                    this.registerForm = builder.group({
                        knjigaId: ["", common_1.Validators.none],
                        pisacId: ["", common_1.Validators.none],
                        izdavacId: ["", common_1.Validators.none],
                        isbn: ["", common_1.Validators.none],
                        naslov: ["", common_1.Validators.none],
                        brojStrana: ["", common_1.Validators.none],
                        brojIzdanja: ["", common_1.Validators.none],
                        godinaIzdanja: ["", common_1.Validators.none],
                        oblast: ["", common_1.Validators.none],
                        opis: ["", common_1.Validators.none],
                    });
                }
                AdmKnjigaComponent.prototype.ngOnInit = function () {
                    this.pisciImePrezime();
                    this.izdavacNaziv();
                };
                AdmKnjigaComponent.prototype.pisciImePrezime = function () {
                    var _this = this;
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/x-www-form-urlencoded');
                    headers.append('token', localStorage.getItem('token'));
                    this.http.get('http://localhost/WebBiblioteka/piscijson.php', { headers: headers })
                        .map(function (res) { return res.json(); }).share()
                        .subscribe(function (imePrezime) {
                        _this.imePrezime = imePrezime;
                    }, function (err) {
                        _this.router.parent.navigate(['./MainPage']);
                    });
                };
                AdmKnjigaComponent.prototype.izdavacNaziv = function () {
                    var _this = this;
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/x-www-form-urlencoded');
                    headers.append('token', localStorage.getItem('token'));
                    this.http.get('http://localhost/WebBiblioteka/izdavacijson.php', { headers: headers })
                        .map(function (res) { return res.json(); }).share()
                        .subscribe(function (izdavac) {
                        _this.izdavac = izdavac;
                    }, function (err) {
                        _this.router.parent.navigate(['./MainPage']);
                    });
                };
                AdmKnjigaComponent.prototype.dodajKnjigu = function () {
                    var _this = this;
                    if (this.registerForm.value.knjigaId !== "") {
                        alert("Ne treba da unosite vrednost u polje ID.");
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
                        var headers = new http_1.Headers();
                        headers.append('Content-Type', 'application/x-www-form-urlencoded');
                        headers.append('token', localStorage.getItem('token'));
                        this.http.post('http://localhost/WebBiblioteka/regknjiga.php', data, { headers: headers })
                            .map(function (res) { return res; })
                            .subscribe(function (data) { return _this.postResponse = data; }, function (err) { return alert(JSON.stringify(err)); }, function () {
                            if (_this.postResponse._body.indexOf("error") === -1) {
                                alert("Uspesno dodavanje knjige");
                                _this.router.parent.navigate(['./AdmKnjiga']);
                            }
                            else {
                                alert("Neuspesno dodavanje knjige");
                            }
                        });
                    }
                };
                AdmKnjigaComponent.prototype.izmeniKnjigu = function () {
                    var _this = this;
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
                        var headers = new http_1.Headers();
                        headers.append('Content-Type', 'application/x-www-form-urlencoded');
                        headers.append('token', localStorage.getItem('token'));
                        this.http.post('http://localhost/WebBiblioteka/izmeniknjigu.php', data, { headers: headers })
                            .map(function (res) { return res; })
                            .subscribe(function (data) { return _this.postResponse = data; }, function (err) { return alert(JSON.stringify(err)); }, function () {
                            if (_this.postResponse._body.indexOf("error") === -1) {
                                alert("Uspesno izmenjena knjiga");
                                _this.router.parent.navigate(['./AdmKnjiga']);
                            }
                            else {
                                alert("Neuspesno izmenjena knjiga");
                            }
                        });
                    }
                };
                AdmKnjigaComponent.prototype.obrisiKnjigu = function () {
                    var _this = this;
                    if (this.registerForm.value.isbn === "") {
                        alert("Niste popunili ISBN polje u formi!");
                    }
                    else {
                        var data = "KNJIGA_ISBN=" + this.registerForm.value.isbn;
                        var headers = new http_1.Headers();
                        headers.append('Content-Type', 'application/x-www-form-urlencoded');
                        headers.append('token', localStorage.getItem('token'));
                        this.http.get('http://localhost/WebBiblioteka/obrisiknjigu.php?' + data, { headers: headers })
                            .map(function (res) { return res; })
                            .subscribe(function (data) { return _this.postResponse = data; }, function (err) { return alert(JSON.stringify(err)); }, function () {
                            if (_this.postResponse._body.indexOf("error") === -1) {
                                alert("Uspesno obrisana knjiga");
                                _this.router.parent.navigate(['./AdmKnjiga']);
                            }
                            else {
                                alert("Neuspesan pokusaj brisanja knjige. \nProverite da li postoji ISBN broj knjige koji ste naveli.");
                            }
                        });
                    }
                };
                AdmKnjigaComponent = __decorate([
                    core_1.Component({
                        selector: 'AdmKnjiga',
                        templateUrl: 'app/admknjiga/admknjiga.html',
                        directives: [common_1.FORM_DIRECTIVES],
                        viewBindings: [common_1.FORM_BINDINGS]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, http_1.Http, router_1.Router])
                ], AdmKnjigaComponent);
                return AdmKnjigaComponent;
            }());
            exports_1("AdmKnjigaComponent", AdmKnjigaComponent);
        }
    }
});
//# sourceMappingURL=admknjiga.component.js.map