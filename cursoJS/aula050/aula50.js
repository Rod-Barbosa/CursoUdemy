//funcao definida com a palavra function tem arguments
//mesmo metendo argumentos random
function funcao(a,b,c) {
    let total = 0;
    for (let argumento of arguments){
        total += argumento;
    }
    console.log(total)
}
funcao('Valor');
funcao(1,2,3,4,5,6,7);
//executou e foda-se se tu nao fez nada com os valores passados

//acontece por causa do arguments obj
function funcao2(a,b,c,d,e,f){
    console.log(a,b,c,d,e,f);
}
funcao2(1, 2, 3);   //vai setar os valores como undefined
                    //divergiu numero d eargumentso pra num de parametros vai levar undefined

function funcao3(a,b){
    console.log(a+b)
}
funcao3(2); //retorna NaN...

function funcao4(a,b=2,c=4){
    console.log(a+b+c)
}
funcao4(2,10,20);   //32
funcao4(2,'',20);   //220
funcao4(2,0,20);    //22
funcao4(2,undefined,20);    //24 -> undefined assumiu o valor de b, eis os 2 extras na conta

function funcao5({ nome, sobrenome, idade}){
    console.log(nome, sobrenome, idade);
}
funcao5({nome: 'Rodrigo', sobrenome: 'Barbosa', idade: 33});


//rest parameter tetm que ser sempre o ultimo
function conta(operador, acumulador, ...numeros){
    for(let numero of numeros){
        if(operador === '+') acumulador+=numero;
        if(operador === '-') acumulador-=numero;
        if(operador === '*') acumulador*=numero;
        if(operador === '/') acumulador/=numero;

        console.log(numero)
    }
    console.log(acumulador)
}
conta('*',1,20, 30, 40, 50)

conta('+',1,20, 30, 40, 50)




