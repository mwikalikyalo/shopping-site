import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CartComponent } from './components/cart/cart.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DisplayComponent } from './components/display/display.component';
import { EnlargedComponent } from './components/enlarged/enlarged.component';
import { HomeComponent } from './components/home/home.component';

import { GuardService } from './services/guard.service';
import { AuthService } from './services/auth.service';
import { ItemsService } from './services/items.service';//added the items service
import { CartService } from './services/cart.service';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    DisplayComponent,
    HomeComponent,
    EnlargedComponent,
    NavbarComponent,
    CartComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    //added the service
    ItemsService,
    GuardService,
    AuthService,
    CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
