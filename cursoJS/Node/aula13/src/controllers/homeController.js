exports.paginaInicial = (req, res) => {
    res.render('index');
    return;
}

exports.trataPost = (req, res) => {
    res.send(req.body)
    return;
}

// exports.paginaInicial = (req, res, next) => {
//     console.log('Respondendo ao cliente.')
//     res.render('index');
//     console.log(`'pagina inicial' Olha o que tem na req.session.nome ${req.session.nome}`);
//     next();
// }