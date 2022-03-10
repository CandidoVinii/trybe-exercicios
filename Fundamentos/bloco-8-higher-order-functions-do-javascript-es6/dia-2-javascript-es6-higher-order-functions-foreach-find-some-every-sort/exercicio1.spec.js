const authorBornIn1947 = require('./exercicio1');

describe('1- Verifica função authorBornIn1947', () => {
    test('Verifica se ao receber o array books ele retorna o autor nascido em 1947', () => {
        expect(authorBornIn1947().toString('Stephen King'));
    })
})