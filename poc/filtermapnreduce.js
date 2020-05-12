// 
let arr = [2, 3, 4, 5, 6];
// smallfunction => arr every element fn apply
// function addnsub(elem) {
//   if (elem % 2 == 0) {
//     return elem + 1;
//   }
//   return elem - 1;
// }
//  let tArr=  arr.map(addnsub);
//  console.log(arr);
//  console.log("``````````````````````````````");
//  console.log(tArr);
let tarr = arr.map((elem) => {
  if (elem % 2 == 0) {
    return elem + 1;
  }
  return elem - 1;
})
console.log(arr);
console.log("```````````````````````");
console.log(tarr);