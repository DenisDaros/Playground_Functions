// Desafio 1

// JavaScript possui um operador lógico &&, o qual recebe dois valores e retorna true se ambos os valores são verdadeiros, e retorna false se algum dos valores não o for.

// Considerando isso, implemente na função compareTrue, um código que ao receber dois parâmetros booleanos deve:

// Retornar true se ambos os valores forem verdadeiros;
// Retornar false se um ou ambos os parâmetros forem falsos.

function compareTrue(boolean1,boolean2) {
  if(boolean1===true && boolean2===true){
    return true;
  } else{
    return false;
  }
};

// Desafio 2
// Escreva uma função com o nome calcArea que receba um valor de base (chamado base) e outro de altura (chamado height) de um triângulo e retorne o cálculo da sua área.

// Lembre-se que a área de um triângulo é calculada através da seguinte fórmula: (base * altura) / 2.

function calcArea(base,altura) {
  areaTriangulo=(base * altura) / 2
  return areaTriangulo;
} 

// Desafio 3

// Escreva uma função com o nome splitSentence, a qual receberá uma string e retornará uma array de strings separadas por cada espaço na string original.

// Exemplo: se a função receber a string "go Trybe", o retorno deverá ser ['go', 'Trybe'].

function splitSentence(fraseString) {
let array=fraseString.split(" ");
return array;
}

// Desafio 4

// Escreva uma função com o nome concatName que, ao receber uma array de strings, retorne uma string com o formato 'ÚLTIMO ITEM, PRIMEIRO ITEM', independente do tamanho da array.

// Isso quer dizer que, caso o parâmetro passado para concatName seja a Array ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'], a função deverá retornar Paolillo, Lucas.

function concatName(strings) {
  let inversao=strings [strings.length-1]+","+" "+ strings[0]
  return inversao;
}

// Desafio 5

// Escreva uma função com o nome footballPoints que receba o número de vitórias (esse parâmetro deverá se chamar wins) e o número de empates (esse parâmetro deverá se chamar ties) e retorne a quantidade de pontos que o time marcou em um campeonato.

// Para tanto, considere que cada vitória vale 3 pontos e cada empate vale 1 ponto.

function footballPoints(wins,ties) {
  let pontosVitórias=3 * wins;
  let pontosEmpates=1 * ties;
  let totalPontos= pontosEmpates + pontosVitórias;
  return totalPontos;
}

// Desafio 6

// Escreva uma função chamada highestCount que, ao receber uma array de números, retorne a quantidade de vezes que o maior deles se repete.

// Exemplo: caso o parâmetro de highestCount seja uma array com valores [9, 1, 2, 3, 9, 5, 7], a função deverá retornar 2, que é a quantidade de vezes que o número 9 (maior número do array) se repete.


function highestCount(arrayNumeros){
  let maiorNumero=Math.max.apply(Math, arrayNumeros)
  let maiorNumeroRepete=0
  for(let index=0;index<arrayNumeros.length;index +=1){
    if(maiorNumero===arrayNumeros[index]){
      maiorNumeroRepete+=1
    }
  }
  return maiorNumeroRepete
}

// Desafio 7

// Imagine que existem dois gatos, os quais chamaremos de cat1 e cat2, e que ambos estão caçando um mesmo rato chamado mouse. Imagine que os animais estão em uma reta, cada um em uma posição representada por um número.

// Sabendo disso, crie uma função chamada catAndMouse que, ao receber a posição de mouse, cat1 e cat2, nessa ordem, calcule as distâncias entre o rato e cada um dos gatos, em seguida, retorne qual dos felinos irá alcançar o rato primeiro (aquele que estiver mais perto do rato).

// Exemplo: caso o gato cat2 esteja a 2 unidades de distância do rato, e cat1 esteja a 3 unidades, sua função deverá retornar "cat2".

// Caso os gatos estejam na mesma distância do rato, a função deverá retornar a string "os gatos trombam e o rato foge".

function catAndMouse(mouse,cat1,cat2) {
  let distanciaGatoRato1 = Math.abs(cat1-mouse)
  let distanciaGatoRato2 = Math.abs(cat2-mouse)
  if(distanciaGatoRato1 < distanciaGatoRato2) {
    return "cat1";
  } else if(distanciaGatoRato2 < distanciaGatoRato1) {
    return "cat2";
  } else{
     return "os gatos trombam e o rato foge";
  }
}

// Desafio 8

// Crie uma função chamada fizzBuzz que receba uma array de números e retorne uma array da seguinte forma:

// Para cada número do Array que seja divisível apenas por 3, apresente uma string "fizz";

// Para cada número do Array que seja divisível apenas por 5, apresente uma string "buzz";

// Caso o número seja divisível por 3 e 5, retorne a string "fizzBuzz";

// Caso o número não possa ser dividido por 3 nem por 5, retorne a string "bug!";
// Exemplo: caso o parâmetro seja [2, 15, 7, 9, 45], sua função deverá retornar ["bug!", "fizzBuzz", "bug!", "fizz", "fizzBuzz"].

function fizzBuzz(array) {
  let arrayStrings =[]
  for(let index = 0;index < array.length; index +=1) {
    if(array[index] % 3 === 0 && array[index] % 5 === 0){
      arrayStrings.push("fizzBuzz")
    } else if (array[index] % 5 === 0){
      arrayStrings.push("buzz")
    } else if (array[index] % 3 === 0){
      arrayStrings.push("fizz")
    } else {
      arrayStrings.push("bug!")
    }
  }
  return arrayStrings
}
// Desafio 9
// Crie duas funções: a primeira deverá se chamar encode e, ao receber uma string como parâmetro, deverá trocar todas as vogais minúsculas por números, de acordo com o formato a seguir:

// a -> 1 // e -> 2 // i -> 3 // o -> 4 // u -> 5

// Ou seja, caso o parâmetro de encode seja "hi there!", o retorno deverá ser "h3 th2r2!".

// A segunda função deverá se chamar decode e faz o contrário de encode - ou seja, recebe uma string contendo números no lugar de letras minúsculas e retornará uma string com vogais minúsculas no lugar dos números (então, caso o parâmetro de decode seja "h3 th2r2!", o retorno deverá ser "hi there!").

function encode(string) {
  let novaString = string.replace(/a/gi, '1')
  .replace(/e/gi, '2')
  .replace(/i/gi, '3')
  .replace(/o/gi, '4')
  .replace(/u/gi, '5');
return novaString; 
}

function decode(stringNumeros) {
  let novaStringNumeros = stringNumeros.replace(/1/gi, 'a')
  .replace(/2/gi, 'e')
  .replace(/3/gi, 'i')
  .replace(/4/gi, 'o')
  .replace(/5/gi, 'u');
  return novaStringNumeros;
}

// link de referência via Slack Jo nathan Souza - Turma 10 - Tribo B 

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,

};
