import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderListBy'
})
export class OrderListByPipe implements PipeTransform {
  private DATE_KEYWORD = 'date';

  transform<T>(list: Array<T>, fieldName: string): Array<T> {
    return list.sort((previousValue, nextValue) => {
      if (fieldName.toLowerCase().includes(this.DATE_KEYWORD)) {
        const previousDateValue: any = new Date(previousValue[fieldName]);
        const nextDateValue: any = new Date(nextValue[fieldName]);

        return previousDateValue - nextDateValue;
      } else {
        return previousValue[fieldName] - nextValue[fieldName];
      }
    });
  }
}
