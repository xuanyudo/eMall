import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart:any = {}
  num:number
  msg:any = {}
  total:number
  constructor(public router:Router) { }
  
  ngOnInit(): void {
    this.cart = JSON.parse(localStorage.getItem('cart'))
    this.getTotal()
  }

  getTotal(){
    this.num = 0
    this.total = 0
    for(let key in this.cart){
      this.num+=this.cart[key].qty
      this.total+=this.cart[key].qty*this.cart[key].product.price
    }
  }
  updateCart(){
    for(let key in this.cart){
      if(this.cart[key].qty<=0){
        delete this.cart[key]
      }
    }
    this.getTotal()
    localStorage.setItem('cart',JSON.stringify(this.cart))
  }
  checkOut(){
    this.msg.msg = `Check out success! You had spend total of $${this.total}. Thank you`
    this.msg.type = "success"
    localStorage.removeItem('cart')
    this.router.navigate(["/product-list"],{ queryParams:this.msg})
  }

}
