import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { OrderListComponent } from './order-list/order-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { ManageDirective } from './product-detail/manage.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductListComponent,
    ProductDetailComponent,
    OrderListComponent,
    ProductItemComponent,
    RegisterFormComponent,
    ManageDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
