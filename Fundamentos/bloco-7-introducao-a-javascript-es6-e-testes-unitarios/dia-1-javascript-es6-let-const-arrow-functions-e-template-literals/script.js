/*const testingScope = (escopo) =>{
    if(escopo === true){
        let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
        ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
        console.log(ifScope);
    }else{
        let elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
        console.log(elseScope);
    }
}

testingScope(false);


var oddsAndEvens = [13, 3, 4, 10, 7, 2];

const Ordena = (array) =>{
    const sort = array.sort((a,b) => a-b);
    return sort;
    
}
const sorte = Ordena(oddsAndEvens);

console.log(`Os números ${sorte} se encontram ordenados de forma crescente !`);
// será necessário alterar essa linha 😉

const fatorial = (numero) => {
    let result = 1;

    for(let index = 2; index <= numero; index += 1){
        result *= index;
    }

    return result;
}

console.log(fatorial(60))

const longestWord = text => {
    let wordArray = text.split(' ');
    let maxLength = 0;
    let result = '';

    for (const word of wordArray) {
        if (word.length > maxLength) {
            maxLength = word.length;
            result = word;
        }
    }

    return result;
}

console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"));*/

const getBtn =  document.querySelector('#btn');
const getDad = document.querySelector('#contador');
let contador = 0;

getBtn.addEventListener('click', () => {
    getDad.innerHTML = contador += 1;
})

const array = ["Android", "iOS", "Architecture", "Teach", "Run"];

const Text = (oneP) =>{
    const fun1 = paramInner => (
        `Tryber ${paramInner} aqui!
        
        Tudo bem?`
    );

    let result = `${fun1(oneP)}
    
    Minhas cinco habilidades preferidas são:`;

    array.forEach((skill, index) =>
    result = `${result}
    
    -${skill}`);

    result = `${result}
    
    #gotrybe
    `;

    return result
};

console.log(Text("Lucas"));
