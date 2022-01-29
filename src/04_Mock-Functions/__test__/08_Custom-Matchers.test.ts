import main from '../08_Custom-Matchers';
import { func } from '../08_Custom-Matchers_export-func';

jest.mock('../08_Custom-Matchers_export-func');
const mockFunc = func as jest.Mock;

test('Use custom matcher functions in order to make it less demanding to assert how mock functions have been called.', () => {
  const arg1 = 42;
  const arg2 = 1;
  mockFunc.mockReturnValueOnce(43);
  mockFunc.mockName('a mock name');

  expect(main()).toBe(44);

  // The mock function was called at least once
  expect(mockFunc).toHaveBeenCalled();

  // The mock function was called at least once with the specified args
  expect(mockFunc).toHaveBeenCalledWith(arg1, arg2);

  // The last call to the mock function was called with the specified args
  expect(mockFunc).toHaveBeenLastCalledWith(arg1, arg2);

  // All calls and the name of the mock is written as a snapshot
  expect(mockFunc).toMatchSnapshot();
});

test("Mock manually for that's more to your taste or if you need to do something more specific:", () => {
  const arg1 = 42;
  const arg2 = 1;
  mockFunc.mockReturnValueOnce(43);
  mockFunc.mockName('a mock name');

  expect(main()).toBe(44);

  // The mock function was called at least once
  expect(mockFunc.mock.calls.length).toBeGreaterThan(0);

  // The mock function was called at least once with the specified args
  expect(mockFunc.mock.calls).toContainEqual([arg1, arg2]);

  // The last call to the mock function was called with the specified args
  expect(mockFunc.mock.calls[mockFunc.mock.calls.length - 1]).toEqual([
    arg1,
    arg2,
  ]);

  // The first arg of the last call to the mock function was `42`
  // (note that there is no sugar helper for this specific of an assertion)
  expect(mockFunc.mock.calls[mockFunc.mock.calls.length - 1][0]).toBe(42);

  // A snapshot will check that a mock was invoked the same number of times,
  // in the same order, with the same arguments. It will also assert on the name.
  expect(mockFunc.mock.calls).toEqual([
    [arg1, arg2],
    [arg1, arg2],
  ]);
  expect(mockFunc.getMockName()).toBe('a mock name');
});
