nome = 'Luiz'; //não faca isso
var nome = 'Rodrigo';
var nome = 'Rodrigão';
console.log(nome);

const nome1 = 'Luiz';   //string
const nome2 = "Luiz";   //string
const nome3 = `Luiz`;   //string
const num1 = 10;        //number
const num2 = 10.52;     //number
let nomeAluno;          //undefined
const sobrenomeAluno = null;  //Null não aponta pra local nenhum
const boolean1 = true;   //boolean;
const boolean2 = false;  //boolean;

console.log(typeof nome, nome);
console.log(typeof sobrenomeAluno, sobrenomeAluno); //bug Javascript, null is an object
console.log(typeof nomeAluno, nomeAluno);

const a = [1, 2];
const b = a;

console.log(a, b);

b.push(3)
console.log(a,b);

let c = 2;
let d = c;
console.log(c, d);
c=3;
console.log(c,d);
