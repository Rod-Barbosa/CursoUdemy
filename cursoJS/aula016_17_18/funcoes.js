function saudacao(nome) {
    return `Bom dia ${nome}!`;
}

const variavel = saudacao('Rodrigo');
//console.log(variavel);
// saudacao('Maria');
// saudacao('Felipe');

function soma(x = 1, y = 1){
    const resultado = x + y;
    return resultado;
}
console.log(soma(2, 3));
// console.log(soma(3, 1));
// console.log(soma(5, 10));
// console.log(resultado);  --->vai dar merda pq resultado só existe na funcao
const resultado = soma(2, 2);
console.log(resultado);
console.log( soma('Luiz',' Otávio'));
console.log(soma(2));

const raiz = function (n) {
    return n ** (1/2)
};

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));

// const raiz = n => n ** (1/2)    da no mesmo