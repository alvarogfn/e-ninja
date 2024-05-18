import { Component, OnInit } from '@angular/core';
import { CartService } from '@services/cart.service';
import { MatchMediaService } from '../../services/matchmedia.service';
import { matchMedia } from '../../services/matchmedia.type';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isMobile: boolean = true;
  totCart: number = 99;
  isOpen: boolean = false;

  constructor(
    private matchService: MatchMediaService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.matchService.viewport.subscribe((viewport: matchMedia) => {
      this.isMobile = viewport === 'mobile';
    });

    this.cartService.cartBehavior.subscribe((totCart) => {
      this.totCart = totCart.length;
    });
  }

  openCart() {
    this.isOpen = true;
  }

  closeCart() {
    this.isOpen = false;
  }

  toggleCart() {
    this.isOpen = !this.isOpen;
  }
}
