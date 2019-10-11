import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellerComponent } from './seller.component';
import { AddProductComponent } from './add-product/add-product.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SellerComponent,
    AddProductComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: SellerComponent,
        children: [
          {
            path: 'product/add',
            component: AddProductComponent
          }
        ]
      }
    ])
  ]
})
export class SellerModule { }
