const getNthElement = (index, array) => {
  if (index >= array.length) {
    return array[index - array.length];
  }
  return array[index];
};

const arrayToCSVString = array => {
  return array.join(',');
};

const csvStringToArray = string => {
  return string.split(',');
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  const newArray = array.concat(element);
  return newArray;
};

const removeNthElement = (index, array) => {
  array.splice(index, 1);
};

const numbersToStrings = numbers => {
  for (let i = 0; i < numbers.length; i += 1) {
    numbers.splice(i, 1, numbers[i].toString());
  }
  return numbers;
};

const uppercaseWordsInArray = strings => {
  for (let i = 0; i < strings.length; i += 1) {
    strings.splice(i, 1, strings[i].toUpperCase());
  }
  return strings;
};

const reverseWordsInArray = strings => {
  for (let i = 0; i < strings.length; i += 1) {
    strings.splice(
      i,
      1,
      strings[i]
        .split('')
        .reverse()
        .join('')
    );
  }
  return strings;
};

const onlyEven = numbers => {
  const newNumbers = numbers.filter(function(number) {
    return number % 2 === 0;
  });
  return newNumbers;
};

const removeNthElement2 = (index, array) => {
  const newArray = [];
  for (let i = 0; i < array.length; i += 1) {
    newArray.push(array[i]);
  }
  newArray.splice(index, 1);
  return newArray;
};

const elementsStartingWithAVowel = strings => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const vowelArray = [];
  for (let i = 0; i < strings.length; i += 1) {
    const word = strings[i];
    if (vowels.includes(word[0]) || vowels.includes(word[0].toLowerCase())) {
      vowelArray.push(strings[i]);
    }
  }
  return vowelArray;
};

const removeSpaces = string => {
  const newString = string.split(' ').join('');
  return newString;
};

const sumNumbers = numbers => {
  let sum = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
  }
  return sum;
};

const sortByLastLetter = strings => {
  const stringArray = [];

  for (let i = 0; i < strings.length; i += 1) {
    stringArray.push(
      strings[i]
        .split('')
        .reverse()
        .join('')
    );
  }
  stringArray.sort();
  const sortedArray = [];
  for (let j = 0; j < stringArray.length; j += 1) {
    sortedArray.push(
      stringArray[j]
        .split('')
        .reverse()
        .join('')
    );
  }
  return sortedArray;
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
