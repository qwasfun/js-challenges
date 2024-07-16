// function isPalindrome(str) {
//   const formattedStr = str.toLowerCase().replace(/[^a-z0-9]/g, ''); // 在方括号表达式中使用时，^ 表示不接受该方括号表达式中的字符集合
//   const reverseStr = formattedStr.split('').reverse().join('');

//   return formattedStr === reverseStr;
// }

function isPalindrome(str) {
  const formattedStr = removeAlphaNumeric(str);
  return reverseString(formattedStr) === formattedStr;
}

function removeAlphaNumeric(str) {
  let formattedStr = '';
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (isAlphaNumeric(char)) {
      formattedStr += char;
    }
  }

  return formattedStr;
}

function isAlphaNumeric(char) {
  const code = char.charCodeAt(0); // charCodeAt() 方法返回字符串中规定索引（下标）处字符的 Unicode

  return (code >= 48 && code <= 57) || (code >= 97 && code <= 122);
}

function reverseString(str) {
  let reversed = '';

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

export default isPalindrome;
