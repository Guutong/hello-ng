import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { CartService, Shipping } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items: Product[];
  shippings: Shipping[];
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.getItems().subscribe((products: Product[]) => {
      this.items = products;
    });
    this.getShipping();
  }

  clearCart() {
    this.cartService.clearCart().subscribe(() => {
      this.cartService.getItems().subscribe((products: Product[]) => {
        this.items = products;
      });
    });
  }

  getShipping() {
    this.cartService.getShipping().subscribe((shippings: Shipping[]) => {
      this.shippings = shippings;
    });
  }
}
