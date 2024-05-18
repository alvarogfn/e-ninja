import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'substring',
})
export class SubstringPipe implements PipeTransform {
  transform(value: string, size: number): string {
    if (value.length <= size) return value;
    return `${value.trim().substring(0, size)}...`;
  }
}
