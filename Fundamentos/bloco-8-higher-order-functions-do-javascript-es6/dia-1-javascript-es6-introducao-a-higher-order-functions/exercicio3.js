const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];


const comparaRespostas = (respostaCerta, repostaAluno) => {
    if (respostaCerta === repostaAluno){
        return 1;
    } if (repostaAluno === 'N.A'){
        return 0;
    }
    return -0.5;
};

const conta = (respostaCerta, repostaAluno, adiciona) => {
    let contador = 0;
    for(let i = 0; i < respostaCerta.length; i += 1){
        const adicionaReturn = adiciona(respostaCerta[i], respostaCerta[i]);
        contador += adicionaReturn;
    }
    return `Resultado final: ${contador} pontos`;
		
};

console.log(conta(RIGHT_ANSWERS, STUDENT_ANSWERS, comparaRespostas));