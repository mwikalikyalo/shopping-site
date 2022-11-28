import { Injectable } from '@angular/core';
import { Product } from '../app/product';
import { Quantity } from '../app/quantity';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Product[]= [];
  quantity: Quantity[] = [];

  // addToCart(quantity: Quantity){
  //   this.quantity.push(quantity.product);
  // }

  // getItem(){
  //   return this.quantity;
  // }

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

  getTotalValue():number {
    let sum = this.quantity.reduce(
        (a, b) => {a = a + b.product?.price * b.quantity; return a;}, 0);
    return sum;
  }

  constructor() { }
}
