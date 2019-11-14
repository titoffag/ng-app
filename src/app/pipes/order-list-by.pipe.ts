import { Pipe, PipeTransform, NgModule } from '@angular/core';

@Pipe({
  name: 'orderListBy'
})
export class OrderListByPipe implements PipeTransform {
  transform<T>(list: Array<T>, fieldName: string): Array<T> {
    return list.sort(
      (previousValue, nextValue) =>
        previousValue[fieldName] - nextValue[fieldName]
    );
  }
}

@NgModule({
  declarations: [OrderListByPipe],
  exports: [OrderListByPipe]
})
export class OrderListByPipeModule {}
