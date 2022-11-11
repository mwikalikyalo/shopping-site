import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemsService } from '../items.service';
import { Product } from '../product';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-enlarged',
  templateUrl: './enlarged.component.html',
  styleUrls: ['./enlarged.component.css']
})
export class EnlargedComponent implements OnInit {
  allProducts: any;
  product: Product | undefined;
  productId: any; 

  constructor( private itemsService: ItemsService, private route: ActivatedRoute, private cartService: CartService ) { }

  ngOnInit(){
    // this.route.params.subscribe(params => this.onGetById(params['id']))
    this.route.params.subscribe(params => this.productId = params['id'] )

    this.itemsService.fetchProduct().subscribe((products:any) => {
      this.allProducts= products;    
      this.product= this.allProducts.find(p => p.id == this.productId)
  }); 
  }

  onGetById(id:number): void{
    this.itemsService.getById(id).subscribe((data:Product)=>{
      this.product= data
      console.log(data)
    });
  };

  //cart
  onAddToCart(product: Product){
    this.cartService.addToCart(product);
    window.alert("Your item has been added to your cart.")
  }
}
