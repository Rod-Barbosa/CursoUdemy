//reduce
//normalmente serve pra transformar o array em 1 unico numero

//some todos os numeros
//retorne um array com os pares (Filter)
//Retorne um array com o dobro dos valores (Map)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

//some todos os numeros
const total = numeros.reduce(function(acumulador, valor, index, array){
    acumulador += valor
    return acumulador
}, 0);
console.log(total)

//retorne um array com os pares (Filter)
const pares = numeros.reduce(function(acumulador, valor, index){
    if(valor%2===0) acumulador.push(valor);
    return acumulador;
},[])
console.log(pares);

//Retorne um array com o dobro dos valores (Map)
const dobro = numeros.reduce(function(acumulador, valor){
    acumulador.push(valor*2);
    return acumulador
}, []);
console.log(dobro);


//retorne a pessoa mais velha
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Rosana', idade: 74},
    {nome: 'Wallace', idade: 47},
]

const velho = pessoas.reduce(function(acc, obj, index){
    if(obj.idade > acc.idade) return obj;
    return acc 
})
console.log(velho)