import { Component, OnInit } from '@angular/core';
import { Adherent } from '../Models/adherent';
import { AdherentService } from '../services/adherent.service';

@Component({
  selector: 'app-adhenrent',
  templateUrl: './adhenrent.component.html',
  styleUrls: ['./adhenrent.component.css']
})
export class AdhenrentComponent implements OnInit {
  adherent:Adherent[];
  constructor(private service: AdherentService) { }

  ngOnInit(): void {
    this.service.getAdhenrent().subscribe((data:Adherent[])=> this.adherent = data);
  }
  deleteadherent(id:number){
    this.service.deleteAdherent(id).subscribe();
     }

}
