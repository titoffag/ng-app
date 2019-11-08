import { differenceInDays } from 'date-fns';

import { BLUE_BORDER, GREEN_BORDER } from 'src/app/constants';

export function setBorder(date: string): string | null {
  let style: string | null = null;

  const currentDate: Date = new Date();
  const creationDate: Date = new Date(date);

  const isReleased: boolean = creationDate < currentDate;
  const isFresh: boolean = differenceInDays(currentDate, creationDate) <= 14;
  const isUpcoming: boolean = creationDate > currentDate;

  if (isReleased && isFresh) {
    style = GREEN_BORDER;
  } else if (isUpcoming) {
    style = BLUE_BORDER;
  }

  return style;
}
