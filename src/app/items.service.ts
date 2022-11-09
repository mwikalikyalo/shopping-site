import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { Product } from './product';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root' 
})

export class ItemsService {
  baseUrl:string= "https://fakestoreapi.com/products"

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  fetchProduct(){
    return this.http.get('https://fakestoreapi.com/products');
  };

  //view enlarged item by id
  getById(id:any): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.baseUrl}/id=?${id}`);
  }

  //find item by category
  searching(category:any): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.baseUrl}?category=?${category}`)
    .pipe(
      catchError(this.errorHandler))
  };

  errorHandler(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
}


