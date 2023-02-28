filteredArray = (myArray) => myArray.filter((element) => element.length <= 5);
console.log(
  filteredArray([
    "cachorro",
    "pato",
    "oi",
    "família",
    "comer",
    "camping",
    "aquarela",
  ])
);
