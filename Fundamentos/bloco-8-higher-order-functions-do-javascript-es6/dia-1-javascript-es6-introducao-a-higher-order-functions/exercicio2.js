//2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").


const verificaNumero = (myNumber, number) => myNumber === number;

const criaNumero = (myNumber, callback) => {
    const number = Math.floor((Math.random() * 5) + 1);

    return callback(myNumber, number) ? 'Seu dia de Sorte, você Ganhou!' : 'Tente novamente!';
};

console.log(criaNumero(2, verificaNumero));