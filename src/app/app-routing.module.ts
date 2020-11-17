import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { BrandComponent } from './brand/brand/brand.component';
import { CartComponent } from './cart/cart/cart.component';
import { CustomerProductComponent } from './customer/customer-product/customer-product.component';
import { HomeComponent } from './home/home.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { ProductComponent } from './product/product/product.component';
import { UpdateProductComponent } from './product/update-product/update-product.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { UserComponent } from './user/user/user.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'brand-list', component: BrandComponent, canActivate:[AuthGuard]},
  { path: 'user-list', component: UserComponent, canActivate:[AuthGuard]},
  { path: 'add-user', component:AddUserComponent, canActivate:[AuthGuard]},
  { path: 'manage-product',component:ProductComponent, canActivate:[AuthGuard]},
  { path: "add-product",component:AddProductComponent, canActivate:[AuthGuard]},
  { path: "manage-product/:id",component:UpdateProductComponent, canActivate:[AuthGuard]},
  { path: "product-list",component:CustomerProductComponent, canActivate:[AuthGuard]},
  { path: "cart", component:CartComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[AuthGuard]
})
export class AppRoutingModule { }
