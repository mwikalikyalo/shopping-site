import { Component, OnInit } from '@angular/core';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faSquareTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  faEnvelope = faEnvelope;
  faFacebook = faFacebook;
  faSquareTwitter = faSquareTwitter;
  faCartShopping = faCartShopping;
  
  onSubmit(form: NgForm){
    console.log(form)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
