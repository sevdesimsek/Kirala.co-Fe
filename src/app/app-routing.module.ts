import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PayMethodComponent } from './pay-method/pay-method.component';
import { PreProductsComponent } from './pre-products/pre-products.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductProfilComponent } from './product-profil/product-profil.component';
import { ProductsComponent } from './products/products.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  {path:"products",component:ProductsComponent}, //router için obje oluşturduk
  {path:"", component:PreProductsComponent, pathMatch: 'full'},
  {path:"productList",component:ProductListComponent},  
  {path:"productProfil", component:ProductProfilComponent},
  {path:"payMethod", component:PayMethodComponent},
  {path:"userProfil", component:UserProfileComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
