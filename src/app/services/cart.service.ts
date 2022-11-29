import { Injectable } from '@angular/core';
import { Product } from '../product';
import { Quantity } from '../quantity';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Product[]= [];
  quantity: Quantity[] = [];

  addToCart(product: Product){
    this.items.push(product);
  }

  getItem(){
    return this.items;
  }

  clearCart(){
    this.items= [];
    return this.items;
  }

  removeItem(items: Product) {
    const index = this.items.indexOf(items, 0);
    if (index > -1) {
        this.items.splice(index, 1);
    }
  }

  checkoutItem(){
    this.items= [];
    return this.items;  
  }

  constructor() { }
}
