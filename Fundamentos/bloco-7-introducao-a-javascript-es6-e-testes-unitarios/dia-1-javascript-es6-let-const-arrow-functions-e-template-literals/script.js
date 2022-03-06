const testingScope = (escopo) =>{
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