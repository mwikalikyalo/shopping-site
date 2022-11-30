import { Component, OnInit } from '@angular/core';
import { FaStackItemSizeDirective } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  faStar= faStar;

  constructor() { }

  ngOnInit(): void {
  }

}
