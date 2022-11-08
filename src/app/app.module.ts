import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { AuthService } from './auth.service';
import { EnlargedComponent } from './enlarged/enlarged.component'


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    DisplayComponent,
    HomeComponent,
    EnlargedComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
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
