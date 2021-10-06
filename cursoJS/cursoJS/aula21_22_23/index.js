/*
Operadores de comparação
> maior que
>= maior que ou igual a
< menor que
<= menor que ou igual a
== igualdade
== igualdade estrita (valor e tipo)
!= diferente (valor)
!== diferente estrito (valor e tipo)
*/
const num1 = 10;            //number
const num2 = '10';          //string
const comp = num1 == num2;
console.log(comp);          //return true because of tye correction
//usa sempre o maldito triple equals
const comp2 = num1 === num2
console.log(comp2);         //return false
//----------------------------AULA 22----------------------------
/*
Operadores Lógicos
&& -> AND
|| -> OR
!  -> NOT
*/
//todas precisam ser verdadeiras pra returnar true
const expressaoAnd = true && false && true && false;

//se uma delas retornar verdadeiro, a expressao retorna verdadeiro
const expressaoOr = true || false || true || false;
console.log(expressaoAnd);
console.log(expressaoOr);


const usuario = 'Luiz';
const senha = '123456';
//usuario E senha coretor para logar
const vailogar = usuario === 'Luiz' && senha === '123456';
console.log(`Usuário vai logar? ${vailogar}`);

//! negação -> útil pro if(!var) pra ver se existe a danada da variavel
console.log(!true);
//-------------------------AULA 23------------------------------------
console.log(`Aula 23`);

//Avaliacao curto-circuito
console.log('Luiz Otávio' && 0 && 'Maria');     //retorna 0


/*                saiu disso aqui, avalia em true no Javascript
FALSY
false*
0
'' "" ``
null / undefined
NaN
*/
            //retorna sempre o primeiro valor falso
console.log('Luiz' && 'Maria' && '' && undefined);  //returna ''


// || retorna o primeiro valor verdadeiro que ele encontrou
console.log(0 || false || null || 'Rodrigo Barbosa' || true);


//se o usuario nao selecionar nada, mete vermelho
const corUsuario = null;
const corPadrao = corUsuario || 'red';

console.log(corPadrao);

const a = 0;
const b = null;
const c = 'false';
const d = false;
const e = NaN;
console.log(a || b || c || d || e); //retorna string 'false' -> c





