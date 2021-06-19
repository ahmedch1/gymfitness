import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EntraineurService {
  getEntraineur: any;
  deleteEntraineur: any;
  addentraineur(etr: any) {
    
  }

  constructor(private http:HttpClient) { }
}
