import removeDuplicates from './remove-duplicates';

test('删除数组中重复元素', () => {
  expect(removeDuplicates([1, 2, 3, 4, 4, 5, 5, 6])).toEqual([
    1, 2, 3, 4, 5, 6,
  ]);
  expect(removeDuplicates(['Apple', 'Banana', 'Pairs', 'Banana'])).toEqual([
    'Apple',
    'Banana',
    'Pairs',
  ]);
  expect(removeDuplicates([true, true, false, true])).toEqual([true, false]);
});
