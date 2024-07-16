import getSum from './get-sum';

test('计算两个数的和', () => {
  const a = 7;
  const b = 5;
  expect(getSum(a, b)).toBe(12);
});
