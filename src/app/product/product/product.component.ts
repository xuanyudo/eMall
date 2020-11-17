import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  msg:any;
  products:Product[] = []
  constructor(public productService:ProductService, public router:Router, public route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.msg = params;
    });

    this.productService.getProducts().subscribe((data)=>{
      this.products = data;
    })

  }

  deleteProduct(id){
    
    this.productService.deleteProduct(id).subscribe((data)=>{
      this.msg = data;
      this.products = this.products.filter((item)=>{ return item._id!=id})
    })
  }

}
