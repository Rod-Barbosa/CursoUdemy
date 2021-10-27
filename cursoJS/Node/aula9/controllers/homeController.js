exports.paginaInicial = (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome do cliente: <input type="text" name="nome"><br>
    Outro Campo: <input type="text" name="aquioutrocampo">
    <button>E agora josé?</button>
    </form>
    `);
}

exports.trataPost = (req, res) => {
    res.send('Ei sou suna nova rota de POST.')
}