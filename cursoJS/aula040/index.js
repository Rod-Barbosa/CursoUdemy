// break e Continue

const numeros = [1,2,3,4,5,6,7,8,9];

for (let numero of numeros) {
    if(numero === 2){       //continue serve pra pular
        continue;           //vai pular o 2
    }
    if (numero === 5) continue; //pula o 5


    if(numero === 7) break;     //7 vai sair dessa porra
                                //como acao esta abaixo do 7, 7 nem vai ser logado

    console.log(numero);
}
//continue é uma putaria com while
//evita usar break ou continue com while loops