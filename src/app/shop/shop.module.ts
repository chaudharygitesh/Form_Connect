import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyerComponent } from './buyer/buyer.component';

import { BrowserModule } from '@angular/platform-browser'


@NgModule({
  declarations: [
    BuyerComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
  ]
})
export class ShopModule { }
