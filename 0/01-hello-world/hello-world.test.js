import helloWorld from './hello-world';

test("返回字符串 'Hello world!'", () => {
  const result = helloWorld();
  expect(result).toBe('Hello World!');
});
