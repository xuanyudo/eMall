import { Component, OnInit } from '@angular/core';
import { BrandService } from '../brand.service';
import { Brand } from './brand.model';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  brands:Brand[]=[]
  msg:any
  constructor(public brandService:BrandService) { }

  ngOnInit(): void {
    this.brandService.getBrands().subscribe((data)=>{
      this.brands = data;
    });
  }
  deleteBrand(id:string){
    this.brands = this.brands.filter((b)=>{
      return b._id!=id;
    });
    this.brandService.deleteBrand(id).subscribe((data)=>{
      this.msg = data;
    })
  }
  addBrand(ref){
    if(ref.bname=="") return false;
    this.brandService.addBrands(ref).subscribe((data)=>{
      this.msg = data;
      this.brandService.getBrands().subscribe((data)=>{
        this.brands = data;
      });
    })
  }
}
