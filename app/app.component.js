System.register(['angular2/core', 'angular2/router', 'angular2/http', './mainpage/mainpage.component', './aboutus/aboutus.component', './admkorisnik/admkorisnik.component', './admizdavac/admizdavac.component', './admpisac/admpisac.component', './admknjiga/admknjiga.component', './webknjige/webknjige.component', './progknjige/progknjige.component', './bazeknjige/bazeknjige.component', './mobknjige/mobknjige.component', './osknjige/osknjige.component', './register/register.component', './login/login.component'], function(exports_1, context_1) {
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
    var core_1, router_1, http_1, mainpage_component_1, aboutus_component_1, admkorisnik_component_1, admizdavac_component_1, admpisac_component_1, admknjiga_component_1, webknjige_component_1, progknjige_component_1, bazeknjige_component_1, mobknjige_component_1, osknjige_component_1, register_component_1, login_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (mainpage_component_1_1) {
                mainpage_component_1 = mainpage_component_1_1;
            },
            function (aboutus_component_1_1) {
                aboutus_component_1 = aboutus_component_1_1;
            },
            function (admkorisnik_component_1_1) {
                admkorisnik_component_1 = admkorisnik_component_1_1;
            },
            function (admizdavac_component_1_1) {
                admizdavac_component_1 = admizdavac_component_1_1;
            },
            function (admpisac_component_1_1) {
                admpisac_component_1 = admpisac_component_1_1;
            },
            function (admknjiga_component_1_1) {
                admknjiga_component_1 = admknjiga_component_1_1;
            },
            function (webknjige_component_1_1) {
                webknjige_component_1 = webknjige_component_1_1;
            },
            function (progknjige_component_1_1) {
                progknjige_component_1 = progknjige_component_1_1;
            },
            function (bazeknjige_component_1_1) {
                bazeknjige_component_1 = bazeknjige_component_1_1;
            },
            function (mobknjige_component_1_1) {
                mobknjige_component_1 = mobknjige_component_1_1;
            },
            function (osknjige_component_1_1) {
                osknjige_component_1 = osknjige_component_1_1;
            },
            function (register_component_1_1) {
                register_component_1 = register_component_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(router, http) {
                    var _this = this;
                    this.router = router;
                    this.http = http;
                    router.subscribe(function (val) {
                        if (localStorage.getItem('token') !== null) {
                            _this.isAuth = "yes";
                            if (localStorage.getItem('admin') === "yes") {
                                _this.isAdmin = "yes";
                            }
                            else {
                                _this.isAdmin = "no";
                            }
                        }
                        else {
                            _this.isAuth = "no";
                        }
                    });
                }
                AppComponent.prototype.onLogout = function () {
                    localStorage.removeItem("token");
                    localStorage.removeItem("admin");
                    this.router.navigate(['./MainPage']);
                    window.location.reload();
                    if (localStorage.getItem('token') !== null) {
                        this.isAuth = "yes";
                        if (localStorage.getItem('admin') === "yes") {
                            this.isAdmin = "yes";
                        }
                        else {
                            this.isAdmin = "no";
                        }
                    }
                    else {
                        this.isAuth = "no";
                        this.isAdmin = "no";
                    }
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'moja-aplikacija',
                        templateUrl: 'app/router.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'MainPage', component: mainpage_component_1.MainPageComponent, useAsDefault: true },
                        { path: '/aboutus', name: 'AboutUs', component: aboutus_component_1.AboutUsComponent },
                        { path: '/admkorisnik', name: 'AdmKorisnik', component: admkorisnik_component_1.AdmKorisnikComponent },
                        { path: '/admizdavac', name: 'AdmIzdavac', component: admizdavac_component_1.AdmIzdavacComponent },
                        { path: '/admpisac', name: 'AdmPisac', component: admpisac_component_1.AdmPisacComponent },
                        { path: '/admknjiga', name: 'AdmKnjiga', component: admknjiga_component_1.AdmKnjigaComponent },
                        { path: '/webknjige', name: 'Webknjige', component: webknjige_component_1.WebknjigeComponent },
                        { path: '/progknjige', name: 'Progknjige', component: progknjige_component_1.ProgknjigeComponent },
                        { path: '/bazeknjige', name: 'Bazeknjige', component: bazeknjige_component_1.BazeknjigeComponent },
                        { path: '/mobknjige', name: 'Mobknjige', component: mobknjige_component_1.MobknjigeComponent },
                        { path: '/osknjige', name: 'Osknjige', component: osknjige_component_1.OsknjigeComponent },
                        { path: '/register', name: 'Register', component: register_component_1.RegisterComponent },
                        { path: '/login', name: 'Login', component: login_component_1.LoginComponent }
                    ]), 
                    __metadata('design:paramtypes', [router_1.Router, http_1.Http])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map