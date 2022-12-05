import { Injectable } from '@angular/core';
import { Product } from '../product';
// import { Quantity } from '../quantity';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public items: Product[]= [];
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
    this.getTotalPrice();
    console.log(this.items)
  }

  getTotalPrice(): number{
    let totalPrice= 0;
    this.items.map((a: any)=>{
      totalPrice += a.total;
    })
    return totalPrice;
  }

  getItem(){
    return this.items;
  }

  clearCart(){
    this.items= [];
    return this.items;
  }

  removeItem(product: any) {
    // const index = this.items.indexOf(items, 0);
    // if (index > -1) {
    //     this.items.splice(index, 1);
    // }
    this.items.map((a:any, index:any)=>{
      if(product.id=== a.id){
        this.items.splice(index,1);
      }
    })
    // this.quantityList.next(this.items);
   }


  removeAllCart(){
    this.items = []
    this.quantityList.next(this.items);
  }

  constructor() { }

}