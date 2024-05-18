import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundViewComponent } from './views/not-found-view/not-found-view.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/products/products.module').then(
        (m) => m.ProductsModule
      ),
  },
  {
    path: '**',
    redirectTo: 'not-found',
  },
  {
    path: 'not-found',
    component: NotFoundViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
