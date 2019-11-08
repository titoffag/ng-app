const DEFAULT_STRING = '-';
const HOUR_IN_MINUTES = 60;
const DAY_IN_HOURS = 24;
const DAY_IN_MINUTES = DAY_IN_HOURS * HOUR_IN_MINUTES;

export function formatDuration(duration: number): string {
  let formatedDuration = '';

  const days = Math.floor(duration / DAY_IN_MINUTES);
  const hours = Math.floor(duration / HOUR_IN_MINUTES - days * DAY_IN_HOURS);
  const minutes = Math.floor(
    duration - hours * HOUR_IN_MINUTES - days * DAY_IN_MINUTES
  );

  if (days) {
    formatedDuration += `${days} d `;
  }
  if (hours) {
    formatedDuration += `${hours} h `;
  }
  if (minutes) {
    formatedDuration += `${minutes} min `;
  }

  return formatedDuration === '' ? DEFAULT_STRING : formatedDuration;
}
