function sayHello(string) {
  // eslint-disable-next-line prettier/prettier, prefer-template
  const finalMessage = "Hello, " + string + "!";
  return finalMessage;
}

function uppercase(string) {
  const upperCase = string.toUpperCase();
  return upperCase;
}

function lowercase(string) {
  const lowerCase = string.toLowerCase();
  return lowerCase;
}

function countCharacters(string) {
  return string.length;
}

function firstCharacter(string) {
  return string[0];
}

function firstCharacters(string, n) {
  let word = '';
  for (let i = 0; i < n; i += 1) {
    word += string[i];
  }
  return word;
}

module.exports = {
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacter,
  firstCharacters
};
