import { Pipe, PipeTransform } from '@angular/core';

import { orderListBy } from 'src/app/utils';

@Pipe({
  name: 'orderListBy'
})
export class OrderListByPipe implements PipeTransform {
  transform<T>(list: Array<T>, fieldName: string): Array<T> {
    return orderListBy<T>(fieldName, list);
  }
}
