falaOi();
//Declaracao de funcao
function falaOi() {         //funcao declarada assim ocorre function hoisting
    console.log('Oie')
}

//pode chamar ela antes de declarar ou depois de declarar
//ocorre com function declaration e var
//funcoes sao objetos de primeira classe
//First-class objects
//Function expression
const souUmDado = function(){
    console.log('sou um dado')
}

//tu ta executando um dado recebido
function executaFuncao(funcao){
    console.log('vou executar a funcao abaixo:')
    funcao();
}

executaFuncao(souUmDado);



//Arrow function
const funcaoArrow = () => {
    console.log('sou uma arrow function');
}
funcaoArrow();


//Dentro de um objeto
const obj = {
    falar: function(){
        console.log('estou falando...');
    }
};
obj.falar();