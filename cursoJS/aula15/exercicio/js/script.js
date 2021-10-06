let numero = prompt('Digite um número:');  
numero = Number(numero);
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML = '';
texto.innerHTML += `<p>Raiz quadrada: ${numero**(1/2)}</p>`;
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}</p>`;
texto.innerHTML += `<p>${numero} É NaN: ${Number.isNaN(numero)}</p>`;
texto.innerHTML += `<p>${numero} Arredondando para baixo: ${Math.floor(numero)}</p>`;
texto.innerHTML += `<p>${numero} Arredondando para cima: ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p>${numero} Com duas casas decimais: ${numero.toFixed(2)}</p>`;

