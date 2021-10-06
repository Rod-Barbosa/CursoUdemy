//criar array com const é normal
//só não dá pra reatribuir o array pra outra coisa
//alterar os valores de dentro do array é tranquilo
const array = [1,2,3];
array.push(4);
array[0] = 'Luiz';
// array = 'Outra';     //vai quebrar o programa
console.log(array);

// const pessoa01 = {
//     nome: 'Luiz',
//     sobrenome: 'Miranda',
//     idade: 25
// };

// console.log(pessoa01.nome);

//esse tipo de funcao é chamdo factory
function criaPessoa (nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}

const pessoa1 = criaPessoa('Luiz', 'Otávio', 25);
const pessoa2 = criaPessoa('Hugo', 'Moreira', 15);
const pessoa3 = criaPessoa('José', 'Oliveira', 55);
console.log(pessoa1.idade, pessoa2.nome);

const pato = {
    nome: 'Huguinho',
    sobrenome: 'McDuck',
    idade: 8,
    fala () {
        console.log(`Minha idade atula é ${this.idade}.`);
    },
    incrementaIdade(){
        this.idade++;
    }
}
pato.fala();
pato.incrementaIdade();
pato.fala();
pato.incrementaIdade();
pato.fala();
pato.incrementaIdade();
pato.fala();