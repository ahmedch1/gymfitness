import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AlertService } from '../services/alert.service';
import { AuthenticationService } from '../services/authentication.service';

import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    erreur = true;
password = '';
login = '';


    constructor(private router: Router) { }
  
    ngOnInit() {
        
        console.log(Boolean(localStorage.getItem('isConnected')));
    }
    isAuthenticated() {
        if (this.login === 'jihen' && this.password === 'brahim') {
        localStorage.setItem('isConnected', 'true');
        this.router.navigateByUrl('/home');
        } else {
        this.erreur = false;
        
        }
        }
        
  

}
