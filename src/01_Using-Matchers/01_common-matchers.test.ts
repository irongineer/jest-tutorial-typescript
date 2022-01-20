test('Two plus two is four', () => {
  expect(2 + 2).toBe(4);
});

test('Object assignment', () => {
  interface Data {
    one: number;
    two?: number;
  }
  let data: Data = { one: 1 };
  data['two'] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});

test('Adding positive numbers is not zero', () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});
