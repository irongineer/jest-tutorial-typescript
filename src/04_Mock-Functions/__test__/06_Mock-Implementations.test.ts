test("There are cases where it's useful to go beyond the ability to specify return values and full-on replace the implementation of a mock function.", () => {
  const myMockFn = jest.fn((cb) => cb(null, true));

  expect(myMockFn((err: any, val: any) => val)).toBeTruthy();
});

import defaultExport from '../06_Mock-Implementations';

// this happens automatically with automocking
jest.mock('../06_Mock-Implementations', () =>
  // defaultExport is a mock function
  jest.fn().mockImplementation(() => 42)
);

test('The mockImplementation method is useful when you need to define the default implementation of a mock function that is created from another module:', () => {
  expect(defaultExport()).toBe(42);
});

test('When you need to recreate a complex behavior of a mock function such that multiple function calls produce different results, use the mockImplementationOnce method:', () => {
  const myMockFn = jest
    .fn()
    .mockImplementationOnce((cb) => cb(null, true))
    .mockImplementationOnce((cb) => cb(null, false));

  expect(myMockFn((err: any, val: any) => val)).toBeTruthy();

  myMockFn((err: any, val: any) => console.log(val));
});

test('When the mocked function runs out of implementations defined with mockImplementationOnce, it will execute the default implementation set with jest.fn (if it is defined):', () => {
  const myMockFn = jest
    .fn(() => 'default')
    .mockImplementationOnce(() => 'first call')
    .mockImplementationOnce(() => 'second call');

  expect(myMockFn()).toBe('first call');
  expect(myMockFn()).toBe('second call');
  expect(myMockFn()).toBe('default');
  expect(myMockFn()).toBe('default');
});

test('For cases where we have methods that are typically chained (and thus always need to return this), we have a sugary API to simplify this in the form of a .mockReturnThis() function that also sits on all mocks:', () => {
  const myObj = {
    myMethod: jest.fn().mockReturnThis(),
  };

  // is the same as

  // const otherObj = {
  //   myMethod: jest.fn(function () {
  //     return this;
  //   }),
  // };
});
