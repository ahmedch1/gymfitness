import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthStateService } from '../shared/auth-state.service';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {
  isloggedin:boolean;
  constructor(private router: Router,private auth:AuthStateService){}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.auth.userAuthState.subscribe((data:any)=>this.isloggedin = data)
    if (this.isloggedin) {
      return true;
    } else {
      this.router.navigateByUrl('/login');
      return false;
    }
  }
  
      
  
  
}
