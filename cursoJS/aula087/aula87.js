function rand(max, min){
    max *= 1000;
    min *= 1000;
    return Math.floor(Math.random() * (max-min) + min)
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

// Promise.all Promise.race Promise.resolve Promise.reject
const promises = [
    //'Primeiro valor',         //semrpe vai ganhar a race, pq race retorna o primeiro
    esperaAI('Promise 1', rand(1,5)),
    esperaAI('Promise 2', rand(1,5)),
    esperaAI('Promise 3', rand(1,5)),
    //esperaAI(1000, rand(1,5)),        //pode passar 10 promessas que passam, vai empacar na que deu erro
    //'Outro valor'             //comentou o item 1? esse daqui sempre ganha pq já é uma promise que deu certo
];

Promise.all(promises)
.then(function(valor){
    console.log(valor)
})
.catch(function(erro){
    console.log(erro)
});

//race
Promise.race(promises)
.then(function(valor){
    console.log(valor)
})
.catch(function(erro){
    console.log(erro)
});

function baixaPagina(){
    const emCache = true;

    if(emCache){
        return Promise.resolve('Pagina em caChe');
    } else {
        return esperaAI('Baixa a pagina', 3000)
    }
}

baixaPagina()
.then(dadosPagina=>{
    console.log(dadosPagina)
})
.catch(e=> console.log(e))