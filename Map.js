// This is used for mutation of data
// competitive programming -- FAANG
// Typescript, javascript, TDD -type driven development
//  unit testing, docker, React, axios,
// state management -> redux, mobx, recoil,
// git/ github
// storybook

let data = [3, 4, 5, 6, 3, 2, 7];

let result = data.map((item, index) => item * 3);
// console.log(result);

// id, price, quantity -> object
// 4 products
let products = [
  { id: 0, price: 10, quantity: 20 },
  { id: 1, price: 30, quantity: 10 },
  { id: 2, price: 20, quantity: 8 },
  { id: 3, price: 25, quantity: 5 },
];

let cart = products.map((item, index) => item.quantity * item.price);
console.log(cart);
