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
    var AdmKorisnikComponent;
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
            AdmKorisnikComponent = (function () {
                function AdmKorisnikComponent(builder, http, router) {
                    this.http = http;
                    this.router = router;
                    this.registerForm = builder.group({
                        id: ["", common_1.Validators.none],
                        ime: ["", common_1.Validators.none],
                        prezime: ["", common_1.Validators.none],
                        username: ["", common_1.Validators.none],
                        password: ["", common_1.Validators.none],
                        rola: ["", common_1.Validators.none],
                    });
                }
                AdmKorisnikComponent.prototype.dodajKorisnika = function () {
                    var _this = this;
                    if (this.registerForm.value.id !== "") {
                        alert("Ne treba da unosite vrednost u polje ID.");
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
                        var headers = new http_1.Headers();
                        headers.append('Content-Type', 'application/x-www-form-urlencoded');
                        headers.append('token', localStorage.getItem('token'));
                        this.http.post('http://localhost/WebBiblioteka/regkorisnik.php', data, { headers: headers })
                            .map(function (res) { return res; })
                            .subscribe(function (data) { return _this.postResponse = data; }, function (err) { return alert(JSON.stringify(err)); }, function () {
                            if (_this.postResponse._body.indexOf("error") === -1) {
                                alert("Uspesno dodavanje korisnika");
                                _this.router.parent.navigate(['./AdmKorisnik']);
                            }
                            else {
                                alert("Neuspesno dodavanje korisnika");
                            }
                        });
                    }
                };
                AdmKorisnikComponent.prototype.izmeniKorisnika = function () {
                    var _this = this;
                    if ((this.registerForm.value.id === "") || (this.registerForm.value.ime === "") ||
                        (this.registerForm.value.prezime === "") || (this.registerForm.value.username === "") ||
                        (this.registerForm.value.password === "") || (this.registerForm.value.rola === "")) {
                        alert("Niste popunili sva polja u formi!");
                    }
                    else {
                        var data = "KORISNIK_ID=" + this.registerForm.value.id + "&KORISNIK_IME=" + this.registerForm.value.ime
                            + "&KORISNIK_PREZIME=" + this.registerForm.value.prezime + "&KORISNIK_USERNAME=" + this.registerForm.value.username
                            + "&KORISNIK_PASSWORD=" + this.registerForm.value.password + "&KORISNIK_ROLA=" + this.registerForm.value.rola;
                        var headers = new http_1.Headers();
                        headers.append('Content-Type', 'application/x-www-form-urlencoded');
                        headers.append('token', localStorage.getItem('token'));
                        this.http.post('http://localhost/WebBiblioteka/izmenikorisnika.php', data, { headers: headers })
                            .map(function (res) { return res; })
                            .subscribe(function (data) { return _this.postResponse = data; }, function (err) { return alert(JSON.stringify(err)); }, function () {
                            if (_this.postResponse._body.indexOf("error") === -1) {
                                alert("Uspesno izmenjen korisnik");
                                _this.router.parent.navigate(['./AdmKorisnik']);
                            }
                            else {
                                alert("Neuspesno izmenjen korisnik");
                            }
                        });
                    }
                };
                AdmKorisnikComponent.prototype.obrisiKorisnika = function () {
                    var _this = this;
                    if (this.registerForm.value.id === "") {
                        alert("Niste popunili ID polje u formi!");
                    }
                    else {
                        var data = "KORISNIK_ID=" + this.registerForm.value.id;
                        var headers = new http_1.Headers();
                        headers.append('Content-Type', 'application/x-www-form-urlencoded');
                        headers.append('token', localStorage.getItem('token'));
                        this.http.get('http://localhost/WebBiblioteka/obrisikorisnika.php?' + data, { headers: headers })
                            .map(function (res) { return res; })
                            .subscribe(function (data) { return _this.postResponse = data; }, function (err) { return alert(JSON.stringify(err)); }, function () {
                            if (_this.postResponse._body.indexOf("error") === -1) {
                                alert("Uspesno obrisan korisnik");
                                _this.router.parent.navigate(['./AdmKorisnik']);
                            }
                            else {
                                alert("Neuspesan pokusaj brisanja korisnika. \nProverite da li postoji broj korisnika koji ste naveli.");
                            }
                        });
                    }
                };
                AdmKorisnikComponent = __decorate([
                    core_1.Component({
                        selector: 'AdmKorisnik',
                        templateUrl: 'app/admkorisnik/admkorisnik.html',
                        directives: [common_1.FORM_DIRECTIVES],
                        viewBindings: [common_1.FORM_BINDINGS]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, http_1.Http, router_1.Router])
                ], AdmKorisnikComponent);
                return AdmKorisnikComponent;
            }());
            exports_1("AdmKorisnikComponent", AdmKorisnikComponent);
        }
    }
});
//# sourceMappingURL=admkorisnik.component.js.map