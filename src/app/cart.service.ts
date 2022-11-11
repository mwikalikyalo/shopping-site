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

  constructor() { }
}
