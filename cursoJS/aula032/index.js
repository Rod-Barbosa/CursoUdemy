//------ATRIBUICAO VIA DESESTRUTURACAO
const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const [primeiroNumero, , segundoNumero, , ...resto] = numeros;
// .. rest operator ou spread operator
const terceiroNumero = numeros[2];
console.log(primeiroNumero, segundoNumero);
console.log(resto);
console.log(terceiroNumero);


const arrayNums = [[1,2,3],[4,5,6],[7,8,9]];
const [,[,,seis]] = arrayNums;      //mind fuckery
const [list1, lista2, lista3] = arrayNums;
const [,five] = lista2
console.log(seis);
console.log(five);