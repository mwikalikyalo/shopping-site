import { Injectable } from '@angular/core';
import { Product } from '../app/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Product[]= [];

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

  getTotalValue():number {
    let sum = this.items.reduce(
        (a, b) => {a = a + b['items']?.price * b.quantity; return a;}, 0);
    return sum;
  }

  constructor() { }
}
