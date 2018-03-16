import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterArray'
})
export class FilterArrayPipe implements PipeTransform {

  transform(array: any[], field: string, value: any, updated: number): any {
    if (value) {
      return array.filter(item => item[field] === value.lookupID);
    }

    return array;
  }

}
