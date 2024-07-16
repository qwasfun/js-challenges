import titleCase from './title-case';

test('将字符串转换为标题形式', () => {
  expect(titleCase('hello World')).toBe('Hello World');
  expect(titleCase('javascript programming')).toBe('Javascript Programming');
  expect(titleCase('OpenAI ChatBot')).toBe('Openai Chatbot');
});
