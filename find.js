let products = [
  { id: 0, price: 10, quantity: 20 },
  { id: 1, price: 30, quantity: 10 },
  { id: 2, price: 20, quantity: 8 },
  { id: 3, price: 25, quantity: 5 },
];

let findOneItem = products.find((item) => item.id === 2);

console.log(findOneItem);
