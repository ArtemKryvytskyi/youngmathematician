//создаю массив из 10 примеров.
let randomNumber = (min, max) => {
  let rNumber = (Math.floor(Math.random() * (max - min + 1)) + min);
  return rNumber;
}

export const creatingTasksForUser = (arrOfTasks) => {
  let getOfExample = (arrOfTasks) => {
    const min = 0;
    const max = 55;
    let rNumber = randomNumber(min, max);
    let example = (arrOfTasks[`${rNumber}`]);//меняеться.
    return example;
  }

  let getArrOfExemple = (arrOfTasks) => {
    let arrOfExamples = [];
    do {
      let example = getOfExample(arrOfTasks)
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
    arrOfExamples = getArrOfExemple(arrOfTasks);
  }
  while (arrOfExamples.length < 10)
  // console.log(arrOfExamples);
  return arrOfExamples
}

