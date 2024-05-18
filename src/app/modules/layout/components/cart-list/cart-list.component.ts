import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';
import { Cart } from '@models/cart.model';
import { CartService } from '@services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
  animations: [
    trigger('grow', [
      transition(':enter', [
        style({ maxHeight: 1 }),
        animate('1s ease-out', style({ maxHeight: '80vw' })),
      ]),
    ]),
  ],
})
export class CartListComponent {
  @Input() cart: Cart[] = [];
  @Input() totPrice = 0;
  @Input() totItems = 0;
  constructor(private cartService: CartService) {}

  buy() {
    this.cartService.clear();
  }
}
