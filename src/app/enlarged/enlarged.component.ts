import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-enlarged',
  templateUrl: './enlarged.component.html',
  styleUrls: ['./enlarged.component.css']
})
export class EnlargedComponent implements OnInit {
  allProducts: any;

  constructor( private itemsService: ItemsService ) { }

  ngOnInit(){
    this.onItemFetch()
  }

  onItemFetch(){
    this.itemsService.fetchProduct().subscribe((products:any) => {
        this.allProducts= products;    
    });
  };

}
