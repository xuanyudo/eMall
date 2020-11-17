import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public httpClient:HttpClient) { }

  getProducts():Observable<Product[]>{
    return this.httpClient.get<Product[]>("http://localhost:9090/product/products");
  }

  getProductById(id):Observable<Product>{
    return this.httpClient.get<Product>("http://localhost:9090/product/products/"+id);
  }

  addProduct(productData):Observable<any>{
    return this.httpClient.post("http://localhost:9090/product/addProduct",productData);
  }

  deleteProduct(id):Observable<any>{
    return this.httpClient.delete("http://localhost:9090/product/deleteProduct/"+id);
  }

  updateProduct(productData):Observable<any>{
    return this.httpClient.put("http://localhost:9090/product/updateProduct",productData);
  }

}
