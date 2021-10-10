//Map

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosEmDobro = numeros.map(valor => valor * 2);

// for(let i=0;i<numeros.length;i++){
//     numeros[i]=numeros[i]*2
// }
//  console.log(numeros)
console.log(numerosEmDobro)


//Para cada elemento:
//Retorne apenas uma string com onome da pessoa
//Remova apenas a chave "nome" do objeto
//Adicione uma chave id em objeto
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
]

//Retorne apenas uma string com onome da pessoa
const questao1 = pessoas.map(obj=>obj.nome)
console.log(questao1)

//Remova apenas a chave "nome" do objeto
const questao2 = pessoas.map(obj=> ({idade: obj.idade}));
console.log(questao2)

//Adicione uma chave id em objeto
const questao3 = pessoas.map((obj,index)=>{
    obj.id = index;
    return obj
})
console.log(questao3)
console.log(pessoas);   //mudou pq mexi nas referencias

//adiciona parametro peso, preservando obj original
const questao4 = pessoas.map((obj, index)=>{
    const newObj = { ...obj};
    newObj.peso = index + 40;
    return newObj
})

console.log(questao4)
console.log(pessoas)