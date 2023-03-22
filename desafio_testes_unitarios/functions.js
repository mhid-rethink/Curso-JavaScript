// Função 1 - doubleANumber
const doubleANumber = (number) => number * 2;
console.log(doubleANumber(2)); // 4

// Função 2 - createFullName
const createFullName = (firstName, lastName) => firstName + " " + lastName;
console.log(createFullName("Gabriel", "Gomes")); // Gabriel Gomes

// Função 3 - calculateTheLenghtOfAString2
const calculateTheLenghtOfAString2 = (str) => {
  const length = str.length;
  console.log(`o tamanho de "${str}" é:`, length);
  return str.length;
};
console.log(calculateTheLenghtOfAString2("Tamanho")); // 7

// Função 4 - numbersArrayIntoString
const numbersArrayIntoString = (array) => {
  return array.reduce((acc, cur, index) => {
    if (index % 3 === 0 && index != 0) acc += ".";
    return (acc += cur);
  }, "");
};
console.log(numbersArrayIntoString([1, 2, 3, 4, 5, 6, 7, 8])); // “123.456.78”

// Função 5 - addNewLanguage
const programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes:
    "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
};
const addNewLanguage = (object, newLanguage) => {
  object.languages.push(newLanguage);
  return object;
};
console.log(addNewLanguage(programming, "Swift"));
// Test if languages have lenght + 1

// Função 6 - votersResult
const voters = [
  { name: "Bob", age: 30, voted: true },
  { name: "Jake", age: 32, voted: true },
  { name: "Kate", age: 25, voted: false },
  { name: "Sam", age: 20, voted: false },
  { name: "Phil", age: 21, voted: true },
  { name: "Ed", age: 55, voted: true },
  { name: "Tami", age: 54, voted: true },
  { name: "Mary", age: 31, voted: false },
  { name: "Becky", age: 43, voted: false },
  { name: "Joey", age: 41, voted: true },
  { name: "Jeff", age: 30, voted: true },
  { name: "Zack", age: 19, voted: false },
];

const votersResult = (data) =>
  data.reduce(
    (acc, cur) => {
      if (cur.age < 30) {
        acc.numYoungPeople += 1;
        if (cur.voted) acc.numYoungVotes += 1;
      } else if (cur.age < 40) {
        acc.numMidsPeople += 1;
        if (cur.voted) acc.numMidVotesPeople += 1;
      } else {
        acc.numOldsPeople += 1;
        if (cur.voted) acc.numOldVotesPeople += 1;
      }
      return acc;
    },
    {
      numYoungVotes: 0,
      numYoungPeople: 0,
      numMidVotesPeople: 0,
      numMidsPeople: 0,
      numOldVotesPeople: 0,
      numOldsPeople: 0,
    }
  );

console.log(votersResult(voters));
/*
{ numYoungVotes: 1, // número de eleitores jovens que votaram
numYoungPeople: 4, // número de eleitores jovens
numMidVotesPeople: 3, // número de eleitores maduros que votaram
numMidsPeople: 4, // número de eleitores maduros
numOldVotesPeople: 3, // número de eleitores sêniores que votaram
numOldsPeople: 4 // número de eleitores sêniores
}
*/

module.exports = {
  doubleANumber,
  createFullName,
  calculateTheLenghtOfAString2,
  numbersArrayIntoString,
  addNewLanguage,
  votersResult,
};
