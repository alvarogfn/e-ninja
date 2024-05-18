import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss'],
})
export class PriceComponent {
  @Input() price: number = 0;
  @Input() locale: 'en-US' | 'pt-BR' = 'en-US';
  @Input() currency: 'USD' | 'BRL' = 'USD';

  constructor() {}
}
