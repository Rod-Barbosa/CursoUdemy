const express = require('express');
const app = express();

//          criar   ler     atualizar   apagar
//CRUD ->   CREATE, READ,   UPDATE,     DELETE
//          POST    GET     PUT         DELETE            
// http://meusite.com/ <- GET -> Entregue a página
// http://meusite.com/sobre <- GET -> Entregue a página /sobre
// http://meusite.com/contato <- GET -> Entregue a página /contato


 app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome do cliente: <input type="text" name="nome">
    <button>E agora josé?</button>
    </form>
    `);
 });

 app.post('/', (req, res) => {
    res.send('recebi o formulário');
 })

 app.listen(3000, () => {
    console.log('Acessar http://localhost:3000')
    console.log('Servidor executando na porta 3000')
 });

 app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato com a gente');
 })