import { Pipe, PipeTransform } from '@angular/core';

import { formatDuration } from 'src/app/utils';

@Pipe({
  name: 'courseDuration'
})
export class CourseDurationPipe implements PipeTransform {
  transform(duration: number): string {
    return formatDuration(duration);
  }
}
