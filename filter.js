let products = [
  { id: 0, price: 10, quantity: 20 },
  { id: 1, price: 30, quantity: 10 },
  { id: 2, price: 20, quantity: 8 },
  { id: 3, price: 25, quantity: 5 },
];

let cart = products.filter((items) => items.quantity <= 8);
console.log(cart);
