const falar = {
    falar(){
        console.log(`${this.nome} esta falando`);
    }
};
const beber = {
    beber(){
        console.log(`${this.nome} esta bebendo`);
    }
};
const comer = {
    comer(){
        console.log(`${this.nome} esta comendo`);
    }
};

const pessoaPrototype = {...falar, ...comer, ...beber};
// const pessoaPrototype = Object.assign({}, falar, comer, beber);

function criaPessoa(nome, sobrenome){
    return Object.create(pessoaPrototype, {
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    });
}

const p1 = criaPessoa('Rodrigo', 'Piedade');
const p2 = criaPessoa('Maria', 'Colombia');
p1.falar();
p2.comer();



