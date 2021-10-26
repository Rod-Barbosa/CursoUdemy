// const multiplicacao = require('./mod');
// console.log(multiplicacao(2, 2))

// const n = require('./mod')
// console.log(n)

// const Cachorro = require('./B/C/D/mod')
// const shiba = new Cachorro('Korra')
// shiba.latir()

// const Cachorro = require('./Z/mod2')

// const c1 = new Cachorro('Doggy');
// c1.latir()

// // .. volta uma pasta
// // . procura na mesma pasta
// // / abre a pasta
// console.log(__filename);    //-> caminho absoluto ate o arquivo atual
// // console.log(__dirname);     //-> caminho absoluto até o siretório atual

// const path = require('path');
// console.log(path.resolve(__dirname, '..', '..', 'arquivos', 'imagens'))

const Cachorro = require('./Z/mod2.js')
const c1 = new Cachorro('Doggy');
c1.latir()