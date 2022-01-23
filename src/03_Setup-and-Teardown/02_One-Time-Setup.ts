let Cities: string[] = [];

export const initializeCityDatabase = async (): Promise<string[]> => {
  Cities.push('Vienna');
  Cities.push('San Juan');
  Cities.push('Tokyo');

  return await new Promise((resolve, reject) =>
    setTimeout(() => resolve(Cities), 1000)
  );
};

export const clearCityDatabase = async (): Promise<void> => {
  return await new Promise((resolve, reject) =>
    setTimeout(() => {
      Cities.length = 0;
      resolve();
    }, 1000)
  );
};

export const isCity = (cityName: string): boolean => Cities.includes(cityName);
