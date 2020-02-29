//1.
// export const a =10;
// export function fn(){
//   console.log("fn")
// }

//2.
// let a = 10;
// function show(){
//   console.log("show")
// }
// export {a,show}

//3.
// const a =100;
// export default a;

//4.
// export default {
//   a:10,
//   fn(){
//     console.log("fn")
//   }
// }

//5.

// const a = 100;
// export {
//   a as kkk
// }

//6

const a = 10;

function fn() {
  console.log("fn")
}

class Person {
  run() {
    console.log("run")
  }
}

export {
  a,
  fn,
  Person
}