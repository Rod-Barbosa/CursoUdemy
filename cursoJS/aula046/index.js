//setInterval e setTimeout

function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR',{
        hour12: false
    });
}

function funcaDoInterval(){
    console.log(mostraHora());
}

const timer = setInterval(funcaDoInterval, 1000)

setTimeout(function(){
    clearInterval(timer)
}, 3000)

setTimeout(function(){
    console.log('acho que foi')
}, 5000);
