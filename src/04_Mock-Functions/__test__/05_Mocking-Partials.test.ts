import defaultExport, { bar, foo } from '../05_Mocking-Partials';

jest.mock('../05_Mocking-Partials', () => {
  const originalModule = jest.requireActual('../05_Mocking-Partials');

  // Mock the default export and named export 'foo'
  return {
    __esModule: true,
    ...originalModule,
    default: jest.fn(() => 'mocked baz'),
    foo: 'mocked foo',
  };
});

test('Should do a partial mock', () => {
  const defaultExportResult = defaultExport();
  expect(defaultExportResult).toBe('mocked baz');
  expect(defaultExport).toHaveBeenCalled();

  expect(foo).toBe('mocked foo');
  expect(bar()).toBe('bar');
});
