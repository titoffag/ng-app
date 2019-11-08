import { Pipe, PipeTransform } from '@angular/core';

import { Course } from 'src/app/models';

@Pipe({
  name: 'searchByList'
})
export class SearchByListPipe implements PipeTransform {
  transform(list: Course[], term: string): Course[] {
    return list.filter(item => item.title.toLocaleLowerCase().includes(term));
  }
}
