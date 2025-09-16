//const usuarios = ['matheus', 'marcos', 'lucas', 'joao'];

const usuarios = [
    {nome: 'matheus', email: 'matheus@email.com'},
    {nome: 'marcos', email: 'marcos@email.com'},
    {nome: 'lucas', email: 'lucas@email.com'},
    {nome: 'joao', email: 'joao@email.com'}

];

function somarIdades(){
    usuarios.forEach( function(){
    });

}

function retonarUsuarios(){
    return usuarios;
}

function adicionarNovoUsuario(usuario){
    usuarios.push(usuario)

}

module.exports = {
    retonarUsuarios,
    adicionarNovoUsuario
}