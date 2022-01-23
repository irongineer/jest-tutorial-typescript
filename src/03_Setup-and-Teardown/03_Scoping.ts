let Cities: string[] = [];
let Foods: Map<string, string> = new Map();

export const initializeCityDatabase = async (): Promise<string[]> => {
  Cities.push('Vienna');
  Cities.push('San Juan');
  Cities.push('Tokyo');

  return await new Promise((resolve, reject) =>
    setTimeout(() => resolve(Cities), 1000)
  );
};

export const initializeFoodDatabase = async (): Promise<
  Map<string, string>
> => {
  Foods.set('Vienna', 'Wiener Schnitzel');
  Foods.set('San Juan', 'Mofongo');
  Foods.set('Tokyo', 'Sushi');

  return await new Promise((resolve, reject) =>
    setTimeout(() => resolve(Foods), 1000)
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

export const clearFoodDatabase = async (): Promise<void> => {
  return await new Promise((resolve, reject) =>
    setTimeout(() => {
      Foods.clear();
      resolve();
    }, 1000)
  );
};

export const isCity = (cityName: string): boolean => Cities.includes(cityName);

export const isValidCityFoodPair = (
  cityName: string,
  foodName: string
): boolean => Foods.get(cityName) === foodName;
