System.register(['angular2/core', 'angular2/common', 'angular2/router', 'angular2/http', 'rxjs/Rx'], function(exports_1, context_1) {
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
    var core_1, common_1, router_1, http_1;
    var ProgknjigeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            ProgknjigeComponent = (function () {
                function ProgknjigeComponent(builder, router, http) {
                    this.router = router;
                    this.http = http;
                }
                ProgknjigeComponent.prototype.ngOnInit = function () {
                    this.proglista();
                };
                ProgknjigeComponent.prototype.proglista = function () {
                    var _this = this;
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/x-www-form-urlencoded');
                    headers.append('token', localStorage.getItem('token'));
                    this.http.get('http://localhost/WebBiblioteka/progknjigejson.php', { headers: headers })
                        .map(function (res) { return res.json(); }).share()
                        .subscribe(function (progknjige) {
                        _this.progknjige = progknjige;
                    }, function (err) {
                        _this.router.parent.navigate(['./MainPage']);
                    });
                };
                //-------------------------------------------------------
                //FUNKCIJA KOJA SLUZI ZA POVECANJE BROJA PREGLEDA NA KLIK
                //-------------------------------------------------------
                ProgknjigeComponent.prototype.brojpregleda = function (knjigaIsbn, pisacId) {
                    var _this = this;
                    var data = knjigaIsbn;
                    var data2 = pisacId;
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/x-www-form-urlencoded');
                    headers.append('token', localStorage.getItem('token'));
                    this.http.get('http://localhost/WebBiblioteka/knjigabrojpregleda.php?KNJIGA_ISBN=' + data, { headers: headers })
                        .map(function (res) { return res; })
                        .subscribe(function (data) { return _this.postResponse = data; }, function (err) { return alert(JSON.stringify(err)); }, function () {
                        if (_this.postResponse._body.indexOf("error") === -1) {
                            alert("Uspesno povecan broj pregleda");
                            _this.router.parent.navigate(['./MainPage']);
                        }
                        else {
                            alert("Neuspesan pokusaj povecanja pregleda");
                        }
                    });
                    this.http.get('http://localhost/WebBiblioteka/pisacbrojpregleda.php?PISAC_ID=' + data2, { headers: headers })
                        .map(function (res) { return res; })
                        .subscribe(function (data2) { return _this.postResponse = data2; }, function (err) { return alert(JSON.stringify(err)); }, function () {
                        if (_this.postResponse._body.indexOf("error") === -1) {
                            alert("Uspesno povecan broj pregleda");
                            _this.router.parent.navigate(['./MainPage']);
                        }
                        else {
                            alert("Neuspesan pokusaj povecanja pregleda");
                        }
                    });
                };
                ProgknjigeComponent = __decorate([
                    core_1.Component({
                        selector: 'Progknjige',
                        templateUrl: 'app/progknjige/progknjige.html',
                        directives: [router_1.ROUTER_DIRECTIVES, common_1.FORM_DIRECTIVES],
                        viewBindings: [common_1.FORM_BINDINGS]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, router_1.Router, http_1.Http])
                ], ProgknjigeComponent);
                return ProgknjigeComponent;
            }());
            exports_1("ProgknjigeComponent", ProgknjigeComponent);
        }
    }
});
//# sourceMappingURL=progknjige.component.js.map