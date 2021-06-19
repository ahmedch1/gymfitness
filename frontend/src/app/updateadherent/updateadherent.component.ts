import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Adherent } from '../Models/adherent';
import { AdherentService } from '../services/adherent.service';

@Component({
  selector: 'app-updateadherent',
  templateUrl: './updateadherent.component.html',
  styleUrls: ['./updateadherent.component.css']
})
export class UpdateadherentComponent implements OnInit {

  nom:any;
  prenom:any;
  tel:any;
  dateNaissance:any;
  paramurl:any;
  constructor(private service:AdherentService,private router:Router, private active: ActivatedRoute) { }

  ngOnInit(): void {
    this.paramurl = this.active.snapshot.params.id;
  }
  update(){
    let adh = new Adherent();
    adh.nom = this.nom;
    adh.prenom = this.prenom;
    adh.tel = this.tel;
    adh.date_de_naissance = this.dateNaissance;
    this.service.updateAdherent(adh,this.paramurl).subscribe(
      res=> this.router.navigateByUrl('home')
      );
  }

}
