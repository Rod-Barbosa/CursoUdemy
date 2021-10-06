// ? :

const pontuacaoUsuario = 999;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuario VIP' : 'Usuario normal';
console.log(nivelUsuario);

const corUsuario = null;
const corPadrao = corUsuario || 'Preta';

// if(pontuacaoUsuario >= 1000) {
//     console.log('Usuario VIP');
// } else {
//     console.log('Usuario Normal');
// }

//--------------------AULA 28--------------------------
const tresHora = 60 * 60 * 3 * 1000;     //javascript conta em milisegundos
const umDia = 60 * 60 * 24 * 1000;
const data = new Date(0 + umDia);       // 1 de janeiro de 1970 Timestamp unix ou epoca Unix
console.log(data.toString());

const hoje = new Date();
const outraData = new Date('2021-08-16 20:20:59')
console.log(outraData);
console.log(data.getDay()); //0 = Domingo, 6 = Sabado
console.log(Date.now());    //Os milisegundos desde 1970 até agora


//------------------------AULA 29------------------------

//NUNCA USE SWITCH
const diaSemana = data.getDay();
let diaSemanaTexto;

switch(diaSemana){
    case 0:
        diaSemanaTexto = 'Domingo';
        break;
    case 1:
        diaSemanaTexto = 'Segunda';
        break;
    case 2:
        diaSemanaTexto = 'Terça';
        break;
    case 3:
        diaSemanaTexto = 'Quarta';
        break;
    case 4:
        diaSemanaTexto = 'Quinta';
        break;
    case 5:
        diaSemanaTexto = 'Sexta';
        break;
    case 6:
        diaSemanaTexto = 'Sabado';
        break;
    default:
        diaSemanaTexto = '';
}

console.log(diaSemana, diaSemanaTexto);
