import { fetchDataResolve, fetchDataReject } from '../02_Promises';

test('The data is peanut butter', () => {
  return fetchDataResolve().then((data) => {
    expect(data).toBe('peanut butter');
  });
});

test('The fetch fails with an error', () => {
  expect.assertions(1);
  return fetchDataReject().catch((e) => expect(e).toMatch('error'));
});
