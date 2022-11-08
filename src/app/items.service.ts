import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root' 
})

export class ItemsService {
  constructor(private http: HttpClient) { }

  fetchProduct(){
    return this.http.get('https://fakestoreapi.com/products');
  }
}