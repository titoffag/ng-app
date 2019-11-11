import { Pipe, PipeTransform } from '@angular/core';

interface TypeWithTitleField {
  title: string;
}

@Pipe({
  name: 'searchByList'
})
export class SearchByListPipe implements PipeTransform {
  transform<T extends TypeWithTitleField>(
    list: Array<T>,
    term: string
  ): Array<T> {
    return list.filter(item => item.title.toLocaleLowerCase().includes(term));
  }
}
