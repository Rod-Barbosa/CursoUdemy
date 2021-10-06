let num1 = 1;       //number
let num2 = 2.5;     //number

console.log(num1.toString() + num2);    //concatenou
// num1 = num1.toString();
//console.log(num1.toString(2));
console.log(num1.toFixed(4));           //meteu casa decimal
console.log(typeof num1);
console.log(Number.isInteger(num1));
let temp = num1 * `Olá`;
console.log(Number.isNaN(temp));

temp = num1 * `5`;
console.log(Number.isNaN(temp));


let num11 = 0.7;
let num21 = 0.1;

console.log(num11 + num21);
num11 += num21;     //0.8
num11 += num21;     //0.9
num11 += num21;     //1
console.log(num11 );

num11 = num11.toFixed(2)
console.log(num11);
console.log(Number.isInteger(1.00));    //true
console.log(Number.isInteger(num11));   //false

