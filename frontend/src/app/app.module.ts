import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdhenrentComponent } from './adhenrent/adhenrent.component';
import { AddAdherentComponent } from './add-adherent/add-adherent.component';
import { IndexComponent } from './index/index.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AuthInterceptor } from './shared/auth.interceptor';
import { EntraineurComponent } from './entraineur/entraineur.component';
import { AddentraineurComponent } from './addentraineur/addentraineur.component';
import { UpdateadherentComponent } from './updateadherent/updateadherent.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AdhenrentComponent,
    AddAdherentComponent,
    IndexComponent,
    SidebarComponent,
    NavbarComponent,
    SigninComponent,
    SignupComponent,
    EntraineurComponent,
    AddentraineurComponent,
    UpdateadherentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
