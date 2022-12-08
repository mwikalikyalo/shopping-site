import { Component, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  faStar= faStar;
  public card:boolean = false;
  public mpesa:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  show() {
    this.card = !this.card;
  }

  hide(){
    this.mpesa = !this.mpesa;
  }

  
}
