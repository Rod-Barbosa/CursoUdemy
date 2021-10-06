//For of - estrutura de repeticao;
const nome = 'Rodrigo Piedade';

for(let i=0;i<nome.length;i++){
    console.log(nome[i]);
}

for(let i in nome){
    console.log(nome[i])
}

//nao precisa meter o array[i]
//for of manda direto o valor basta jogar i
for (let valor of nome){
    console.log(valor)
}

const letras = nome.split('');
letras.forEach(function(valor, indice, array){
    console.log(valor, indice);
});

const lugar = {
    nome: 'Praca S.Salvador',
    tamanho: 'grande pacas'
}
// for classico com iteraveis (array ou strings)
//for in - retorna indice ou chave