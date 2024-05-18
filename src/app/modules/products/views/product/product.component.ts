import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Product } from '@models/product.model';
import { CartService } from '@services/cart.service';
import { ProductsService } from '@services/products.service';
import { of, switchMap } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
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
