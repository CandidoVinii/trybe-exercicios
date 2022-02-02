// Exercicio 2 - Variaveis.

const myName ="Vinicius";
const birthCity="Barra do Piraí";
let birthYear="2000";

birthYear = 2030;

//birthCity = Rio de Janeiro; *O erro acontece pois não conseguimos mudar a variável de uma const*

console.log(myName, birthCity, birthYear)


// Exercicio 2 - Tipos primitivos.

const base= 5;
const height= 8;
const area = base * height;
const perimeter = (base * 2) + (height * 2)

console.log(base, height, area, perimeter);


// Exercicio 3 - If/else

const nota = 50;

if(nota >= 80){
    console.log("Parabéns, você foi aprovada(o)!")
}else if (nota <= 80 && nota >= 60){
    console.log("Você está na nossa lista de espera")
}else{
    console.log("Você foi reprovado!")
}