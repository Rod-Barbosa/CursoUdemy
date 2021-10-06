/*
Primitivos - string, number, boolean, undefined, null (bigint, symbol)
esses são imutáveis;
*/

let nome = 'Luiz'
nome = 'McDuck';
console.log(nome[0]);
nome[0] = 'R';
console.log(nome[0], nome);   //não mudou pq string é imutável, é primário


let a = 'A';
let b = a;          //cópia
console.log(a, b);
a = 'Outra coisa'
console.log(a, b);  //só a muda, b se mantém


/*
Referência (mutável) - array, object, function
*/
let arrayA = [1, 2, 3];
let arrayB = arrayA;
let arrayC = arrayB;
let salvou = [...arrayA];       //Salvou os valores de arrayA, fica imutável

console.log(arrayA, arrayB);

arrayA.push(4)
console.log(arrayA, arrayB);    //both changed cause array is passed by reference

arrayB.pop();
arrayB.pop();
console.log(arrayA, arrayB);    //both got poped
console.log(`${arrayC} esse é o arrayC`);            //has all modifications
console.log(`${salvou} esse é o salvou`);
