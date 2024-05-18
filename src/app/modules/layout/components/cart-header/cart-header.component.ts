import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-header',
  templateUrl: './cart-header.component.html',
  styleUrls: ['./cart-header.component.scss'],
})
export class CartHeaderComponent {
  @Input() items: number = 0;
  @Input() price: number = 0;

  constructor() {}
}
