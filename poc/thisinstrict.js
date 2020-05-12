"use strict"
//  no global variables are allowed here
var name="Jasbir"

// When GEC is created then this will be window object 
// when execution context is created due  normal function is called -> this (undefined )
// when execution context is created due to normal method(object's function) -> this (current object)
// Arrow function doesn't have there own this => it takes this from it's parent
// window object 
// console.log(this);
// fn call=> undefined
function myfn() {
  console.log(this);
}
// myfn();
// method call => this => object 

let myobj = {
  name: "Steve",
  sayHi: function () {
    console.log(this);
  const  inner=()=> {
      console.log(this);
    }
    inner();
  }
}


myobj.sayHi();
