//For in = Estrutura de repeticao
// index pra array , chaves pra vetor
const frutas = ['Pera', 'Uva', 'Maca'];

for (let i in frutas){
    console.log(frutas[i])
}

const pessoa = {
    nome: 'Rodrigo',
    sobrenome: 'Piedade',
    idade: 33
}

for (let chave in pessoa){
    console.log(chave, pessoa[chave]);
}