import {
  initializeCityDatabase,
  clearCityDatabase,
  isCity,
} from '../01_Repeating-Setup-For-Many-Tests';

beforeEach(() => {
  initializeCityDatabase();
});

afterEach(() => {
  clearCityDatabase();
});

test('City database has Vienna', () => {
  expect(isCity('Vienna')).toBeTruthy();
});

test('City database has San Juan', () => {
  expect(isCity('San Juan')).toBeTruthy();
});

test('City database does not have Tokio', () => {
  expect(isCity('Tokio')).toBeFalsy();
});
