import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'flattenArr'
})
export class FlattenArrPipe implements PipeTransform {

  transform(value: any[], ...args: unknown[]): unknown {
    return this.flattenArr(value);
  }
  private flattenArr(arr:any[]):any[]{
    return arr.reduce((acc,val)=> Array.isArray(val) ? acc.concat(this.flattenArr(val)):  acc.concat(val),[])
  }

}
