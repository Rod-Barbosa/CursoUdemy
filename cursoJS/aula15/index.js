let num1 = 9.54578;
let num2 = Math.floor(num1);
console.log(num2);
num2 = Math.ceil(num1);
console.log(num2);
console.log(Math.round(num1));
console.log(Math.max(1,2,3,4,1234,5,-50));
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
const aleatorio = Math.round(Math.random() * (10 - 5) + 5 );
console.log(aleatorio);
console.log(Math.pow(2, 10));   //2 elevato a 10
console.log(2 ** 10);          //2 elevato a 10 
console.log(9 ** 0.5);         //9 raiz quadrada
console.log(8 ** 1/3); //--> 9/3 --> 2,666
console.log(8 ** (1/3));    //8 raiz de 3 --->2 

//Dá pra dividir por 0 no Javascript sem erro
console.log( 100/0);    //--> Infinity, não dá erro
console.log(!!(100/0)); //avalia como true