import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './app-core/common/header/header.component';
import { FooterComponent } from './app-core/common/footer/footer.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { LoginComponent } from './components/auth/login/login.component';
import { ResetPasswordComponent } from './components/auth/reset-password/reset-password.component';
import { ProductComponent } from './components/market/product/product.component';
import { ProductInfoComponent } from './components/market/product-info/product-info.component';
import { CartComponent } from './components/market/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { PaymentsComponent } from './components/market/payments/payments.component';
import { ProfileComponent } from './components/auth/profile/profile.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Error404Component } from './error404/error404.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    ResetPasswordComponent,
    ProductComponent,
    ProductInfoComponent,
    CartComponent,
    HomeComponent,
    PaymentsComponent,
    ProfileComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
