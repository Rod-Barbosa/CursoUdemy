//criando classes 

class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar(){
        console.log(`${this.nome} esta falando.`);
    }

    // comer (){
    //     console.log(`${this.nome} esta comendo.`);
    // }

    // beber(){
    //     console.log(`${this.nome} esta bebendo.`);
    // }
}

function Pessoa2(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
} 
Pessoa2.prototype.falar = function(){
    console.log(`${this.nome} esta falando.`);
}

const p1 = new Pessoa('Rodrigo', 'Piedade');
const p2 = new Pessoa('Anita', 'Piedade');
const p3 = new Pessoa('Joana', 'Piedade');
const p4 = new Pessoa('Joao', 'Piedade');

const p22 = new Pessoa2('Leandro', 'Piedade');

console.log(p1)
p4.falar();
p2.falar();