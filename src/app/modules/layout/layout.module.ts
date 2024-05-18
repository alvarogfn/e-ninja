import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { LoadingComponent } from './components/loading/loading.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TitleComponent } from './components/title/title.component';
import { RouterModule } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { CartHeaderComponent } from './components/cart-header/cart-header.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { SubstringPipe } from './pipes/substring.pipe';
import { PricePipe } from './pipes/price.pipe';
import { PriceComponent } from './components/price/price.component';

@NgModule({
  declarations: [
    HeaderComponent,
    NavComponent,
    LoadingComponent,
    NotFoundComponent,
    TitleComponent,
    CartComponent,
    CartHeaderComponent,
    CartItemComponent,
    CartListComponent,
    SubstringPipe,
    PricePipe,
    PriceComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    HeaderComponent,
    NavComponent,
    SubstringPipe,
    PricePipe,
    LoadingComponent,
    NotFoundComponent,
    TitleComponent,
    PriceComponent,
  ],
})
export class LayoutModule {}
