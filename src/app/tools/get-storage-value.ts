export function getParsedValueFromStorage(key: string): object {
  const foundValue = localStorage[key];

  if (!foundValue) {
    throw new Error(`Cannot find value by ${key} key`);
  }

  return JSON.parse(foundValue);
}
