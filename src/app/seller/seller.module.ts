import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellerComponent } from './seller.component';
import { AddProductComponent } from './add-product/add-product.component';

@NgModule({
  declarations: [
    SellerComponent,
    AddProductComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SellerModule { }
