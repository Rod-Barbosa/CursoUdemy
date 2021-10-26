import GeraCPF from './modules/GeraCPF';
import GeraSenha from './modules/GeraSenha';


import './assets/css/style.css';




document.querySelector("#gerarSenha").addEventListener("click", gerarSenha)

function gerarSenha(){
    const gera = new GeraSenha();
    const senhaGerada = document.querySelector('.senha-gerada');
    senhaGerada.innerHTML = gera.geraNovaSenha()
}