//IMC formula: peso/(altura ** 2)
function meuEscopo(){
const form = document.querySelector('.form');
const resultado = document.querySelector('#resultado');

function recebeEventoForm (evento) {
    evento.preventDefault();
    const peso = form.querySelector('#peso');
    const altura = form.querySelector('#altura');
    resultado.innerHTML = '';
    const p = criaP();
    p.classList.add('paragrafo-resultado');
    p.innerHTML = `Seu IMC é ${calIMC(peso.value,altura.value)}`;
    resultado.appendChild(p);
}

function criaP () {
    const p = document.createElement('p');
    return p;
}



function calIMC (peso, altura){
    let imc = parseFloat(peso / ((altura/100) ** 2)).toFixed(2);
    if(imc < 18.5){
        resultado.style.backgroundColor = 'green';
        return `${imc} (Abaixo do peso)`
    } else if(imc > 18.5 && imc < 24.9){
        resultado.style.backgroundColor = 'lightgreen';
        return `${imc} (Peso normal)`;
    } else if(imc > 25 && imc < 29.9){
        resultado.style.backgroundColor = '#006400';
        return `${imc} (Sobrepeso)`;
    } else if(imc > 30 && imc < 34.9){
        resultado.style.backgroundColor = 'red';
        return `${imc} (Obesidade grau 1)`
    } else if(imc > 35 && imc < 39.9){
        resultado.style.backgroundColor = '#8B0000';
        return `${imc} (Obesidade grau 2)`
    } else if(imc > 40){
        resultado.style.backgroundColor = '#B22222';
        return `${imc} (Obesidade grau 3) †`
    }
}

form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();