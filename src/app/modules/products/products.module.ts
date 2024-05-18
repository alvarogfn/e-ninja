import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { CategoriesComponent } from './views/categories/categories.component';
import { LayoutModule } from '../layout/layout.module';
import { ProductListComponent } from './components/product-list/product-list.component';
import { MainComponent } from './views/main/main.component';
import { PromotionalComponent } from './components/promotional/promotional.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductComponent } from './views/product/product.component';

@NgModule({
  declarations: [
    ProductsComponent,
    CategoriesComponent,
    ProductListComponent,
    MainComponent,
    PromotionalComponent,
    ProductCardComponent,
    ProductComponent,
  ],
  imports: [CommonModule, ProductsRoutingModule, LayoutModule],
})
export class ProductsModule {}
