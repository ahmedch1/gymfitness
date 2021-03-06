import { Component, OnInit } from '@angular/core';

import { first } from 'rxjs/operators';
import { User } from '../Models/user';
import { AuthenticationService } from '../services/authentication.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentUser: User;
    users = [];

    constructor(
        private authenticationService: AuthenticationService,
        private userService: UserService
    ) {
        // this.currentUser = this.authenticationService.currentUserValue;
    }

    ngOnInit() {
        // this.loadAllUsers();
        
        console.log(Boolean(localStorage.getItem('isConnected')));
    }

    // deleteUser(id: number) {
    //     this.userService.delete(id)
    //         .pipe(first())
    //         .subscribe(() => this.loadAllUsers());
    // }

    // private loadAllUsers() {
    //     this.userService.getAll()
    //         .pipe(first())
    //         .subscribe(users => this.users = users);
    // }
}
