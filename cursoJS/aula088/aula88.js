function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAI(msg, tempo){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(typeof msg !== 'string'){
                reject('cai no erro');
                return;
            } 
            resolve(msg.toUpperCase() + ' - Passei na promise');
        }, tempo);
    });
}

// esperaAI('Fase 1', rand(0, 3))
// .then(valor=> {
//     console.log(valor);
//     return esperaAI('Fase 2', rand(0, 3))
// })
// .then(fase => {
//     console.log(fase);
//     return esperaAI('Fase 3', rand(0, 3))
// })
// .then( fase => {
//     console.log(fase)
//     return fase
// })
// .then( fase => {
//     console.log('terminamos na fase: ', fase)
// })
// .catch( e => console.log(e));

//maneira mais limpa
async function executa(){
    try {
        const fase1 = await esperaAI('Fase 1', rand(0, 3));
        console.log(fase1)
        const fase2 = await esperaAI('Fase 2', rand(0, 3));
        console.log(fase2)
        const fase3 = await esperaAI('Fase 3', rand(0, 3));
        console.log(fase3)
        console.log('terminamos na fase: ', fase3)
    } catch(e) {
        console.log(e);
    }

}

executa();

//pending       -> ainda nao deu nada
//fullfilled    -> deu bom 
//rejected      -> deu ruim
const teste2 = esperaAI('qlr coisa', 5000);
console.log(teste2)