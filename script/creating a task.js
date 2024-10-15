import { ArrOfExamplesForAddition } from './array of examples up to 10.js';
console.log(ArrOfExamplesForAddition);

let randomNumber = (min, max) => {
  let rNumber = (Math.floor(Math.random() * (max - min + 1)) + min);
  return rNumber;
}

export const CreatingTask = () => {
  let getOfExample = () => {
    const min = 0;
    const max = 55;
    let rNumber = randomNumber(min, max);
    let example = (ArrOfExamplesForAddition[`${rNumber}`]);
    return example;
  }

  let getArrOfExemple = () => {
    let arrOfExamples = [];
    do {
      let example = getOfExample()
      if (typeof example != 'undefined') {
        arrOfExamples.push(example)
      }
    }
    while (arrOfExamples.length < 10)
    arrOfExamples = arrOfExamples.filter((item, index) => arrOfExamples.indexOf(item) === index);
    return arrOfExamples;
  }

  let arrOfExamples = 0;

  do {
    arrOfExamples = getArrOfExemple();
  }
  while (arrOfExamples.length < 10)

  return arrOfExamples
}

