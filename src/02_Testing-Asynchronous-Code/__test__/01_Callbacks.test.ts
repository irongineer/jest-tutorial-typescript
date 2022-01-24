import { fetchData } from '../01_Callbacks';

// callback: (data: string) => void

test('The data is peanut butter', (done) => {
  function callback(data: string): void {
    try {
      expect(data).toBe('peanut butter');
      done();
    } catch (error) {
      done(error);
    }
  }

  fetchData(callback);
});
