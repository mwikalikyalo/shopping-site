import { Component, OnInit, Input } from '@angular/core';
import { ItemsService } from '../items.service';
import { Product } from '../product'

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
})

export class DisplayComponent implements OnInit {  
  allProducts: any;
  
  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
    this.onItemFetch()
  }

  onItemFetch(){
    this.itemsService.fetchProduct().subscribe((product) => {
        this.allProducts= product;    
    });
  };

}
