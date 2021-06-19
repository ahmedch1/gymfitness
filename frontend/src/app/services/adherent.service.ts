import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Adherent } from '../Models/adherent';

@Injectable({
  providedIn: 'root'
})
export class AdherentService {
  
  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
    }
  constructor(private http:HttpClient) { }


  getAdhenrent(){
    return this.http.get("http://127.0.0.1:8000/api/auth/adherent");  
  }
  addAdherent(Adherent:Adherent){
    
    return this.http.post<Adherent>("http://127.0.0.1:8000/api/auth/addadherent",Adherent,this.httpOptions);
  }
  updateAdherent(Adherent:Adherent,id:number){
    
    return this.http.put<Adherent>("http://127.0.0.1:8000/api/auth/updateadherent/"+id,Adherent,this.httpOptions);
  }
  deleteAdherent(id:number){
    
    return this.http.delete<Adherent>("http://127.0.0.1:8000/api/auth/delete/"+id);
  }
}
