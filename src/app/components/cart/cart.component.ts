import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from '../../product';
import { Quantity } from '../../quantity';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
 
  // quantity: Quantity | any;
  // quantity: Quantity|any = [{ key: 1, values: 0 }];
  // prodQuantity: Number = this.quantity ;
  faTrash = faTrash;
  public product: any = [];
  // public totalPrice !: number;
  totalPrice: any= 0;

  quant= this.cartService.getItem();

  // @Output()
  // addQuantity: EventEmitter<Number> = new EventEmitter<Number>()

  constructor(private cartService: CartService, private httpClient: HttpClient) { }

  ngOnInit(): void {  
    this.cartService.getProduct()
    .subscribe(res=>{
      this.product = res;
      this.totalPrice = this.cartService.getTotalPrice();
    });
  };

  onClearCart(){
    this.cartService.clearCart();
    window.alert("Your item has been removed to your cart.");
  }
  removeFromCart(item: Product){
    this.cartService.removeItem(item);
  }
  // onAddQuantity(){
  //   this.addQuantity.emit(this.prodQuantity)
  // }

  

}
