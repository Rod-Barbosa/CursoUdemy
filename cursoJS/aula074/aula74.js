//Constructor function -> molde (classe)
function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => 'ORIGINAl: ' + this.nome + ' ' + this.sobrenome;
}

Pessoa.prototype.estouAqui = 'Ahahahha'
Pessoa.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome;
}



//instancia
const pessoa1 = new Pessoa('Luis', 'O.');// <- Pessoa = Funcao construtora
const pessoa2 = new Pessoa('Maria', 'A.')

//Pessoa.prototype === pessoa1.__proto__

