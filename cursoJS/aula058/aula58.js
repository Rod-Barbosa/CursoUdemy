//funcao construtoras       retorna objetos
//factory function -> criaPessoa()
//construtora -> Pessoa (new)
function Pessoa(nome, sobrenome){
    //nao precisa de virgula
    //atributos privados: ID, metodoInterno
    const ID = 123456;

    const metodoInterno = function(){

    };

    //Atributo publico pq usa this
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function(){
        console.log(this.nome + ': sou um meeetodo');
    };
}

const p1 = new Pessoa('Rodrigo', 'Piedade');
const p2 = new Pessoa('Maria', 'Oliveira');

p2.metodo();

//new cria um novo objeto vazio, faz o this apontar pra esse obj vazio
//dai nao precisa de return em funcao construtora


console.log(p1.nome)