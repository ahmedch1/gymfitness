import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Entraineur } from '../Models/entraineur';
import { EntraineurService } from '../services/entraineur.service';

@Component({
  selector: 'app-entraineur',
  templateUrl: './entraineur.component.html',
  styleUrls: ['./entraineur.component.css']
})
export class EntraineurComponent implements OnInit {
  entraineur:Entraineur[];

  constructor(private service: EntraineurService) { }

  ngOnInit(): void {
    this.service.getEntraineur().subscribe((data:Entraineur[])=> this.entraineur = data);
  }
  deleteEntraineur(id:number){
    this.service.deleteEntraineur(id).subscribe(); }

}

