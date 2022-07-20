let sample = [1, 2, 8, 9, 6];

let result = sample.reduce((items, red) => items + red, 0);
// console.log(result);

let products = [
  { id: 0, price: 10, quantity: 20 },
  { id: 1, price: 30, quantity: 10 },
  { id: 2, price: 20, quantity: 8 },
  { id: 3, price: 25, quantity: 5 },
];

let cart = products
  .map((items) => items.price * items.quantity)
  .reduce((currItem, prevItem) => currItem + prevItem, 0);
console.log(cart);
