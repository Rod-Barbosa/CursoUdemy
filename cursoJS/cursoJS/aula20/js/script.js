function meuEscopo () {
    // form.onsubmit = function (evento) {
        //     evento.preventDefault();
        //     alert(1);
        //     console.log('foi enviado')
        // };
        
        // let contador = 1;
        // function recebeEventoForm (evento) {
            //     evento.preventDefault();
            //     console.log(`Form não foi enviado ${contador}`);
            //     contador++;
            // }
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function recebeEventoForm (evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        let novaPessoa = pessoaMaker(nome.value, sobrenome.value, peso.value, altura.value);
        pessoas.push(novaPessoa);


        


        resultado.innerHTML = displayPessoas(pessoas);

    }

    function pessoaMaker (nome, sobrenome, peso, altura) {
        return {
            nome,
            sobrenome,
            peso,
            altura
        };
    }

    function displayPessoas (pessoas) {
        let stringResultados = '';
        for(let i=0;i<pessoas.length;i++){
            stringResultados += `<p>${pessoas[i].nome} ${pessoas[i].sobrenome} ${pessoas[i].peso} ${pessoas[i].altura}</p> `
        }
        return stringResultados;
    }

    form.addEventListener('submit', recebeEventoForm)
}
meuEscopo();