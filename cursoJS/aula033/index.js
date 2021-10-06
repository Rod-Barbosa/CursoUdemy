const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};
console.log(pessoa);

//atribuicao via desestruturacao
const { nome, sobrenome } = pessoa;
console.log(nome, sobrenome);
const { endereco: {rua, numero}} = pessoa;

console.log(rua);  