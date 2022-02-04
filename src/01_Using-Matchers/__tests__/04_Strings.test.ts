test('There is no I in team', () => {
  expect('team').not.toMatch(/I/);
});

test('But there is a "stop" in Christoph', () => {
  expect('Christoph').toMatch(/stop/);
});
