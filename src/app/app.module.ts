import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DisplayComponent } from './display/display.component';
import { ItemsService } from './items.service';//added the items service
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { GuardService } from './guard.service';
import { AuthService } from './auth.service'


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    DisplayComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [
    //added the service
    ItemsService,
    GuardService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
