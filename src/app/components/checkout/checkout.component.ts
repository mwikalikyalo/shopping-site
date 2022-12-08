import { Component, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  faStar= faStar;
  public product: any = [];
  public totalPrice: number;
  public card:boolean = true;
  public mpesa:boolean = false;
  public shippingCost: number= 8;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getProduct()
    .subscribe(res=>{
      this.product = res;
    });
    this.totalPrice = this.cartService.getTotalPrice();
  }

  show() {
    this.card = !this.card;
  }

  hide(){
    this.mpesa = !this.mpesa;
  }

  
}
