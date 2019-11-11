import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'courseDuration'
})
export class CourseDurationPipe implements PipeTransform {
  private DEFAULT_STRING = '-';
  private HOUR_IN_MINUTES = 60;
  private DAY_IN_HOURS = 24;
  private DAY_IN_MINUTES = this.DAY_IN_HOURS * this.HOUR_IN_MINUTES;

  transform(duration: number): string {
    let formattedDuration = '';

    const days = Math.floor(duration / this.DAY_IN_MINUTES);
    const hours = Math.floor(
      duration / this.HOUR_IN_MINUTES - days * this.DAY_IN_HOURS
    );
    const minutes = Math.floor(
      duration - hours * this.HOUR_IN_MINUTES - days * this.DAY_IN_MINUTES
    );

    if (days) {
      formattedDuration += `${days} d `;
    }
    if (hours) {
      formattedDuration += `${hours} h `;
    }
    if (minutes) {
      formattedDuration += `${minutes} min `;
    }

    return formattedDuration === '' ? this.DEFAULT_STRING : formattedDuration;
  }
}
