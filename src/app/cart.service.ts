import { Injectable } from '@angular/core';
import { Product } from '../app/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  products: Product[]= [];

  addToCart(products: Product){
    this.products.push(products);
  }

  getItem(){
    return this.products;
  }

  clearCart(){
    this.products= [];
    return this.products;
  }

  constructor() { }
}
