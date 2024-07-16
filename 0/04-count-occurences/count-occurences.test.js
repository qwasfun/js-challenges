import countOccurences from './count-occurences';

test('统计字符在字符串中出现的次数', () => {
  expect(countOccurences('Hello World', 'l')).toBe(3);
  expect(countOccurences('Hello World', 'o')).toBe(2);
});
