/**
* 
* - if implicitly then coercion  
* - converting one type to another types when we done explicitly called type casting
* 
* - coercion only result in primitive types (string number or boolean), can't 
*   possible result in object or function
* - type casting (explicit coercion) occurs at compile time and implicit coercion occurs in run time
* ex.
*/
let number = 42;
number = 42 + "";// implicit coercion (converted 42 number type to string type)
console.log(number);
// "42"
number = String(42); // explicit coercion 
console.log(number);
// "42"


/**
 * primitty abstract oprations
 * 
 * toString()
 * toNumber()
 * toBoolean() 
 */

let arr = [1,2,3];
console.log(arr.toString())
// 1,2,3


// JSON.stringfy()
console.log(
  JSON.stringify(undefined),
  JSON.stringify(function () {}),
  JSON.stringify([1, undefined, function(){ }, 4]),
  JSON.stringify({a: 2, b: function(){}})
)
// undefined undefined '[1,null,null,4]' '{"a":2}'


/* complex object and function can't be corcioned  */
let a = { name: 'jay' };
let b = { name: 'jay' };
let fun1 = function () {
  return 'a';
}
let fun2 = function () {
  return ''
}
let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];


console.log(a === b, a == b, JSON.stringify(a) === JSON.stringify(b));
/* false false true */

console.log(fun1 === fun2, fun1 == fun2, JSON.stringify(fun1) === JSON.stringify(fun2), JSON.stringify(fun2));
/* false false true undefined */

console.log(arr1 === arr2, arr1 == arr2, JSON.stringify(arr1) === JSON.stringify(arr2), JSON.stringify(arr2));
/* false false true */

console.log(typeof fun1);
/* function */