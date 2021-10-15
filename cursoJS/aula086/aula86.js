//Promisses
function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max-min) + min)
}

// function esperaAI(msg, tempo){
//     setTimeout(()=>{
//         console.log(msg);
//     }, tempo);
// }

// esperaAI('Frase 1', rand(1, 3));
// esperaAI('Frase 2', rand(1, 3));
// esperaAI('Frase 3', rand(1, 3));

//fazendo em ordem com callback 
// function esperaAI(msg, tempo, cb){
//     setTimeout(()=>{
//         console.log(msg);
//         if(cb) cb()
//     }, tempo);
// }

// esperaAI('Frase 1', rand(1, 3), function(){
//     esperaAI('Frase 2', rand(1, 3), function(){
//         esperaAI('Frase 3', rand(1, 3));
//     });
// });


//resolvendo com promise

function esperaAI(msg, tempo){
    return new Promise((resolve, reject)=>{
        if(typeof msg !== 'string') reject('Errou');

        setTimeout(()=>{
            resolve(msg);
        }, tempo);
    });
}

esperaAI('Conexao com BD', rand(1, 3))
.then(resposta => {
    console.log(resposta);
    return esperaAI('Buscando dados da BASE', rand(1, 3));
})
.then(resposta => {
    console.log(resposta);
    return esperaAI('Tratando os dados da BASE', rand(1, 3));
})
.then(resposta=>{
    console.log(resposta)
}).then(()=>{
    console.log('exibe dados na tela')
})
.catch( e => {
    console.log('ERRO: ', e)
})

console.log('isso aqui é exibido antes de qualquer promise')