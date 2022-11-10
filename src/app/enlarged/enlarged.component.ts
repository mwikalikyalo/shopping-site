import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemsService } from '../items.service';
import { Product } from '../product';

@Component({
  selector: 'app-enlarged',
  templateUrl: './enlarged.component.html',
  styleUrls: ['./enlarged.component.css']
})
export class EnlargedComponent implements OnInit {
  allProducts: any;
  product: Product | undefined;
 

  constructor( private itemsService: ItemsService, private route: ActivatedRoute ) { }

  ngOnInit(): void{
    this.route.params.subscribe(params => this.onGetById(params['id']))
  }

  onGetById(id:number){
    this.itemsService.getById(id).subscribe((data:Product)=>{
      this.product= data
    });
  };
}
