// const nome = 'Rodrigo';
// const sobrenome = 'Piedade';

// const falaNome = () => nome + ' ' + sobrenome;

// // module.exports.nome = nome;
// // module.exports.sobrenome = sobrenome;
// // module.exports.falaNome = falaNome;


// exports.nome = nome;
// exports.sobrenome = sobrenome;
// exports.falaNome = falaNome;
// this.qualquerCoisa = 'O que eu quiser exportar';

// // console.log(exports)


class Pessoa {
    constructor(nome){
        this.nome = nome;
    }
}

// module.exports.nome = 'Rodrigo';
// exports.Pessoa = Pessoa;
// this.sobrenome = 'Qualquercoisa que eu quiser'

const nome = 'Rodrigo';
const sobrenome = 'Piedade';

module.exports = {
    nome, sobrenome, Pessoa
}
exports.outraCoisa = 'outra coisa'