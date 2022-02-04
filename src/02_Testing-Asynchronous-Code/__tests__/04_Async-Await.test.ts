import { fetchDataResolve, fetchDataReject } from '../04_Async-Await';

describe('Use async/await', () => {
  test('The data is peanut butter', async () => {
    const data = await fetchDataResolve();
    expect(data).toBe('peanut butter');
  });

  test('The fetch fails with an error', async () => {
    expect.assertions(1);
    try {
      await fetchDataReject();
    } catch (e) {
      expect(e).toMatch('error');
    }
  });
});

describe('Use async/await with resolve/reject', () => {
  test('The data is peanut butter', async () => {
    await expect(fetchDataResolve()).resolves.toBe('peanut butter');
  });

  test('The fetch data with an error', async () => {
    await expect(fetchDataReject()).rejects.toMatch('error');
  });
});
