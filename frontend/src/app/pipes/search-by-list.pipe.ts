import { Pipe, PipeTransform, NgModule } from '@angular/core';

import { HasTitle } from '@constants/typings';

@Pipe({
  name: 'searchByList'
})
export class SearchByListPipe implements PipeTransform {
  transform<T extends HasTitle>(list: Array<T>, term: string): Array<T> {
    return list.filter(item => item.name.toLocaleLowerCase().includes(term));
  }
}

@NgModule({
  declarations: [SearchByListPipe],
  exports: [SearchByListPipe]
})
export class SearchByListPipeModule {}
