import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '@models/product.model';
import { CartService } from '@services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent {
  @Input() product: Product | null = null;
  @Input() amount: number = 0;

  constructor(
    private cartService: CartService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  remove(id: number): void {
    this.cartService.removeFromCart(id);
  }

  navigateToProduct(id: number): void {
    this.router.navigate(['../product', id], { relativeTo: this.route });
  }
}
