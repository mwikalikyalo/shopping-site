import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../product';
import { Quantity } from '../quantity';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  faTrash = faTrash;
  product: Product[] = [];
  quantity: Quantity | any;
  
  quant= this.cartService.getItem();

  constructor(private cartService: CartService, private httpClient: HttpClient) { }

  ngOnInit(): void {
    
  }
  
  onClearCart(){
    this.cartService.clearCart();
    window.alert("Your item has been removed to your cart.");
  }
   

}
