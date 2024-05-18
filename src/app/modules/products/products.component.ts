import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Product } from '@models/product.model';
import { CartService } from '@services/cart.service';
import { of, switchMap } from 'rxjs';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  product: Product | null = null;
  amount: number = 1;
  id: string | null = null;
  loading = false;

  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute,
    private router: Router,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          return of(params.get('id'));
        }),
        switchMap((id) => {
          if (!id) throw new Error('not-found');
          return this.productService.getProductById(id);
        })
      )
      .subscribe({
        next: (product) => (this.product = product),
        error: () => this.router.navigate(['not-found']),
      });
  }

  onAddToCart() {
    if (!this.product) return;
    if (isNaN(+this.amount)) return;

    this.cartService.addToCart(this.product, +this.amount);
    this.loading = true;
    setTimeout(() => (this.loading = false), 3000);
  }
}
