import { Injectable } from '@angular/core';
import { Product } from '../app/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  products: Product[]= [];

  constructor() { }
}
