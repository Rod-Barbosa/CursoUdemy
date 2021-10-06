//----------------- Mais diferenças entre let e var
const verdadeira = true;

//let tem escopo de bloco { ... bloco }
//var s´ø tem escopo de funcao
let nome = 'Luiz';
var nome2 = 'Luiz';

console.log(nome, nome2);

if (verdadeira) {
    let nome = 'Otávio';
    var nome2 = 'Rogério';   //redlecarada
    console.log(nome, nome2);
    
    if(verdadeira){
        var nome2 = 'Pedro';
        let nome = 'Outra coisa';
        console.log(nome, nome2);
    }
}
console.log(nome, nome2);

var sobrenome = 'Miranda';

function falaOi () {
    var nome = 'Rodrigo';
    var lastName = 'Barbosa';
    console.log(nome, sobrenome);
}

//console.log(lastName); -> deu ruim pq lastName foi declarado dentro da funcao
falaOi();

console.log(hoisting);  //->returns undefined
                        //hoisting was declared up because of hoisting
                        //called on console.log
                        //and only defined after
var hoisting = 'hoisting is crazy'

