import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { BrandComponent } from './brand/brand/brand.component';
import { HomeComponent } from './home/home.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { UserComponent } from './user/user/user.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate:[AuthGuard]},
  { path: 'brand-list', component: BrandComponent, canActivate:[AuthGuard]},
  { path: 'user-list', component: UserComponent, canActivate:[AuthGuard]},
  { path: 'add-user', component:AddUserComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[AuthGuard]
})
export class AppRoutingModule { }
