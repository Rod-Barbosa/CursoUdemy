export default class GeraSenha {
    geraNovaSenha(){
        var quantidade = document.querySelector('#quantidade-char').value;

        var numeros = document.querySelector('#numeros:checked');
        if(numeros !== null){
            numeros = document.querySelector('#numeros:checked').value;
        }

        var grandes = document.querySelector('#letras-grandes:checked');
        if(grandes !== null){
            grandes = document.querySelector('#letras-grandes:checked').value;
        }

        var pequenas = document.querySelector('#letras-pequenas:checked');
        if(pequenas !== null){
            pequenas = document.querySelector('#letras-pequenas:checked').value;
        }

        var simbolos = document.querySelector('#letras-simbolos:checked');
        if(simbolos !== null){
            simbolos = document.querySelector('#letras-simbolos:checked').value;
        }

    //edge cases
    if(quantidade<=0){
        return 'senha inválida <br>(zero caracteres)'
    }
    if(numeros === null && grandes === null && pequenas === null && simbolos === null){
        return "senha invalida <br>(nehuma checkbox)"
    }

//dicionarios
const dicPequenas = 'abcdefghijklmnopqrstuvwxyz';
const dicGrandes = 'ABCDEFGHIJKLMNOPQRSTUVWZYZ';
const dicNumeros = '0123456789';
const dicSimbolos = '~!@#$%^&*()_+}{?.,';
//array checados
var checados = '';
if(numeros !== null)checados += dicNumeros;
if(grandes !== null)checados +=dicGrandes;
if(pequenas !== null)checados += dicPequenas;
if(simbolos !== null)checados += dicSimbolos;
console.log(checados)

    var senha = ''
    for(let i = 0; i<quantidade; i++){
        senha+=checados[Math.floor(Math.random() * checados.length) ]
    }
        return senha
    }


}
