import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { products } from '../products';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = products;

  constructor() { }

  ngOnInit() {
  }

  onNotify(product: Product) {
    window.alert('Notified!!! Prodoct price is '+ product.price);
  }

}
