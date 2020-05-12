let arr = [2, 3, 4, 5, 6];
let product = arr.reduce((total, currElem) => {
  return total * currElem;
})
console.log(product)
