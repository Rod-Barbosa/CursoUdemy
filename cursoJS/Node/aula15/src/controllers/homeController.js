exports.paginaInicial = (req, res) => {
    // req.session.usuario = { nome: 'Luiz', logado: true };
    console.log(req.session.usuario);
    // req.flash('info', 'Olá mundão');
    // req.flash('error', 'Jogue duro');
    // req.flash('success', 'great reino');
    // console.log(req.flash('error'), req.flash('success'), req.flash('info'));
    res.render('index');
    return;
}

exports.trataPost = (req, res) => {
    res.send(req.body)
    return;
}

