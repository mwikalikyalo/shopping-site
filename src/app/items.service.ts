import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root' 
})

export class ItemsService {
  baseUrl:string= "https://fakestoreapi.com/products"

  constructor(private http: HttpClient) { }

  fetchProduct(){
    return this.http.get('https://fakestoreapi.com/products');
  }

  //find item by category
  search(category:any): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.baseUrl}?category=?${category}`);
  }

  //view enlarged item by id
  getById(id:any): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.baseUrl}?id=?${id}`);
  }
}