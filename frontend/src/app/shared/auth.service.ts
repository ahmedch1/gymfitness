import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
 
register(user: User): Observable<any> {
  return this.http.post('http://127.0.0.1:8000/api/auth/register', user);
}

// Login
signin(user: User): Observable<any> {
  return this.http.post<any>('http://127.0.0.1:8000/api/auth/login', user);
}
}
