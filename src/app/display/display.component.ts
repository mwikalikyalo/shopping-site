import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../items.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
  providers:  [ ItemsService ]
})
export class DisplayComponent implements OnInit {

  constructor(private http: HttpClient, private itemsService: ItemsService) { }

  ngOnInit(): void {
  }

  onItemFetch(products: {pName: string, desc: string, price: string}){
    this.itemsService.fetchProduct(products);
  }

}
