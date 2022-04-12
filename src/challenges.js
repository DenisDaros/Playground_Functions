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
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
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
