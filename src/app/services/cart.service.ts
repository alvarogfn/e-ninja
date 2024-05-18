import { Injectable } from '@angular/core';
import { Cart } from '@models/cart.model';
import { Product } from '@models/product.model';
import { BehaviorSubject, from, mergeMap, of, switchMap } from 'rxjs';
import { ProductsService } from '@services/products.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Cart[] = [];
  cartBehavior = new BehaviorSubject<Cart[]>([]);

  constructor(private productsService: ProductsService) {
    const backedUpCart: [number, number][] = JSON.parse(
      localStorage.getItem('cart') ?? '[]'
    );

    from(backedUpCart)
      .pipe(
        mergeMap((value) => {
          return this.productsService.getProductById(value[0].toString()).pipe(
            switchMap((product) => {
              return of({ product: product, amount: value[1] });
            })
          );
        })
      )
      .subscribe((value) => {
        this.addToCart(value.product, value.amount);
      });
  }

  addToCart(product: Product, amount: number) {
    const alreadyIndex = this.cart.findIndex((item) => {
      return item.product.id === product.id;
    });

    if (alreadyIndex !== -1) {
      const newAmount = amount + this.cart[alreadyIndex].amount;
      this.cart[alreadyIndex].amount = newAmount;
    } else {
      this.cart.push({ product, amount });
    }

    this.cartBehavior.next(this.cart);
    this.updateCartLocalStorage();
  }

  removeFromCart(id: number) {
    this.cart = this.cart.filter((item) => item.product.id !== id);
    this.cartBehavior.next(this.cart);
    this.updateCartLocalStorage();
  }

  clear() {
    this.cart = [];
    this.cartBehavior.next(this.cart);
    this.updateCartLocalStorage;
  }

  private updateCartLocalStorage() {
    this.cartBehavior.subscribe((cart) => {
      const toBackup = cart.map((cart) => {
        return [cart.product.id, cart.amount];
      });

      localStorage.setItem('cart', JSON.stringify(toBackup));
    });
  }
}
