import { Component, Input } from '@angular/core';
import { Promotional } from '@models/promotional.model';

@Component({
  selector: 'app-promotional',
  templateUrl: './promotional.component.html',
  styleUrls: ['./promotional.component.scss'],
})
export class PromotionalComponent {
  @Input() set promotional(value: Promotional | null) {
    if (value === null) return;

    this.image = value.image;
    this.title = value.title;
    this.redirect = value.redirect;
  }

  image: string = '';
  title: string = '';
  redirect: string = '';

  constructor() {}
}
