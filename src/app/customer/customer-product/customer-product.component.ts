import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BrandService } from 'src/app/brand/brand.service';
import { Brand } from 'src/app/brand/brand/brand.model';
import { Product } from 'src/app/product/product.model';
import { ProductService } from 'src/app/product/product.service';

@Component({
  selector: 'app-customer-product',
  templateUrl: './customer-product.component.html',
  styleUrls: ['./customer-product.component.css']
})
export class CustomerProductComponent implements OnInit {

  brands:Brand[] = []
  products:Product[] = []
  products1:Product[] = []
  filter:string
  msg:any
  
  cart = {}

  constructor(public brandService:BrandService,public productService:ProductService,public route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((data)=>{
      this.msg = data
    })
    this.cart = JSON.parse(localStorage.getItem('cart')) || {}
    this.brandService.getBrands().subscribe(data=>{
      this.brands = data;
    })

    this.productService.getProducts().subscribe(data=>{
      this.products = data;
      this.products1 = data;
    })
  }
  filterProduct(bname){
    if(bname=="All"){this.products1=this.products; return}

    this.products1 = this.products.filter((p)=>{
      return p.brand==bname;
    })
  }
  addToCart(product){
    this.cart[product._id]?this.cart[product._id].qty++:this.cart[product._id] = {"product":product,'qty':1}
    this.msg = {'msg':`Product ${product.pname} add to cart success... Total number of goods: ${this.getTotal()}`,'type':"success"}
    localStorage.setItem('cart',JSON.stringify(this.cart))
  }
  getTotal(){
    let num = 0
    for(let key in this.cart){
      num+=this.cart[key].qty
    }
    return num
  }
}
