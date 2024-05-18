import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from '@models/cart.model';
import { CartService } from '@services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  // First item is the product, second the quantity of this product
  cart: Cart[] = [];
  totPrice: number = 0;
  totItems: number = 0;
  isOpen: boolean = false;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.cartService.cartBehavior.subscribe((cart) => {
      this.cart = cart;

      this.totPrice = cart.reduce((acc, act) => {
        return acc + act.product.price * act.amount;
      }, 0);

      this.totItems = cart.reduce((acc, act) => {
        return acc + act.amount;
      }, 0);
    });

    this.router.events.subscribe(() => (this.isOpen = false));
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
