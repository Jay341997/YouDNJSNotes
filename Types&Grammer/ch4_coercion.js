/* complex object and function can't be corcioned  */

let a = { name: 'jay' };
let b = { name: 'jay' };
let fun1 = function () {
  return 'a';
}
let fun2 = function () {
  return ''
}
let arr1 = [1, 2 ,3];
let arr2 = [1, 2, 3];


console.log(a === b, a == b, JSON.stringify(a) === JSON.stringify(b));
/* false false true */

console.log(fun1 === fun2, fun1 == fun2, JSON.stringify(fun1) === JSON.stringify(fun2), JSON.stringify(fun2));
/* false false true undefined */

console.log(arr1 === arr2, arr1 == arr2, JSON.stringify(arr1) === JSON.stringify(arr2), JSON.stringify(arr2));
/* false false true */

console.log(typeof fun1);