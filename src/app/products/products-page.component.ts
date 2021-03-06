import { Component, OnInit } from '@angular/core';
import { Cart } from '../models/cart';
import { OrderItems } from '../models/orderItems';
import { Product } from '../models/product';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css'],
})
export class ProductsPageComponent implements OnInit {
  productAll: Product[] = [];
  orderItem!: OrderItems;
  cart: Cart | undefined;

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.loadProductList();
  }

  loadProductList() {
    this.productService.findAllProducts().subscribe({
      next: (productFetched: Product[]) => (this.productAll = productFetched),
      error: (e) => console.log(e),
    });
  }

  addToCart(product: Product) {
    this.productService.addProductToCart(product, Cart);
  }

  addAnotherToCart(product: Product) {
    orderItem: OrderItems;
    this.productService.addAnotherToCart(product, Cart);
  }

  removeFromCart(product: Product) {
    orderItem: OrderItems;
    this.productService.removeFromCart(product, Cart);
  }
}
