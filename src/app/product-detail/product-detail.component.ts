import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product.model';
import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.product = products.find((product) => product._id === Number(params.get('productId')));
    });
  }

  add() {
    window.alert('Your product has been added to the cart!!');
    this.cartService.addToCart(this.product);
  }
}
