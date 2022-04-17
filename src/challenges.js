// Desafio 1
function compareTrue() {
  // seu código aqui
}

// Desafio 2
function calcArea() {
  // seu código aqui
}

// Desafio 3
function splitSentence() {
  // seu código aqui
}

// Desafio 4
function concatName() {
  // seu código aqui
}

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
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
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

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
