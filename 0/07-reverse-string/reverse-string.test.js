import reverseString from './reverse-string';

test('反转字符串', () => {
  expect(reverseString('hello world')).toBe('dlrow olleh');
});
