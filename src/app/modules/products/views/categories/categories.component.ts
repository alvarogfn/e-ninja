import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '@models/product.model';
import { ProductsService } from '@services/products.service';
import { of, switchMap } from 'rxjs';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  animations: [],
})
export class CategoriesComponent implements OnInit {
  categoryName: string | null = null;
  products: Product[] = [];

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((value) => of(value.get('name') ?? '')),
        switchMap((value) => {
          this.categoryName = value;
          return this.productsService.getByCategory(value);
        })
      )
      .subscribe((value) => {
        this.products = value;
      });
  }
}
