import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Adherent } from '../Models/adherent';
import { AdherentService } from '../services/adherent.service';

@Component({
  selector: 'app-add-adherent',
  templateUrl: './add-adherent.component.html',
  styleUrls: ['./add-adherent.component.css']
})
export class AddAdherentComponent implements OnInit {
  nom:any;
  prenom:any;
  tel:any;
  dateNaissance:any;
  constructor(private service:AdherentService,private router:Router) { }

  ngOnInit(): void {
  }
  ajout(){
    let adh = new Adherent();
    adh.nom = this.nom;
    adh.prenom = this.prenom;
    adh.tel = this.tel;
    adh.date_de_naissance = this.dateNaissance;
    this.service.addAdherent(adh).subscribe(
      res=> this.router.navigateByUrl('home')
      );
  }
  

}
