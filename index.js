const createHeader = function (message, symbol, iterationCount) {
  //   let concatenatedSymbols = "";
  //   for (let i = 0; i < iterationCount; i++) {
  //     concatenatedSymbols += symbol;
  //   }

  console.log("\n" + symbol.repeat(iterationCount) + " " + message + " " + symbol.repeat(iterationCount));
};

// 1) Definizione di funzione (salvata in memoria)
createHeader("Definizione di funzione", "#", 15);

function greet() {
  // istruzioni da eseguire
  console.log("Ciao a tutti Epicoders!");
  console.log("Stiamo imparando a creare le funzioni!");
  console.log("Entro stamattina le saprete creare tutti!");
}

createHeader("Esecuzione di funzione", "!", 5, 600);
createHeader("Esecuzione di funzione", "!", 5);
// 2) Invocare (eseguire) la funzione
// greet();
// greet();
greet();

// function findMassFromCrew() {}

let counter = 0;
createHeader("Parametri", ">>", 35);

function sayHiTo(str, num) {
  if (str) {
    // str = 30; num = Antonio;
    console.log("Ciao " + (num + 1) + " " + str + " " + counter); // Ciao Antonio130
    counter++;
  } else {
    console.log("Non hai passato un nome valido");
  }
}

// sayHiTo();
// name = "Omar";
// sayHiTo();
// name = "Antonio";
// sayHiTo();
// name = "Luca";
// sayHiTo();
// console.log(name);

sayHiTo();
sayHiTo("Antonio", 30);
sayHiTo("Luca", 22);
sayHiTo("Stefano", 19);

const addTenVoid = function (num) {
  let result = num + 10;

  console.log(result);
};

addTenVoid(10);

const addTen = function (num) {
  let result = num + 10;

  return result;
};

let computedResult = addTen(1) * 2;
let computedResult2 = addTen(10);
let computedResult3 = addTen(20);

// console.log("questo è il risultato " + computedResult);
// console.log("questo è il risultato " + computedResult2);
// console.log("questo è il risultato " + computedResult3);

const arrOfNums = [2, 3, 0, 29, 100];
const arrOfNums2 = [21, 2, 100, 90, 9];
console.log("\n");

const cycleArr = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    const foundNum = arr[i];

    if (foundNum === 0) {
      continue;
    }

    if (foundNum === 100) {
      return;
    }

    console.log(arr[i]);
  }

  console.log("last in function");
};

cycleArr(arrOfNums);

console.log("\n");
cycleArr(arrOfNums2);

createHeader("Arrow functions", ">>", 35);

const cycleArrAsArrow = arr => {
  for (let i = 0; i < arr.length; i++) {
    const foundNum = arr[i];

    if (foundNum === 0) {
      continue;
    }

    if (foundNum === 100) {
      return;
    }

    console.log(arr[i]);
  }

  console.log("last in function");
};

const arrowFunction = num => {
  return num + 3;
};

const arrowFunctionConcise = num => (num ? num + 3 : "fornisci un numero");

console.log(arrowFunctionConcise());

const _result = arrowFunction(2);

console.log(_result);

// const capitalizeFirst = string => {
//   const words = string.split(" ");
//   //   console.log("Array di parole", words);

//   let wordsCapitalized = "";

//   for (let i = 0; i < words.length; i++) {
//     const word = words[i];

//     const firstLetter = word.charAt(0).toUpperCase();
//     const otherLetters = word.slice(1);
//     const capitalized = firstLetter + otherLetters;

//     if (i === 0) {
//       wordsCapitalized = capitalized;
//     } else {
//       wordsCapitalized = wordsCapitalized + " " + capitalized;
//     }
//   }

//   console.log(wordsCapitalized);
// };
const capitalizeFirst = string => {
  const words = string.split(" ");
  //   console.log("Array di parole", words);

  let wordsCapitalized = [];

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    const firstLetter = word.charAt(0).toUpperCase();
    const otherLetters = word.slice(1);
    const capitalized = firstLetter + otherLetters;

    wordsCapitalized.push(capitalized);
  }

  console.log(wordsCapitalized.join(" "));
};

capitalizeFirst("epicode is awesome!");
capitalizeFirst("i didn't know that!");

const getRandomElem = arr => {
  const random = Math.floor(Math.random() * arr.length);

  console.log("random num", random);
  return arr[random];
};
const arrayOfLetters = "Scomponiamo queste lettere".split("");
console.log(arrayOfLetters);
console.log(getRandomElem(arrayOfLetters));
