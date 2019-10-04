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
    this.items = this.cartService.getItems();
    this.getShipping();
  }

  clearCart() {
    this.cartService.clearCart();
    this.items = this.cartService.getItems();
  }

  getShipping() {
    this.cartService.getShipping().subscribe((shippings: Shipping[]) => {
      this.shippings = shippings;
    });
  }
}
