import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../items.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../product'

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
  providers:  [ ItemsService ]
})
export class DisplayComponent implements OnInit {
  product = Product;

  constructor(private http: HttpClient, private itemsService: ItemsService) { }

  ngOnInit(): void {
  }

  onItemFetch(){
    // this.isFetching= true;
    this.itemsService.fetchProduct().subscribe((products:any)=>{
    //   this.allProducts= products;
    //   this.isFetching= false;
    })
  }

}
