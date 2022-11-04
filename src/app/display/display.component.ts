import { Component, OnInit, Input } from '@angular/core';
import { ItemsService } from '../items.service';
import { HttpClient } from '@angular/common/http';
import { Product } from '../product'

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
  providers:  [ ItemsService ],
})

export class DisplayComponent implements OnInit {
  
  @Input() product: Product[] = [];
  
  allProducts: any;
  isFetching: unknown;
  

  constructor(private http: HttpClient, private itemsService: ItemsService) { }

  ngOnInit() {
    this.onItemFetch()
  }

  onItemFetch(){
    this.isFetching= true;
    this.itemsService.fetchProduct().
      subscribe((product) => {
        console.log(this.allProducts)
        this.allProducts= product; 
        this.isFetching= false;
    });
  };

}
