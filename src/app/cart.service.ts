import { Injectable } from '@angular/core';
import { Product } from '../app/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  product: Product[]= [];

  addToCart(product: Product){
    this.product.push(product);
  }

  getItem(){
    return this.product;
  }

  clearCart(){
    this.product= [];
    return this.product;
  }

  constructor() { }
}
