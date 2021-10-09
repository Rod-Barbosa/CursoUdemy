//funcoes factory

function criaPessoa(nome, sobrenome, a, p){
    return {
        nome,
        sobrenome,
        //getter
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        },
        //setter
        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },
        fala: function(assunto){
            return `${this.nome} está falando sobre ${assunto}`;
        }, 
        altura: a,
        peso: p,
        //getter
        get imc(){
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}
const p1 = criaPessoa('Rodrigo', 'Barbosa', 1.90, 82);
console.log(p1.imc);
const p2 = criaPessoa('Maria', 'Joaquina', 1.60, 42);
// console.log(p1.fala('javascript'))
console.log(p2.fala('falando sobre JS'));
console.log(p1.nome);
console.log(p1.nomeCompleto);

p2.nomeCompleto = 'Joao Oliveira Silva';
console.log(p2.nomeCompleto);
console.log(p2.nome);
console.log(p2.sobrenome);
console.log(p2.fala('porra nenhuma'))