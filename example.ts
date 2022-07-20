let a: number = 10;
let b: number = 20;

let c: string | number = a + b;
console.log(c);

let aFunction = () => {
  return 10;
};

// CI/CD pipeline -> AWS cloud | Azure cloud
// test("this test is about aFunction function",()=>{
//     expect(aFunction()).toBe(10)
// })
