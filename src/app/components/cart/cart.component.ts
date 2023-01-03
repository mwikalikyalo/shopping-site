import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from '../../product';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  faTrash = faTrash;
  faPlus = faPlus;
  faMinus= faMinus;
  
  public product: any = [];
  public totalPrice: number;
  public total:number;

  // quant= this.cartService.getItem();

  constructor(private cartService: CartService, private httpClient: HttpClient) { }
  ngOnInit(): void {  
    this.cartService.getProduct()
    .subscribe(res=>{
      this.product = res;
      this.product.forEach((res:any) => {
        // const total = a.quantity * a.price;
        Object.assign(res,{quantity:1, total: res.price })
          this.total= res.price * res.quantity;
        // const itemTotalPrice = a.quantity * a.total;
        //   this.totalPrice += itemTotalPrice;
        console.log(res);
      });
      this.totalPrice = this.cartService.getTotalPrice(this.product);
    });  
  };

  onRemoveItem(product: any){
    this.cartService.removeItem(product);
  }

  onRemoveAllCart(){
    this.cartService.removeAllCart();
  };

  // increase and decrease items
  increase(id:any, quantity:any){
    for(let a=0; a<this.product.length; a++){
      if(this.product[a].id  === id){
        if(quantity != 15)
          this.product[a].quantity = parseInt(quantity) + 1;
      }
    }
    this.totalPrice = this.cartService.getTotalPrice(this.product);
  }

  decrease(id:any, quantity:any){
    for(let a=0; a<this.product.length; a++){
      if(this.product[a].id  === id){
        if(quantity != 1)
          this.product[a].quantity = parseInt(quantity) - 1;
      }
    }
    this.totalPrice = this.cartService.getTotalPrice(this.product);
  }
  // increase(prod: any){
  //   if(prod.quantity != 15){
  //     prod.quantity += 1;
  //   }
  // }

  // decrease(prod: any){
  //   if(prod.quantity != 1){
  //     prod.quantity -= 1;
  //   }
  // }

}
