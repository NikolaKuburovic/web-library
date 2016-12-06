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
    var AdmIzdavacComponent;
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
            AdmIzdavacComponent = (function () {
                function AdmIzdavacComponent(builder, http, router) {
                    this.http = http;
                    this.router = router;
                    this.registerForm = builder.group({
                        id: ["", common_1.Validators.none],
                        naziv: ["", common_1.Validators.none],
                        mesto: ["", common_1.Validators.none],
                        drzava: ["", common_1.Validators.none],
                    });
                }
                AdmIzdavacComponent.prototype.dodajIzdavaca = function () {
                    var _this = this;
                    if (this.registerForm.value.id !== "") {
                        alert("Ne treba da unosite vrednost u polje ID.");
                    }
                    if ((this.registerForm.value.naziv === "") || (this.registerForm.value.mesto === "")
                        || (this.registerForm.value.drzava === "")) {
                        alert("Niste popunili sva polja u formi!");
                    }
                    else {
                        var data = "&IZDAVAC_NAZIV=" + this.registerForm.value.naziv + "&IZDAVAC_MESTO=" + this.registerForm.value.mesto
                            + "&IZDAVAC_DRZAVA=" + this.registerForm.value.drzava;
                        var headers = new http_1.Headers();
                        headers.append('Content-Type', 'application/x-www-form-urlencoded');
                        headers.append('token', localStorage.getItem('token'));
                        this.http.post('http://localhost/WebBiblioteka/regizdavac.php', data, { headers: headers })
                            .map(function (res) { return res; })
                            .subscribe(function (data) { return _this.postResponse = data; }, function (err) { return alert(JSON.stringify(err)); }, function () {
                            if (_this.postResponse._body.indexOf("error") === -1) {
                                alert("Uspesno dodavanje izdavaca");
                                _this.router.parent.navigate(['./AdmIzdavac']);
                            }
                            else {
                                alert("Neuspesno dodavanje izdavaca");
                            }
                        });
                    }
                };
                AdmIzdavacComponent.prototype.izmeniIzdavaca = function () {
                    var _this = this;
                    if ((this.registerForm.value.id === "") || (this.registerForm.value.naziv === "") ||
                        (this.registerForm.value.mesto === "") || (this.registerForm.value.drzava === "")) {
                        alert("Niste popunili sva polja u formi!");
                    }
                    else {
                        var data = "IZDAVAC_ID=" + this.registerForm.value.id + "&IZDAVAC_NAZIV=" + this.registerForm.value.naziv
                            + "&IZDAVAC_MESTO=" + this.registerForm.value.mesto + "&IZDAVAC_DRZAVA=" + this.registerForm.value.drzava;
                        var headers = new http_1.Headers();
                        headers.append('Content-Type', 'application/x-www-form-urlencoded');
                        headers.append('token', localStorage.getItem('token'));
                        this.http.post('http://localhost/WebBiblioteka/izmeniizdavaca.php', data, { headers: headers })
                            .map(function (res) { return res; })
                            .subscribe(function (data) { return _this.postResponse = data; }, function (err) { return alert(JSON.stringify(err)); }, function () {
                            if (_this.postResponse._body.indexOf("error") === -1) {
                                alert("Uspesno izmenjen izdavac");
                                _this.router.parent.navigate(['./AdmIzdavac']);
                            }
                            else {
                                alert("Neuspesno izmenjen izdavac");
                            }
                        });
                    }
                };
                AdmIzdavacComponent.prototype.obrisiIzdavaca = function () {
                    var _this = this;
                    if (this.registerForm.value.id === "") {
                        alert("Niste popunili ID polje u formi!");
                    }
                    else {
                        var data = "IZDAVAC_ID=" + this.registerForm.value.id;
                        var headers = new http_1.Headers();
                        headers.append('Content-Type', 'application/x-www-form-urlencoded');
                        headers.append('token', localStorage.getItem('token'));
                        this.http.get('http://localhost/WebBiblioteka/obrisiizdavaca.php?' + data, { headers: headers })
                            .map(function (res) { return res; })
                            .subscribe(function (data) { return _this.postResponse = data; }, function (err) { return alert(JSON.stringify(err)); }, function () {
                            if (_this.postResponse._body.indexOf("error") === -1) {
                                alert("Uspesno obrisan izdavac");
                                _this.router.parent.navigate(['./AdmIzdavac']);
                            }
                            else {
                                alert("Neuspesan pokusaj brisanja izdavaca. \nProverite da li postoji broj izdavaca koji ste naveli.");
                            }
                        });
                    }
                };
                AdmIzdavacComponent = __decorate([
                    core_1.Component({
                        selector: 'AdmIzdavac',
                        templateUrl: 'app/admizdavac/admizdavac.html',
                        directives: [common_1.FORM_DIRECTIVES],
                        viewBindings: [common_1.FORM_BINDINGS]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, http_1.Http, router_1.Router])
                ], AdmIzdavacComponent);
                return AdmIzdavacComponent;
            }());
            exports_1("AdmIzdavacComponent", AdmIzdavacComponent);
        }
    }
});
//# sourceMappingURL=admizdavac.component.js.map