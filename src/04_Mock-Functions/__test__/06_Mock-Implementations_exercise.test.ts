import defaultExport, {
  namedExport,
} from '../06_Mock-Implementations_exercise';

jest.mock('../06_Mock-Implementations_exercise', () => {
  return {
    __esModule: true,
    default: jest.fn(() => 42),
    namedExport: jest.fn(() => 43),
  };
});

test('Mock implementations for default export', () => {
  expect(defaultExport()).toBe(42);
});

test('Mock implementations for named export', () => {
  expect(namedExport()).toBe(43);
});
