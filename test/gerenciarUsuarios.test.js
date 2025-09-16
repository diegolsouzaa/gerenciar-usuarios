const { retonarUsuarios, adicionarNovoUsuario } = require('../src/gerenciarUsuarios')
const { expect } = require('chai')

describe('testa da funcao adicionar usuario', function(){

    it('Deve inserir um nome na lista de usuarios', function(){

        adicionarNovoUsuario({nome: 'diego', email: 'diego@email.com'});

        const listaDeUsuarios = retonarUsuarios();
        //expect(listaDeUsuarios).to.include(nome);

        // acessar o ultimo item da lista
        expect(listaDeUsuarios.at(-1)).to.eql({
            nome: 'diego', 
            email:'diego@email.com'});
    })

})