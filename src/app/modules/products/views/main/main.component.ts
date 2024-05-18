import { Component, OnInit } from '@angular/core';
import { Product } from '@models/product.model';
import { Promotional } from '@models/promotional.model';
import { ProductsService } from '@services/products.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  products: Product[] = [];
  promotional: Promotional | null = null;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe((value) => {
      this.products = value;
    });

    this.productsService.getPromotionalById('main').subscribe((value) => {
      this.promotional = value;
    });
  }
}
