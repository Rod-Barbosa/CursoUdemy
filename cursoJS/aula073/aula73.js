/*
Object.values
Object.entries
Object.assign(des, any)
Object.getOwnPropertyDescriptor(o, 'prop)
...(spread)

Javimos
Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define varias propriedades)
Object.defineProperty (define uma propriedade)
*/
const produto = {nome: 'Caneca', preco: 1.8};
const outraCoisa = produto;

produto.nome = 'Luiz Otavio'    //mexe em 1 altera os 2
console.log(outraCoisa)
outraCoisa.nome = 'Sandalia'    //mexe no original, muda na copia tambem
console.log(produto)

outraCoisa.preco = 2.5 //mudou o preco dos 2
//pra mudar so o outracoisa...
const terceiraCoisa = {
    ...produto,         //expalhou o objeto original
    material: 'plastico'
    }
terceiraCoisa.preco = 5.5;
console.log(produto)
console.log(terceiraCoisa)

const caneca = Object.assign({}, produto, {material: 'porcelana'});
console.log(caneca);

console.log(Object.keys(produto))   //mostra array com chaves do obj
Object.freeze(outraCoisa);
outraCoisa.nome = 'Caneta'
console.log(outraCoisa);        //nome nao mudou
Object.defineProperty(caneca, 'nome', {
    writable: false,
    configurable: false,
    value: 'Qualquer outra coisa'
})
delete caneca.nome
console.log(Object.getOwnPropertyDescriptor(caneca, 'nome'))

console.log(Object.values(caneca))  //array com valores, ao inves das cahves do obj
console.log(Object.entries(caneca)) //array com keys e values

for(let entry of Object.entries(caneca)){
    console.log(entry);
}
for(let [chave, value] of Object.entries(caneca)){
    console.log(chave, value);
}





