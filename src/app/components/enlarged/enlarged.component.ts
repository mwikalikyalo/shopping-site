import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemsService } from '../../services/items.service';
import { Product } from '../../product';
import { CartService } from '../../services/cart.service';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { Quantity } from '../../quantity';

@Component({
  selector: 'app-enlarged',
  templateUrl: './enlarged.component.html',
  styleUrls: ['./enlarged.component.css']
})

export class EnlargedComponent implements OnInit {
  faPlus = faPlus;
  faMinus= faMinus;
  quantity: any= 1;
  allProducts: any;
  product: Product | undefined;
  productId: any; 
  // quantity: Quantity | undefined;

  constructor( private itemsService: ItemsService, private route: ActivatedRoute, private cartService: CartService ) { }

  ngOnInit(){
    // this.route.params.subscribe(params => this.onGetById(params['id']))
    this.route.params.subscribe(params => this.productId = params['id'] )

    this.itemsService.fetchProduct().subscribe((products:any) => {
      this.allProducts= products;    
      this.product= this.allProducts.find(p => p.id == this.productId)
    });3
  }

  onGetById(id:number): void{
    this.itemsService.getById(id).subscribe((data:Product)=>{
      this.product= data
      console.log(data)
    });
  };

  //add to cart

  onAddToCart(items: Product){
    this.cartService.addToCart(items);
    window.alert("Your item has been added to your cart.");
    console.log(items)
  }
  // onAddToCart(quantity: Quantity){
  //   this.cartService.addToCart(quantity.product);
  //   window.alert("Your item has been added to your cart.");
  //   console.log(quantity.product)
  // }

  //increase and decrease items

  increase(){
    this.quantity ++  
  }

  decrease(){
    this.quantity --
  }
}
