//ObjectdefineProperty() -> uma
//Object.definePropertires()  -> varias

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,   //mostra chave
        value: estoque,     //valor
        writable: false,    //pode alterar valor?
        configurable: false  //pode configurar a chave?
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: true, 
            configurable: true
        },
        preco: {
            enumerable: true,  
            value: preco,     
            writable: true,  
            configurable: true
        },
    });
}

const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 5000;
delete p1.estoque;
console.log(p1);
console.log(Object.keys(p1))
for(let chave in p1){
    console.log(chave)
}