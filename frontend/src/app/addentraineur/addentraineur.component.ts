import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Entraineur} from '../Models/entraineur';
import {EntraineurService} from '../services/entraineur.service';


@Component({
  selector: 'app-addentraineur',
  templateUrl: './addentraineur.component.html',
  styleUrls: ['./addentraineur.component.css']
})
export class AddentraineurComponent implements OnInit {
  nom:any;
  prenom:any;
  tel:any;
  Email:any;
  constructor(private service:EntraineurService ,private router:Router) { }

  ngOnInit(): void {
  }
  ajout(){
   
    
  }
  
}
