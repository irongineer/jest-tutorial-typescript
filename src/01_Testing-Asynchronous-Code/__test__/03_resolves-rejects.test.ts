import { fetchDataResolve, fetchDataReject } from '../03_resolves-rejects';

test('The data is peanut butter', () => {
  return expect(fetchDataResolve()).resolves.toBe('peanut butter');
});

test('The fetch fails with an error', () => {
  return expect(fetchDataReject()).rejects.toMatch('error');
});
