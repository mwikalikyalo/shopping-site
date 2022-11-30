import { Injectable } from '@angular/core';
import { Product } from '../product';
import { Quantity } from '../quantity';
import { BehaviorSubject, Observable } from 'rxjs';

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

  private readonly _cart = new BehaviorSubject<Quantity>(new Quantity());
  readonly cart$ = this._cart.asObservable(); 
  
  get cart(): Quantity {
    return this._cart.getValue();
  }

  set cart(val: Quantity) {
    this._cart.next(val);
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
