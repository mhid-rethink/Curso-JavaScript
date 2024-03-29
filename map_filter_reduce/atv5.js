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

const voterResults = {
  numYoungVotes: 0,
  numYoungPeople: 0,
  numMidVotesPeople: 0,
  numMidPeople: 0,
  numOldVotesPeople: 0,
  numOldsPeople: 0,
};
voterResults.numYoungPeople = voters
  .filter((voter) => voter.age < 30)
  .reduce((acc, element) => acc + 1, 0);

voterResults.numYoungVotes = voters
  .filter((voter) => voter.age < 30 && voter.voted)
  .reduce((acc, element) => acc + 1, 0);

voterResults.numMidPeople = voters
  .filter((voter) => voter.age >= 30 && voter.age < 40)
  .reduce((acc, element) => acc + 1, 0);

voterResults.numMidVotesPeople = voters
  .filter((voter) => voter.age >= 30 && voter.age < 40 && voter.voted)
  .reduce((acc, element) => acc + 1, 0);

voterResults.numOldsPeople = voters
  .filter((voter) => voter.age >= 40)
  .reduce((acc, element) => acc + 1, 0);

voterResults.numOldVotesPeople = voters
  .filter((voter) => voter.age >= 40 && voter.voted)
  .reduce((acc, element) => acc + 1, 0);

console.log(voterResults); // seu código aqui // Returned value shown below:
/*
{ numYoungVotes: 1, // número de eleitores jovens que votaram
numYoungPeople: 4, // número de eleitores jovens
numMidVotesPeople: 3, // número de eleitores maduros que votaram
numMidsPeople: 4, // número de eleitores maduros
numOldVotesPeople: 3, // número de eleitores sêniores que votaram
numOldsPeople: 4 // número de eleitores sêniores
}
*/
