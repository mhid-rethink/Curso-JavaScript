const doubledNumber = (number) => number * 2;
// console.log(doubledNumber(3));

const fullName = (firstName, lastName) => firstName + " " + lastName;
// console.log(fullName("Matheus", "Dias"));

const stringLength = (texto) =>
  `o tamanho de ${texto} é: ` + texto.length + " caracteres";
// console.log(stringLength("Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu"));

let alerts = [
  "Você é bem legal",
  "Você é inteligente",
  "Que bom trabalhar contigo",
];
const randomizedAlert = (name) =>
  console.log(alerts[Math.floor(Math.random() * alerts.length)] + `, ${name}`);
// console.log(randomizedAlert("Matheus"))

array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const evenNumbers = array.filter((number) => number % 2 === 0);
// console.log(evenNumbers)

const userObject = {
  name: "John",
  surname: "Doe",
  age: 40,
  location: {
    latitude: 43,
    longitude: 12,
  },
};
const currentUser = (user) =>
  user.name + " " + user.surname + " (" + user.age + ")";
console.log(currentUser(userObject));
