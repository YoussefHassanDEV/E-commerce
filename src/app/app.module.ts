import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/products/products.component';
import { BrandsComponent } from './components/brands/brands.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { DetailsComponent } from './components/details/details.component';
import { NavAuthComponent } from './components/nav-auth/nav-auth.component';
import { NavBlankComponent } from './components/nav-blank/nav-blank.component';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './components/blank-layout/blank-layout.component';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http"
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { from } from 'rxjs';
import { CommonModule } from '@angular/common';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module

import { ToastrModule } from 'ngx-toastr';
import { PaymentComponent } from './components/payment/payment.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    ProductsComponent,
    BrandsComponent,
    CategoriesComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    NotfoundComponent,
    DetailsComponent,
    NavAuthComponent,
    NavBlankComponent,
    AuthLayoutComponent,
    BlankLayoutComponent,
    PaymentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    CommonModule,
    NgxPaginationModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right',
      preventDuplicates: false,
      closeButton: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule { }
