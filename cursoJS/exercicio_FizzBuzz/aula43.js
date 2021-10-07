/*Escreva uma funcao que recebe um número e
retorne o seguinte:
Num é divisivel por 3 = Fizz
Num é divisivel por 5 = Buzz
Num é divisivel por 3 e 5 = FizzBuzz
Num NAO é divisivel por 3 e 5 = Retorna o proprio numero
Checar se o numero é realmente um numero
Use a funcao com números de 0 a 100
*/

const fizzBuzz = (num) => {
    //clean input
    if (typeof num !== 'number') return `${num} não é realmente um número`;
    if(num%3=== 0 && num%5===0) return 'FizzBuzz';
    if(num%3!==0 && num%5!==0)return num;
    if(num%3===0)return 'Fizz';
    if(num%5===0)return 'Buzz';
}

for(let i=0;i<=100;i++){
    console.log(i, fizzBuzz(i));
}
