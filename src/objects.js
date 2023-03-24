const createPerson = (name, age) => {
  this.name = name;
  this.age = age;
  return { name, age };
};

const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  if (object[property]) {
    return true;
  }
  return false;
};

const isOver65 = person => {
  return person.age > 65;
};

const getAges = people => {
  const ageArray = [];
  for (let i = 0; i < people.length; i += 1) {
    ageArray.push(people[i].age);
  }
  return ageArray;
};

const findByName = (name, people) => {
  for (let i = 0; i < people.length; i += 1) {
    if (people[i].name === name) {
      return people[i];
    }
  }
};

const findHondas = cars => {
  const hondaArray = [];
  for (let i = 0; i < cars.length; i += 1) {
    if (cars[i].manufacturer === 'Honda') {
      hondaArray.push(cars[i]);
    }
  }
  return hondaArray;
};

const averageAge = people => {
  let sum = 0;
  for (let i = 0; i < people.length; i += 1) {
    sum += people[i].age;
  }
  return sum / people.length;
};

const createTalkingPerson = (name, age) => {
  function introduction(string) {
    return `Hi ${string}, my name is ${this.name} and I am ${this.age}!`;
  }

  const person = {
    name,
    age,
    introduce: introduction
  };

  return person;
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
