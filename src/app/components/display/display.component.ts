import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../../services/items.service';
import { Product } from '../../product'
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
})

export class DisplayComponent implements OnInit {  
  allProducts: any;
  
  product: any = [];
  
  searchText: string= '';
  
  constructor(private itemsService: ItemsService, private cartService: CartService) { }

  ngOnInit() {
    this.onItemFetch();
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


