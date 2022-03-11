const getNamedBook = require('./exercicio3');


    describe('Verifica a funcionalidade da função getNamedBook', () => {
        it('verifica se a função retorna o nome do livro que contém 26 letras', () => {
            expect(getNamedBook()).toString('As Crônicas de Gelo e Fogo');
        })
    })