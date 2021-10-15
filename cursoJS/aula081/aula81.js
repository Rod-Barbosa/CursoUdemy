//getter setter
const _velocidade = Symbol('velocidade');

class Carro {
    constructor(nome, velocidade){
        this.nome = nome;
        this[_velocidade] = 0;
    }

    set velocidade(valor){
        console.log('SETTER')
        if(typeof valor !== 'number') return;
        if(valor >= 100 || valor <=0) return;
        if(typeof valor !== 'number') return;
        this[_velocidade] = valor;
    }

    get velocidade(){
        console.log('GETTER')
        return this[_velocidade];
    }

    acelerar(){
        if(this[_velocidade]>=100) return;
            this[_velocidade]++;
    }

    freiar(){
        if(this[_velocidade]<=0) return;
        this[_velocidade]--;
    }
}

const c1 = new Carro('Fusca');

for(let i = 0; i <= 200; i++){
    c1.acelerar();
}


console.log(c1.velocidade)
c1.velocidade = 200;
console.log(c1.velocidade)
c1.velocidade = 99;
console.log(c1.velocidade)


class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    get nomeCompleto(){
        return this.nome + ' ' + this.sobrenome;
    }
    set nomeCompleto(valor){
        valor = valor.split(' ');
        this.nome = valor.shift();
        this.sobrenome = valor.join(' ');
    }
}

const p1 = new Pessoa('Rodrigo', 'Piedade');
//console.log(p1.nomeCompleto())  //vai dar merda. Pq get faz com que nome completo seja atributo, nao funcao
console.log(p1.nomeCompleto)
p1.nomeCompleto = 'Luiz Miranda Oliveira';
console.log(p1.nome)
console.log(p1.sobrenome)