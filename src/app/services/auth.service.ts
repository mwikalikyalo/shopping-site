import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn: boolean= false;

  login(){
    this.loggedIn = true;
  }

  logout(){
    this.loggedIn= false;
  }

  isAuthenticated(){
    return this.loggedIn;
  }

  private existingUsernames=['']
  checkIfUsernameExists(value: string) {
    return of(this.existingUsernames.some((a) => a === value)).pipe(
      delay(1000)
    );
  }

  constructor() { }
}
