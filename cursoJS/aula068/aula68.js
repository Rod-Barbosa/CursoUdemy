//Filter + Map + Reduce

//Retorne a soma do dobro de todos os pares
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

//filtrar pares
// const pares = numeros.filter(e=>e%2===0);
// // console.log(pares);

// //dobrar valores
// const dobro = pares.map(e=>e*2)
// // console.log(dobro);

// //reduzir, somar tudo
// const soma = dobro.reduce((acc, obj)=>acc+=obj,0)
// // console.log(soma)

//tudo encadeado
const somaDobroPares = numeros
    .filter(valor => valor %2 ===0)
    .map(valor => valor * 2)
    .reduce((acc, valor) => acc + valor)

console.log(somaDobroPares)