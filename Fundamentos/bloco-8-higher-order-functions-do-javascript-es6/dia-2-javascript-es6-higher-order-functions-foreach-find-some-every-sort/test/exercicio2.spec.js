const smallerName = require('./exercicio2');

describe('Verifica o funcionamento da função smallerName', () => {
    test('Verifica se a função retorna corretamente o menor nome dos livros', () => {
        expect(smallerName().toString('Duna'))
    })
})