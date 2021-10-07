// try{
//     //executa quando nao ha erro
//     console.log('abri um arquivo');
//     console.log('Manipulei um arquivo e deu gerou erro');
//     console.log(a);
//     console.log('Fechei o arquivo');
// } catch(e) {
//     //executa quando ha erros
//     console.log(e);
// } finally {
//     //sempre executa
//     console.log('FINALLY: Eu sempre sou executado');
// }

function retornaHora(data) {
    if(data && !(data instanceof Date)){
        throw new TypeError('Esperando intância de Date');
    }

    if(!data){ data = new Date();}

    return data.toLocaleTimeString('pt-Br', {
        hour12: false
    });
}

try {
    const data = new Date('02-02-1972 12:58:12');
    const hora = retornaHora();
    console.log(hora)
} catch(e){
    //tratar erro
    //console.log(e);
} finally {
    console.log('Tenha um bom dia');
}