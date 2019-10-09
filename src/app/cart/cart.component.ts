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

  async ngOnInit() {
    this.items = await this.cartService.getItems();
    this.getShipping();
  }

  async clearCart() {
    this.cartService.clearCart();
    this.items = await this.cartService.getItems();
  }

  getShipping() {
    this.cartService.getShipping().subscribe((shippings: Shipping[]) => {
      this.shippings = shippings;
    });
  }
}
