import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
})

export class DisplayComponent implements OnInit {  
  allProducts: any;
  // show: boolean = false;
  // isOpen = true;
  
  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
    this.onItemFetch()
  }

  onItemFetch(){
    this.itemsService.fetchProduct().subscribe((products:any) => {
        this.allProducts= products;    
    });
  };

  // collapse(){
  //   this.show = !this.show;
  //   this.isOpen = !this.isOpen;
  // }
   
}


