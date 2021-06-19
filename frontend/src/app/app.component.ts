import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './Models/user';
import { AuthenticationService } from './services/authentication.service';
import firebase from "firebase/app";
import "firebase/firestore";
import { AuthStateService } from './shared/auth-state.service';
import { TokenService } from './shared/token.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'GimAngular';
  

    
  isSignedIn: boolean;

  constructor(
    private auth: AuthStateService,
    public router: Router,
    public token: TokenService,
  ) {
  }

  ngOnInit() {
    this.auth.userAuthState.subscribe(val => {
        this.isSignedIn = val;
    });
    console.log(this.isSignedIn)
  }

  // Signout
  signOut() {
    this.auth.setAuthState(false);
    this.token.removeToken();
    this.router.navigate(['login']);
  }

    /* logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    } */
}
