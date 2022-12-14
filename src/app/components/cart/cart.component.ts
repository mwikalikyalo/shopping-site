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
  total:number = 0;

  // quant= this.cartService.getItem();

  constructor(private cartService: CartService, private httpClient: HttpClient) { }

  ngOnInit(): void {  
    this.cartService.getProduct()
    .subscribe(res=>{
      this.product = res;
      this.product.forEach((a:any) => {
        Object.assign(a,{quantity:1, total:a.price})
      });
      this.totalPrice = this.cartService.getTotalPrice();
    });  
  };

  onClearCart(){
    this.cartService.clearCart();
    window.alert("Your item has been removed to your cart.");
  };

  onRemoveItem(id: any){
    this.cartService.removeItem(id);
    console.log("done")
  }

  onRemoveAllCart(){
    this.cartService.removeAllCart();
  };

  // increase and decrease items
  increase(id, quantity){
    for(let a=0; a<this.product.length; a++){
      if(this.product[a].id  === id){
        if(quantity != 15)
          this.product[a].quantity = parseInt(quantity) + 1;
      }
    }
  }

  decrease(id, quantity){
    for(let a=0; a<this.product.length; a++){
      if(this.product[a].id  === id){
        if(quantity != 0)
          this.product[a].quantity = parseInt(quantity) - 1;
      }
    }
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
