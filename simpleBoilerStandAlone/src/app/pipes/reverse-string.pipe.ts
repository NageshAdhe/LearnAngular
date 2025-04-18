import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseString'
})
export class ReverseStringPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value.split('').reverse().join('')
  }

}
