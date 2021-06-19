import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAdherentComponent } from './add-adherent/add-adherent.component';
import { UpdateadherentComponent } from './updateadherent/updateadherent.component';
import { AdhenrentComponent } from './adhenrent/adhenrent.component';
import { GuardGuard } from './guards/guard.guard';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { EntraineurComponent } from './entraineur/entraineur.component';
import { AddentraineurComponent } from './addentraineur/addentraineur.component';


const routes: Routes = [
  { path: 'login', component: SigninComponent },
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
    { path: 'register', component: SignupComponent },
    { path: 'home', component: HomeComponent,canActivate:[GuardGuard] ,children:[
      {path:'', component:AdhenrentComponent},
      {path:'', component:EntraineurComponent},
    {path:'home/addadherent', component:AddAdherentComponent},
    {path:'home/updateadherent/:id', component:UpdateadherentComponent},
    {path:'home/addentraineur', component:AddentraineurComponent}
    ]},
    
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
