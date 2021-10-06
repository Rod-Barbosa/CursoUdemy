const nome = 'Luiz Otávio';
console.log(nome[0]);

//              0       1           2
const alunos = ['Luiz', 'Maria', 'João'];
console.log(alunos);
console.log(alunos[2]);

alunos[0] = 'Eduardo';
alunos[3] = 'Luiza';
alunos[alunos.length] = 'Rodrigo';
console.log(alunos);

alunos.push('Otávio');          //mete atrás
alunos.unshift('Fábio');        //mete na frente
alunos.unshift('Alexandre');       
alunos.pop();                   //remove do final
const removido = alunos.shift() //remove do início
delete alunos[1];               //deixa índice 1 undefined
console.log(alunos[50]);        //retuorna undefined pq alunos[50] nao existe
                                //undefined não é erro
console.log(alunos.slice(0, 3));

alunos[1] = 'Pedro';

console.log(alunos);
console.log(typeof alunos);             //object
console.log(alunos instanceof Array);   //true