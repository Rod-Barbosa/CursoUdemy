//Herança

//camiseta, caneca, lapis
//Abstarcao é produto
//aumento de preco e dessconto
//camiseta = cor, caneca = material

function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}
Produto.prototype.aumento = function(quantia){
    this.preco += quantia
};
Produto.prototype.desconto = function(quantia){
    this.preco -= quantia
};

function Camiseta(nome, preco, cor){
    Produto.call(this, nome, preco);
    this.cor = cor;
}

//Camiseta.prototype.constructor = Camiseta;
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;




const p1 = new Produto('Generico', 111);
const camiseta = new Camiseta('Regate', 7.5, 'Preta');
camiseta.aumento(100)   //preco vai pra 7.5 + 100
console.log(p1)
console.log(camiseta)

Camiseta.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual/100))
}


camiseta.aumento(100)   //preco dobra, ao inves de ir pra 107 + 100
console.log(camiseta)


function Caneca(nome, preco, material, estoque){
     Produto.call(this, nome, preco);
     this.material = material;
     
     Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false, 
        get: function(){
             return estoque;
         },
         set: function(valor){
             if(typeof valor !== 'number') return;
             estoque = valor
         }
     })
}
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const caneca = new Caneca('Flamengo', 13, 'plastico', 5);
caneca.estoque = 'umas stringues doidas ai';
caneca.estoque = 100;   //setter

console.log(caneca);
console.log(caneca.estoque);    //getter
console.log(camiseta);
console.log(p1);