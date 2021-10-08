//escopo lexico
//a funcao lembra onde ela foi declarada
//e dos vizinhos dela
const nome = 'Rodrigo'

function falaNome (){   //loga Otavio
    //const nome = 'Otavio';       
    console.log(nome)
}

function usaFalaNome (){    //loga Rodrigo
    const nome = 'Otavio';
    falaNome();
}

usaFalaNome();