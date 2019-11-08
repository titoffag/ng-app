const DATE_KEYWORD = 'date';

export function orderListBy<T>(fieldName: string, list: Array<T>): Array<T> {
  return list.sort((previousValue, nextValue) => {
    if (fieldName.toLowerCase().includes(DATE_KEYWORD)) {
      const previousDateValue: any = new Date(previousValue[fieldName]);
      const nextDateValue: any = new Date(nextValue[fieldName]);

      return previousDateValue - nextDateValue;
    } else {
      return previousValue[fieldName] - nextValue[fieldName];
    }
  });
}
