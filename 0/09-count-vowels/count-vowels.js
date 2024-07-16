function countVowels(str) {
  const formattedStr = str.toLowerCase();
  let count = 0;

  for (let i = 0; i < formattedStr.length; i++) {
    if (
      formattedStr[i] == 'a' ||
      formattedStr[i] == 'o' ||
      formattedStr[i] == 'e' ||
      formattedStr[i] == 'i' ||
      formattedStr[i] == 'u'
    ) {
      count++;
    }
  }
  return count;
}

export default countVowels;
