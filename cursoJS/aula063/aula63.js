//splice

//              -5          -4      -3          -2          -1
//              0           1       2           3           4
const nomes = ['Maria', 'Joao', 'Eduardo', 'Gabriel', 'Julia'];

//nomes.splice(indice, delete, elem1, elem2, elem3);
const removidos = nomes.splice(4, 1);    //retirna array com elementos removidos
console.log(nomes, removidos);
nomes.push('Julia');

// console.log(Number.MAX_VALUE)
// console.log(nomes.splice(-2, Number.MAX_VALUE));

//No indice 3, vc vai remover 1 elemento e adicionar 'Luiz'
const substituidos = nomes.splice(3,1,'Luiz')
console.log(nomes);

//No indice 2, deleta 1 e mete 2 nomes
const subs2 = nomes.splice(2,1,'Rodrigo', 'Fred');
console.log(nomes);

//simula pop()
const rem = nomes.splice(-1,1);

//simula shift()
const shif = nomes.splice(0,1);

//simula push()
const bota = nomes.splice(nomes.length,0,'Ana');
console.log(nomes)

//simula unshift()
const tiraDaFrente = nomes.splice(0,0,'Aurelio');
console.log(nomes)
