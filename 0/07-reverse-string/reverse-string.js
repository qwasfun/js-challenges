function reverseString(str) {
  let arr = str.split('');
  let newArr = [];
  for (let i = arr.length; i >= 0; i--) {
    newArr.push(arr[i]);
  }

  return newArr.join('');
}

export default reverseString;
