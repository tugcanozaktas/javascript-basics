function negate(a) {
  return !a;
}

function both(a, b) {
  return a && b;
}

function either(a, b) {
  return a || b;
}

function none(a, b) {
  return !a && !b;
}

function one(a, b) {
  if (a === b) {
    return false;
  }
  return true;
}

function truthiness(a) {
  return Boolean(a);
}

function isEqual(a, b) {
  return a === b;
}

function isGreaterThan(a, b) {
  return a > b;
}

function isLessThanOrEqualTo(a, b) {
  return a <= b;
}

function isOdd(a) {
  return !(a % 2 === 0);
}

function isEven(a) {
  return a % 2 === 0;
}

function isSquare(a) {
  return Number.isInteger(Math.sqrt(a));
}

function startsWith(char, string) {
  return string[0] === char;
}

function containsVowels(string) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const vowelsUpper = ['A', 'E', 'I', 'O', 'U'];

  for (let i = 0; i < vowels.length; i += 1) {
    if (vowels.includes(string[i]) || vowelsUpper.includes(string[i])) {
      return true;
    }
  }
  return false;
}

function isLowerCase(string) {
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  for (let i = 0; i < string.length; i += 1) {
    if (numbers.includes(string[i])) {
      // eslint-disable-next-line no-continue
      continue;
    }
    if (string[i] === string[i].toUpperCase()) {
      return false;
    }
  }
  return true;
}

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
