import calculator from './calculator';

test('使用 calculator 方法进行四则运算', () => {
  const a = 5;
  const b = 7;
  expect(calculator(a, b, '+')).toBe(12);
  expect(calculator(a, b, '-')).toBe(-2);
  expect(calculator(a, b, '*')).toBe(35);
  expect(calculator(a, b, '/')).toBeCloseTo(0.7143, 4);
});
