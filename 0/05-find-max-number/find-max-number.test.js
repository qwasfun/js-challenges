import findMaxNumber from './find-max-number';

test('寻找数组中最大的数字', () => {
  expect(findMaxNumber([1, 5, 3, 9, 2])).toBe(9);
  expect(findMaxNumber([0, -1, -5, 2])).toBe(2);
  expect(findMaxNumber([10, 10, 10, 10])).toBe(10);
  expect(findMaxNumber([10, 5, 3, 8, 2])).toBe(10);
});
