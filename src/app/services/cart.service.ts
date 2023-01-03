import { Injectable } from '@angular/core';
import { Product } from '../product';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  public items:any= [];
  public quantityList= new BehaviorSubject<any>([]);

  //loop through the items clicked by id
  //then counted items (same id)= quantity
  getProduct(){
    return this.quantityList.asObservable();
  }
  setProduct(product: any){
    this.items.push(...product)
    this.quantityList.next(product);
  }

  addToCart(product: any){
    this.items.push(product);
    this.quantityList.next(this.items);
    this.getTotalPrice(this.items);
    console.log(this.items)
  }

  getTotalPrice(productsAdded?: Product[]): number{
    let totalPrice= 0; 
    productsAdded.map((a: any) => {
      totalPrice += a.price * a.quantity;
    });
    return totalPrice;
  };
  
  getItem(){
    return this.items;
  }

  removeItem(product: any) {
    const index = this.items.indexOf(product, 0);
    if (index > -1) {
        this.items.splice(index, 1);
    }
    this.quantityList.next(this.items);
  }

  removeAllCart(){
    this.items = []
    this.quantityList.next(this.items);
  }

  constructor() { }

}