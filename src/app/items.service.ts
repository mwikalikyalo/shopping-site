import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Product } from '../app/product';

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
    return this.http.get<{[key: string]: Product}> ('https://fakestoreapi.com/products')
    .pipe(map((res) => {
    const products = [];
    for (const key in res){
      if(res.hasOwnProperty(key)){
        products.push({...res[key], id: key})
      }
    }
    return products;
    }))
    .subscribe((products)=>{
      console.log(products)
    })
  }





  
}
