test('Mock functions can also be used to inject test values into your code during a test:', () => {
  const myMock = jest.fn();
  console.log(myMock());
  // > undefined

  myMock.mockReturnValueOnce(10).mockReturnValueOnce('x').mockReturnValue(true);

  console.log(myMock(), myMock(), myMock(), myMock());
  // > 10, 'x', true, true
});

test('Mock functions are also very effective in code that uses a functional continuation-passing style.', () => {
  const filterTestFn = jest.fn();

  // Make the mock return `true` for the first call,
  // and `false` for the second call
  filterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(false);

  // NOTE: Try to avoid the temptation to implement logic inside of any function that's not directly being tested.
  const result = [11, 12].filter((num) => filterTestFn(num));

  expect(result).toEqual([11]);
  expect(filterTestFn.mock.calls[0][0]).toBe(11);
  expect(filterTestFn.mock.calls[1][0]).toBe(12);
});
