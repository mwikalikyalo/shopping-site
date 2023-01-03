import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../../services/items.service';
import { Product } from '../../product'
import { CartService } from 'src/app/services/cart.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
})

export class DisplayComponent implements OnInit {  
  allProducts: any;
  // public product: Product | any;
  productId: any; 
  public product: any = [];
  
  searchText: string= '';
  
  constructor(private itemsService: ItemsService, private cartService: CartService,  private route: ActivatedRoute,) { }

  ngOnInit() {
    this.route.params.subscribe(params => this.productId = params['id'] )

    this.itemsService.fetchProduct().subscribe((products:any) => {
      this.allProducts= products;    
      this.product= this.allProducts.find(p => p.id == this.productId)

      // this.allProducts.forEach((a:any) => {
      //     Object.assign(a,{quantity:1, total:a.price})
      // });
        console.log(this.allProducts)
    });
  }

  onItemFetch(){
    this.itemsService.fetchProduct().subscribe((products:any) => {
        this.allProducts= products;  
        console.log(this.allProducts)  
    });
  };

  onAddToCart(products: any){ 
    this.cartService.addToCart(products)
    console.log(this.allProducts)
  }
 
  //filter by category
  onSearchTextEntered(searchValue: string){
      this.searchText= searchValue;
      console.log(this.searchText);
  }
  
   
}


