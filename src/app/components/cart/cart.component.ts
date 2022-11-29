import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { FormArray, FormControl } from '@angular/forms';
import { Product } from '../../product';
import { Quantity } from '../../quantity';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  faTrash = faTrash;
  product: Product[] = [];
  // quantity: Quantity | any;
  quantity: Quantity|any = [{ key: 1, values: 0 }];
  quant= this.cartService.getItem();
  

  constructor(private cartService: CartService, private httpClient: HttpClient) { }

  ngOnInit(): void {
    
  }
  
  onClearCart(){
    this.cartService.clearCart();
    window.alert("Your item has been removed to your cart.");
  }
  removeFromCart(item: Product){
    this.cartService.removeItem(item);
  }
  onCheckoutItem(){
    this.cartService.checkoutItem();
    window.alert("Your items will be delievered to you in 7 days.")
  }

}
