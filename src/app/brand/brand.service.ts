import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { Brand } from './brand/brand.model';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(public httpClient:HttpClient) { }

  getBrands():Observable<Brand[]>{
    return this.httpClient.get<Brand[]>("http://localhost:9090/brand/brands");
  }
  addBrands(brandRef):Observable<any>{
    return this.httpClient.post("http://localhost:9090/brand/addBrand",brandRef);
  }
  deleteBrand(brandId):Observable<any>{
    return this.httpClient.delete("http://localhost:9090/brand/deleteBrand/"+brandId);
  }
}
