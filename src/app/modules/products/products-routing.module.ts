import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './views/categories/categories.component';
import { MainComponent } from './views/main/main.component';
import { ProductComponent } from './views/product/product.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'categories/:name', component: CategoriesComponent },
  { path: 'product/:id', component: ProductComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
