//filter -> sempre retorna array igual ou menor que o original "filtrado"

//Retorne os numaros maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];



const numerosFiltrados = numeros.filter(valor => valor>10);
console.log(numerosFiltrados);




// function maior10(array){
//     const maior10 = [];
//     // for(let i=0; i<array.length;i++){
//     //     if(array[i]>10){
//     //         maior10.push(array[i])
//     //     }
//     // }
//     for(numero of numeros){
//         if (numero > 10 ) maior10.push(numero)
//     }
//     return maior10;
// }
// console.log(maior10(numeros))


//retorne as pessoas que tem o nome com 5 letras ou mais
//retorne as pessoas com mais de 50 anos
//retorne as pessoas cujo nome termina com a
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
]

const cincoLetras = pessoas.filter((e)=> e.nome.length >= 5);
console.log(`5 ou mais letras no nome: `, cincoLetras);

const anos50 = pessoas.filter(e=>e.idade>50);
console.log(`Mais de 50 anos: `, anos50)

const nomeA = pessoas.filter(e=>e.nome.endsWith('a'));
console.log(`Nome termina em a: `, nomeA);