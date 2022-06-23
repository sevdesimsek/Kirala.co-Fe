import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PreProductsComponent } from './pre-products/pre-products.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductProfilComponent } from './product-profil/product-profil.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { PayMethodComponent } from './pay-method/pay-method.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PreProductsComponent,
    FooterComponent,
    ProductsComponent,
    ProductListComponent,
    ProductProfilComponent,
    UserProfileComponent,
    PayMethodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
