//closure
//Global
function retornaFuncao(nome){
    return function(){
        return nome;
    }
}

const funcao = retornaFuncao('Rodrigo');
const funcao2 = retornaFuncao('Joao');
console.log(funcao)
console.log(funcao2)
console.dir(funcao);
console.log(funcao(), funcao2());