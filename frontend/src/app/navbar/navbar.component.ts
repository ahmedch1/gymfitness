import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import firebase from "firebase/app";
import "firebase/firestore";
import { AuthService } from '../services/auth.service';
import { AuthStateService } from '../shared/auth-state.service';
import { TokenService } from '../shared/token.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isSignedIn: boolean;

    constructor(private auth: AuthStateService,public router: Router,public token: TokenService) { }
  
    ngOnInit() {
      this.auth.userAuthState.subscribe(val => {
        this.isSignedIn = val;
    });
    }
    signOut() {
      this.auth.setAuthState(false);
      this.token.removeToken();
      this.router.navigate(['login']);
    }
  
    /* onSignOut() {
      this.authService.signOutUser();
    }
 */
}
