import palindrome from './palindrome';

test('判断是否为回文字符串', () => {
  expect(palindrome('abcdcba')).toBe(true);
  expect(palindrome('abc cba')).toBe(true);
  expect(palindrome('**&&Hello World ***aaaaaa%%&*(*&^$#$%^&', 'l')).toBe(
    false,
  );
  expect(palindrome('aaaaa')).toBe(true);
  expect(palindrome('Hello World')).toBe(false);
});
