import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BrandService } from 'src/app/brand/brand.service';
import { Brand } from 'src/app/brand/brand/brand.model';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  msg:any
  brands:Brand[] = []
  product:Product
  formData:any = {
  }
  id:string
  constructor(public router:Router, public brandService:BrandService,public productService:ProductService, public route:ActivatedRoute) { }

  ngOnInit(): void {
    this.brandService.getBrands().subscribe((data)=>{
      this.brands = data;
    })
    this.route.params.subscribe(params=>{
      this.id = params['id']
    });
    this.productService.getProductById(this.id).subscribe((data)=>{
      this.formData = data[0];
    })
  }

  updateProduct(){
    this.productService.updateProduct(this.formData).subscribe((data)=>{
      this.msg = data;
      this.router.navigate(["/manage-product"],{ queryParams:this.msg})
    })
  }

}
