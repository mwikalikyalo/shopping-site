import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from '../../product';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  faTrash = faTrash;
  public product: any = [];
  public totalPrice !: number;

  quant= this.cartService.getItem();

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
  };

  removeItem(product: any){
    this.cartService.removeItem(product);
    console.log("done")
  }

  onRemoveAllCart(){
    this.cartService.removeAllCart();
  };


}
