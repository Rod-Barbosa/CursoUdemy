//Revisando Objetos

//literal
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};

//notacao de ponto
console.log(pessoa.nome);
console.log(pessoa.sobrenome);

//notacao colchete funciona tambem
const chave = 'nome'
console.log(pessoa['nome'])
console.log(pessoa[chave]);
console.log(pessoa['sobrenome']);

//construtor

const pessoa1 = new Object();
pessoa1.nome = 'Rodrigo';
pessoa1.sobrenome = 'Piedade';

console.log(pessoa1);
delete pessoa1.nome;
console.log(pessoa1);
pessoa1.nome = 'Rodrigo';

pessoa1.falarNome = function(){
    return (`${this.nome} está falando seu nome`)
}
console.log( pessoa1.falarNome());
pessoa1.idade = 33;
pessoa1.getDataNascimento = function(){
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
}

console.log(pessoa1.getDataNascimento());

for(let chave in pessoa1){
    console.log(pessoa1[chave]);    //mostra os valores
    console.log(pessoa1.chave);     //undefined out the wazu
}

console.log('##############')
// Factory functions / Constructor functions / Classes
//this is factory
function criaPessoa(nome, sobrenome){
    return {
        nome,
        sobrenome,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome }`;
        }
    };
}

const p1 = criaPessoa('Luiz', 'Otavio');
console.log(p1.nomeCompleto)



//constructor function
function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    Object.freeze(this)     //agora nenhum objeto feito por essa funcao vai ser alterado
}

// new cria obj vazio {}
// pega a palavra this e atrela dentro dessa funcao ao objeto
// new retorna esse this
const p2 = new Pessoa('Frederico', 'Fortes');
console.log(p2)     //mostra o tipo de objeto junto, no caso Pessoa

// p2 = 'Outra coisa';      //nao rola
p2.nome = 'Veronica';    //rola.... mas altera o valor de const?
console.log(p2.nome);   //solta frederico por causa do Object.freeze(this)
delete p2.nome
console.log(p2.nome);   //nem delete funciona com freeze



