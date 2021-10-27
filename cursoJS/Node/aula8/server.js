const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }))
//http:// /profiles/12345?campanha=googleads&nome_campanha=seila


 app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome do cliente: <input type="text" name="nome"><br>
    Outro Campo: <input type="text" name="aquioutrocampo">
    <button>E agora josé?</button>
    </form>
    `);
 });

app.get('/testes/:idUsuarios?/:parametro?', (req, res) => {
// /profiles/3
// /profiles/?chave1=valor1&chave2=valor2&cahve3=valor3
// /
   console.log(req.params);
   console.log(req.query);
   res.send(req.query.idade);
})


 app.post('/', (req, res) => {
    console.log(req.body)
    res.send(`o que você me enviou foi: ${req.body.nome} <br> 
              no outro campo você colocou: ${req.body.aquioutrocampo}`);
 })

 app.listen(3000, () => {
    console.log('Acessar http://localhost:3000')
    console.log('Servidor executando na porta 3000')
 });

 app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato com a gente');
 })