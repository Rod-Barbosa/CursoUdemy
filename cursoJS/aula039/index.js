// While e Do While - Estrutura de repeticao
const nome = 'Rodrigo'

let controle = 0;

while (controle <= 10) {
//    console.log(controle);
    controle++;     //nao pode esquecer pra nao ficar em infinite loop
}
//console.log('vida que segue')

//--------------------------

function random (min, max){
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = random(1, 50);

while (rand !== 10){
    rand = random(min, max);
    console.log(rand);
}
console.log('sai do while')
do {
    rand = random(min, max);
    console.log(rand);
} while (rand !== 10);
console.log('sai do do while')

