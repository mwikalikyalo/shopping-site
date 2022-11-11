import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  
  product: Product[] = [];
  
  items= this.cartService.getItem();

  constructor(private cartService: CartService, private httpClient: HttpClient) { }

  ngOnInit(): void {
    
  }

}
