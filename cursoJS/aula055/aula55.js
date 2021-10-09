//funcoes imediatas
//IIFE -> Imediatly Invoked function expression



// function qulauqerCoisa() {
    //     console.log(1111222)
    // }
    // qulauqerCoisa();



    //faz dum jeito que nem toca o escopo global

(function(idade, peso, altura){

    const sobrenome = 'Miranda'
function criaNome(nome){
    return nome + ' ' + sobrenome;
}

function falaNome(){
    console.log(criaNome('Rodrigo'))
}

falaNome();
console.log(idade, peso, altura)

})(30, 80, 1.80);
const nome = 'Qualquer coisa';