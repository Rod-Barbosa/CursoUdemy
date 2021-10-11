// 705.484.450-52 070.987.720-03

//pega os 9 digitos e multiplica por valores decrescentes

//7x    0x  5x  4x  8x  4x  4x  5x  0x
//10    9   8   7   6   5   4   3   2
//70    0   40  28  48  20  16  15  0
//soma tudo = 237

//Primeiro digito:
//11 - (237 % 11) = 5 
//Se o numero que sair daqui for mair que 9, ele vira zero

//Repete o processo, mas inclui o primeiro digito, ecomeca de 11
//7x    0x  5x  4x  8x  4x  4x  5x  0x 5x
//11    10  9   8   7   6   5   4   3   2
//77    0   45  32  56  24  20  20  0   10
//soma tudo = 284
//11- (284 %11) = 2 -> Segundo digito é 2

//agora concatena tudo e compara o CPF gerado com o CPF original

//Dicas: receba o cpf como string
// let cpf = '705.484.450-52';
// let cpfLimpo = cpf.replace(/\D+/g,'');  //regEx pra tirar tudo o que nao for digito
// const cpfArray = Array.from(cpfLimpo);
// console.log(cpfArray.reduce((ac, val) => ac + Number(val),0))

function ValidaCPF(cpfEnviado){
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function(){
            return cpfEnviado.replace(/\D+/g, '');
        }
    });
}

ValidaCPF.prototype.valida = function(){
    if(typeof this.cpfLimpo === 'undefined') return false;
    if(this.cpfLimpo.length !== 11) return false;
    if(this.isSequencia()) return false;


    const cpfParcial = this.cpfLimpo.slice(0,-2);
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial+ digito1);
    console.log(digito2);

    const novoCPF = cpfParcial + digito1 + digito2
    return novoCPF === this.cpfLimpo;
};

ValidaCPF.prototype.criaDigito = function(cpfParcial){
    const cpfArray = Array.from(cpfParcial);
    let regressivo = cpfArray.length +1;
    const total = cpfArray.reduce((ac, val) =>{
        ac += (regressivo * Number(val))
        regressivo--;
        return ac
    }, 0)
    const digito = 11 - (total % 11);
    return digito>9 ? '0' : String(digito);
}

ValidaCPF.prototype.isSequencia = function(){
    return this.cpfLimpo[0].repeat(this.cpfLimpo.length) === this.cpfLimpo;
};

const cpf = new ValidaCPF('705.484.450-52');

if(cpf.valida()){
    console.log('Cpf válido');
} else {
    console.log('Cpf inválido');
}
// cpf.valida();

//Minha solucao
// function CPFValido(string){
//     let cpfLimpo = string.replace(/\D+/g,'');
//     console.log(cpfLimpo);
//     let numSeguranca = [...cpfLimpo].slice(-2);
//     console.log(numSeguranca);
//     const cpfArray = [...cpfLimpo.slice(0,-2)].reverse();
//     console.log(cpfArray);

    
//     validacaoCPF(cpfArray, numSeguranca[0]);
//     cpfArray.shift(numSeguranca[0]);
//     console.log(cpfArray);

//     validacaoCPF(cpfArray, numSeguranca[1]);
//     return true;


// }
// const cpf1 = '705.484.450-52';
// // console.log(cpf1)
// CPFValido(cpf1);
// console.log(CPFValido(cpf1))


// function validacaoCPF(array, num){
//     let somaMults = array.reduce((acc, valor, index)=>{
//         acc += valor*(index+2);
//         return acc
//     },0)
//     return validaDigit(somaMults, num);
// }

// function validaDigit(num1, num2){
//     let digito;
//     if(11-(num1%11)===10){
//         digito = 0;
//         if(digito!==Number(num2)) return false;
//     }
//     digito = (11-(num1%11))
//     if(digito!==Number(num2)) return false;
// }

