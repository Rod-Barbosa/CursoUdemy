/*
Aritmeticos
+ adição / concatenação 
** Potenciação
% Resto da divisão

Precedencia:
()
**
8 / %
+ -
---> empate resolve da esquerda pra direita, de cima pra baixo
*/

const num0 = '5';
const num1 = 5;
const num2 = 2;
const num3 = 10;

console.log(num0 + num2);
console.log(num1 + num2);
console.log(num1 ** num2);
console.log(num2 ** num1);
console.log(num1 + num2 * num3);
console.log((num1 + num2) * num3);


//Incremento e Decremento

let contador = 1;
contador++;
contador++;
contador++;
console.log(contador);      //4
++contador;
console.log(contador++);    //5
console.log(++contador);    //7
console.log(contador);      //7

contador--;
console.log(contador);      //6
console.log(contador--);    //6 -> evita essa porra, pq a variavel é 5 agora, mas loga 6

const passo = 2;
contador = contador + passo;

//Operador de atribuição
console.log(contador)       //7
contador += passo;
console.log(contador);      //9
contador *= passo;
console.log(contador);      //18

//NaN -> Not a Number

const name1 = 'Rodrigo'
console.log(contador * name1);  //NaN
const name2 = '5'
console.log(contador * name2);  //90






