//valor por referencia
                //0           1          2        3       4           5
const nomes = ['Eduardo', 'Maria', 'Joao', 'Ricardo', 'Antonio', 'Rosana'];

nomes[2] = 'Zeca';
console.log(nomes);
delete nomes[1];
console.log(nomes);

const nomes2 = new Array('Jorge', 'Bem', 'Jor')
console.log(nomes2)

const novo = nomes  //passou por referencia
novo.pop();
console.log(nomes); //muda original

const novo2 = [...nomes]; //passou por value
console.log(novo2)
novo2.pop();

console.log(nomes)  //nao muda original

console.log(nomes.length);
const removido = nomes.pop();
console.log(nomes, removido);

const removido2 = nomes.shift();
console.log(nomes, removido2)

nomes.push('Rodrigo')       //mete atras
nomes.unshift('Wallace')    //mete na frente

console.log(nomes)

const novo11 = nomes.slice(0,2);    //pega do comeco
console.log(novo11);
const novo12 = nomes.slice(1,-1);   //pega de tras pra frente
console.log(novo12);

const string = 'Luiz Inacio Lula DaSilva'.split(' ');
console.log(string);
const array = string.join(', ');
console.log(array);

