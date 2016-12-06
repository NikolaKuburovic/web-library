import { Component } from 'angular2/core';
import { RouteConfig, Router, ROUTER_DIRECTIVES } from 'angular2/router';
import { Http, HTTP_PROVIDERS, Headers } from 'angular2/http';
import { MainPageComponent } from './mainpage/mainpage.component';
import { AboutUsComponent } from './aboutus/aboutus.component';
import { AdmKorisnikComponent } from './admkorisnik/admkorisnik.component';
import { AdmIzdavacComponent } from './admizdavac/admizdavac.component';
import { AdmPisacComponent } from './admpisac/admpisac.component';
import { AdmKnjigaComponent } from './admknjiga/admknjiga.component';
import { WebknjigeComponent } from './webknjige/webknjige.component';
import { ProgknjigeComponent } from './progknjige/progknjige.component';
import { BazeknjigeComponent } from './bazeknjige/bazeknjige.component';
import { MobknjigeComponent } from './mobknjige/mobknjige.component';
import { OsknjigeComponent } from './osknjige/osknjige.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent} from './login/login.component';


@Component({
    selector: 'moja-aplikacija',
    templateUrl: 'app/router.html',
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: '/', name: 'MainPage', component: MainPageComponent, useAsDefault: true },
    { path: '/aboutus', name: 'AboutUs', component: AboutUsComponent },
    { path: '/admkorisnik', name: 'AdmKorisnik', component: AdmKorisnikComponent },
    { path: '/admizdavac', name: 'AdmIzdavac', component: AdmIzdavacComponent },
    { path: '/admpisac', name: 'AdmPisac', component: AdmPisacComponent },
    { path: '/admknjiga', name: 'AdmKnjiga', component: AdmKnjigaComponent },
    { path: '/webknjige', name: 'Webknjige', component: WebknjigeComponent },
    { path: '/progknjige', name: 'Progknjige', component: ProgknjigeComponent },
    { path: '/bazeknjige', name: 'Bazeknjige', component: BazeknjigeComponent },
    { path: '/mobknjige', name: 'Mobknjige', component: MobknjigeComponent },
    { path: '/osknjige', name: 'Osknjige', component: OsknjigeComponent },
    { path: '/register', name: 'Register', component: RegisterComponent },
    { path: '/login', name: 'Login', component: LoginComponent }
])
export class AppComponent {

    router: Router;
    http: Http;
    isAuth: String;
    adminToken: String;
    isAdmin: String;

    constructor(router: Router, http: Http) {
        this.router = router;
        this.http = http;


        router.subscribe((val) => {
            if (localStorage.getItem('token') !== null) {
                this.isAuth = "yes";
                if (localStorage.getItem('admin') === "yes") {
                    this.isAdmin = "yes"
                }
                else {
                    this.isAdmin = "no";
                }
            } else {
                this.isAuth = "no";
            }
        });

    }

    onLogout(): void {
        localStorage.removeItem("token");
        localStorage.removeItem("admin");
        this.router.navigate(['./MainPage']);
        window.location.reload();
        if (localStorage.getItem('token') !== null) {
            this.isAuth = "yes";
            if (localStorage.getItem('admin') === "yes") {
                this.isAdmin = "yes"
            }
            else {
                this.isAdmin = "no";
            }

        } else {
            this.isAuth = "no";
            this.isAdmin = "no"

        }
    }

}