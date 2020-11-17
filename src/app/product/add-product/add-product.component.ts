import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BrandService } from 'src/app/brand/brand.service';
import { Brand } from 'src/app/brand/brand/brand.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  formData:any = {}
  msg:any
  brands:Brand[] = []
  constructor(public productService:ProductService, public brandService:BrandService, public router:Router) { }

  ngOnInit(): void {
    this.brandService.getBrands().subscribe((data)=>{
      this.brands = data;
    })
  }
  addProduct(){
    this.formData.date = new Date()
    console.log(this.formData)
    this.productService.addProduct(this.formData).subscribe((data)=>{
      this.msg = data;
      this.router.navigate(["/manage-product"],{ queryParams:this.msg})
    });
  }
}
