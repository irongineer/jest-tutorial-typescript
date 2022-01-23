let Cities: string[] = [];

export const initializeCityDatabase = (): string[] => {
  Cities.push('Vienna');
  Cities.push('San Juan');
  Cities.push('Tokyo');

  return Cities;
};

export const clearCityDatabase = (): void => {
  Cities.length = 0;
};

export const isCity = (cityName: string): boolean => Cities.includes(cityName);
