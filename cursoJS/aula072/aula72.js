//getter and setter
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;

    let estoquePrivado = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,   //mostra chave
        // value: estoque,     //valor
        // writable: true,    //pode alterar valor?
        configurable: true,  //pode configurar a chave?
        get: function(){
            return estoquePrivado;
        },
        set: function(valor){
            if (typeof valor !== 'number'){
                throw new TypeError('Mensagem de erro');
            }
            estoquePrivado = valor;
        }
    });

}

function criaProduto(nome){
    return {
        get nome(){
            return nome;
        },
        set nome(valor){
            valor = valor.replace(' de Puta', '');
            nome = valor;
        }
    };
}


const p1 = new Produto('Camiseta', 20, 3);
//console.log(p1);
//p1.estoque = 'O valor que eu quero';
console.log(p1.estoque);
p1.estoque = 500;
console.log(p1.estoque)

const p2 = criaProduto('Terno');
console.log(p2);
console.log(p2.nome);
p2.nome = 'Shortinho de Puta';
console.log(p2.nome);