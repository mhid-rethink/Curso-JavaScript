const wishlist = [
  { title: "Tesla Model S", price: 90000 },
  { title: "4 carat diamond ring", price: 45000 },
  { title: "Fancy hacky Sack", price: 5 },
  { title: "Gold fidgit spinner", price: 2000 },
  { title: "A second Tesla Model S", price: 90000 },
];

const shoppingSpree = wishlist.reduce(
  (totalPrice, curr) => totalPrice + curr.price,
  0
); // seu código aqui

console.log(shoppingSpree); // 227005
