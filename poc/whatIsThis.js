// JS => every piece of runs inside an execution context
//  Execution context is only made when a **fn is called**
// execution context => (this of that execution context is defined)

// When GEC is created then this will be window object 
// when execution context is created due  normal function is called -> this (window object )
// when execution context is created due to normal method(object's function) -> this (current object)
// Arrow function doesn't have there own this => it takes this from it's parent
// global
let a = 10;
// window object 
// console.log(this);
// fn call
function myfn() {
  // console.log(this);
}
myfn();
// normal => fn call
// let myobj = {
//   name: "Steve",
//   sayHi: function () {
//     console.log(this);
//     function inner() {
//       console.log(this);
//     }
//     inner();
//   }
// }
// react => arrow , code  will run intended 
 name = "rogers"
let myobj = {
  name: "Steve",
  lastName: this.name,

  sayHi: function () {
    console.log(this.lastName);
    const inner = () => {
      // console.log(this);
    }
    inner();
  }
}

myobj.sayHi();

