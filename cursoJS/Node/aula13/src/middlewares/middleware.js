exports.middlewareGlobal = (req, res, next) => {
    next();
}

exports.outroMiddleware = (req, res, next) => {
    //console.log('sou seu outro middleware')
    next();
}

// };
// module.exports = (req, res, next) => {
//     // if(req.body.cliente) {
//     //     req.body.cliente = req.body.cliente.replace('Miranda', 'NÃO use Miranda')
//     //     console.log();
//     //     console.log(`Vi que vc postou ${req.body.cliente}`);
//     //     console.log();
//     // }
//     next();
// }