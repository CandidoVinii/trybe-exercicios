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

//Exercicio 4 - Operadores lógicos

const currentHour = 16;
let message = '';

if(currentHour >= 22){

    message = "Não deveríamos comer nada, é hora de dormir";

}
else if (currentHour >= 18 && currentHour <= 22){
    message = "Rango da noite, vamos jantar :D";
}
else if (currentHour >= 14 && currentHour <= 18){
    message = "Vamos fazer um bolo pro café da tarde?";
}
else if (currentHour >= 11 && currentHour <= 14){
    message = "Hora do almoço!!!";
}
else if (currentHour >= 4 && currentHour <= 11){
    message = "Hmmm, cheiro de café recém passado";
}

    console.log (message)

// Exercicio 4.1 - Operador NOT

let weekDay = 'segunda-feira'

if(weekDay === 'segunda-feira' || weekDay === 'terça-feira' || weekDay === 'quarta-feira' || weekDay === 'quinta-feira' || weekDay === 'sexta-feira'){
    console.log("Oba, mais um dia de aprendizado na Trybe >:D")
}else {
    console.log ("FINALMENTE, descanso merecido UwU")
}