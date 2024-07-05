import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyerComponent } from './buyer/buyer.component';

import { BrowserModule } from '@angular/platform-browser'
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BuyerComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule
  ]
})
export class ShopModule { }
