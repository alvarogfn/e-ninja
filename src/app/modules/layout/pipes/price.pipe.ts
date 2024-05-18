import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price',
})
export class PricePipe implements PipeTransform {
  transform(
    value: number,
    ...args: ['en-US' | 'pt-BR', 'USD' | 'BRL']
  ): string {
    return (value / 100).toLocaleString(args[0], {
      currency: args[1],
      style: 'currency',
    });
  }
}
