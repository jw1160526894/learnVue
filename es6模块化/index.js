//1
// import {
//   a,fn
// } from "./main.js"
// console.log(a)
// fn();

//2.
// import {
//   a,
//   show as mm
// } from "./main.js"

// console.log(a);
// mm();

//3.
// import sss from "./main.js"
// console.log(sss)

//4.
// import obj from "./main.js"

// console.log(obj.a)
// obj.fn()

//5
// import {
//   kkk
// } from "./main.js"
// console.log(kkk)

//6.
import * as myObj from "./main.js"
myObj.fn()

let person = myObj.Person;
let x = new person()
x.run()