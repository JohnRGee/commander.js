const commander = require('../');

test('when boolean x implies y and x missing then y is undefined', () => {
  const program = new commander.Command();
  program
    .option('-x')
    .option('-y')
    .implies('x', 'y');

  program.parse([], { from: 'user' });
  expect(program.opts().y).toBeUndefined();
});

test('when boolean x implies y and -x then y is true', () => {
  const program = new commander.Command();
  program
    .option('-x')
    .option('-y')
    .implies('x', 'y');

  program.parse(['-x'], { from: 'user' });
  expect(program.opts().y).toBe(true);
});

test('when x with value implies y and -xValue then y is true', () => {
  const program = new commander.Command();
  program
    .option('-x <value>')
    .option('-y')
    .implies('x', 'y');

  program.parse(['-xValue'], { from: 'user' });
  expect(program.opts().y).toBe(true);
});

test('when x with optional value implies y and -x then y is true', () => {
  const program = new commander.Command();
  program
    .option('-x [value]')
    .option('-y')
    .implies('x', 'y');

  program.parse(['-x'], { from: 'user' });
  expect(program.opts().y).toBe(true);
});

test('when x with optional value implies y and -xValue then y is true', () => {
  const program = new commander.Command();
  program
    .option('-x [value]')
    .option('-y')
    .implies('x', 'y');

  program.parse(['-xValue'], { from: 'user' });
  expect(program.opts().y).toBe(true);
});
