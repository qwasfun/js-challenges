import countVowels from './count-vowels';

test('统计字符串中的元音字符数量', () => {
  expect(countVowels('Hello World')).toBe(3);
  expect(countVowels('JavaScript')).toBe(3);
  expect(countVowels('JavaScript')).toBe(3);
  expect(countVowels('OpenAI ChatBot')).toBe(6);
  expect(countVowels('Coding Challenge')).toBe(5);
});
