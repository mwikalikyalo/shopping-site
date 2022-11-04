import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Product } from '../app/product';

@Injectable({
  providedIn: 'root' 
})

export class ItemsService {
  constructor(private http: HttpClient) { }

  //from database
  // createProduct(products: {pName: string, desc: string, price: string}){
  //   const headers= new HttpHeaders({"myHeader": "procademy"})
  //   this.http.post<{name: string}>(
  //     'https://angularbyprocademy-default-rtdb.firebaseio.com/products.json',
  //     products, {headers: headers})
  //     .subscribe((res) => {
  //     console.log(res);
  //  });
  // }

  fetchProduct(){
    return this.http.get<any>('https://fakestoreapi.com/products');
  }
  }
