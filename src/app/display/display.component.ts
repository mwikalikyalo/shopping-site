import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../items.service';
import { Product } from '../product'

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
})

export class DisplayComponent implements OnInit {  
  allProducts: any;
  product: Product | undefined;
  searchText: string= '';
  
  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
    this.onItemFetch();
  }

  onItemFetch(){
    this.itemsService.fetchProduct().subscribe((products:any) => {
        this.allProducts= products;    
    });
  };

  onSearchTextEntered(searchValue: string){
      this.searchText= searchValue;
      console.log(this.searchText);
  }
  
   
}


