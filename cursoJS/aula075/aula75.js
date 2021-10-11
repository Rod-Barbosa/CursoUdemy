//new Object -> Object.prototype

const objA = {
    chaveA: 'A'
    //__proto__: Object.prototype;
};

const objB = {
    chaveB: 'B'
    //__proto__: Object.prototype;
};

const objC = new Object();
objC.chaveC = 'C';

Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);
console.log(objB.chaveA);
console.log(objC.chaveA);


function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco * (percentual / 100));
};

Produto.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual / 100));
};


const p1 = new Produto('Camiseta', 50);
p1.aumento(50)
p1.desconto(50);
console.log(p1.preco);
console.log(p1);

const p2 = {
    nome: 'Caneca',
    preco: 15
}

//console.log(p2.aumento(10)) //quebra pq nao existe aumento em p2
Object.setPrototypeOf(p2, Produto.prototype);

console.log(p2.aumento(20)) //aumento() nao retona nada, mas o preco mudou
console.log(p2)

const p3 = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42
    },
    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 420
    }
});

console.log(p3)
p3.aumento(10)
console.log(p3)