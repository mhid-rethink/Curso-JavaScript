const input = [
  {
    name: "John",
    age: 13,
  },
  {
    name: "Mark",
    age: 56,
  },
  {
    name: "Rachel",
    age: 45,
  },
  {
    name: "Nate",
    age: 67,
  },
  {
    name: "Jennifer",
    age: 65,
  },
];

ages = (myArray) => {
  const ageList = myArray.map((person) => person.age);
  return [
    Math.min(...ageList),
    Math.max(...ageList),
    Math.max(...ageList) - Math.min(...ageList),
  ];
};

console.log(ages(input));
