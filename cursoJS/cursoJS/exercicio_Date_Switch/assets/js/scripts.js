const data = document.querySelector('.container h1');
const hoje = new Date();

const diaSemana = diaSemanaPt(hoje.getDay());
const dia = hoje.getDay();
const ano = hoje.getFullYear();
const mes = diaMesPt(hoje.getMonth());                    //hoje.getMonth();
const hora = zeroAEsquerda(hoje.getHours());
const minuto = zeroAEsquerda(hoje.getMinutes());

data.innerHTML = `${diaSemana}, ${dia} de ${mes} de ${ano} ${hora}:${minuto}`;

function zeroAEsquerda (num){
    return num >= 10 ? num : `0${num}`
}

function diaMesPt (hoje) {
    switch(hoje){
    case 0:
        return 'janeiro';
    case 1:
        return 'fevereiro';
    case 2:
        return 'março';
    case 3:
        return 'abril';
    case 4:
        return 'maio';
    case 5:
        return 'junho';
    case 6:
        return 'julho';
    case 7:
        return 'agosto';
    case 8:
        return 'setembro';
    case 9:
        return 'outubro';
    case 10:
        return 'novembro';
    case 11:
        return 'dezembro';
    }
}


function diaSemanaPt (hoje) {
    switch(hoje){
    case 0:
       return 'domingo';
    case 1:
        return 'segunda-feira';
    case 2:
        return 'terça-feira';
    case 3:
        return 'quarta-feira';
    case 4:
        return 'quinta-feira';
    case 5:
        return 'sexta-feira';
    case 6:
        return 'sábado';
    default:
        return '';
    }
}
