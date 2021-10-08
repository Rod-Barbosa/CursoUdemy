//return 
//retorna valor
//termina funcao

function soma(a,b){
    return a + b;
}
console.log(soma(5,15))

function soma2(a,b){
    console.log(a + b)
}
soma2()

// document.addEventListener('click', function(){
//     document.body.style.backgroundColor = 'lightgreen';
// })

function criaPessoa(nome, sobrenome){
    return {
        nome,
        sobrenome
    }
}

const p1 = criaPessoa('luiz', 'otavio');
const p2 = criaPessoa('rodrigo', 'piedade');


function falaFrase(comeco){
    function falaResto(resto){
        return comeco + ' ' + resto;
    }
    return falaResto;
}

const olaMundo = falaFrase('olá');
console.log(olaMundo('mundo'))



function duplica(n){
    return n*2
}
function triplica(n){
    return n*3
}
function quadriplica(n){
    return n*4
}

console.log(duplica(2))
console.log(triplica(2))
console.log(quadriplica(2))


function criaMultiplicador (multiplicador){
    //multiplicador
    return function multiplicacao(n){
        return n * multiplicador
    };
    
}

const duplica1 = criaMultiplicador(2);
const triplica1 = criaMultiplicador(3);
const quadriplica1 = criaMultiplicador(4);

console.log(duplica1(3));
console.log(triplica1(3));
console.log(quadriplica1(3));