import { creatingExampleForUser } from "./creatingExampleForUser.js";
// import { evaluate } from 'mathjs';

let arrOfCorrectAnswers = [];
let arrOfIncorrectAnswers = [];
let example = 0;
let pointsForCorrectAnswer = 0;

export function checkingUserResponse(exampleFromTegP, userSresponse, startTime) {
  const endTime = performance.now();
  console.log("startTime", startTime / 1000);
  console.log("endTime", endTime / 1000)
  console.log(((endTime - startTime) / 1000).toFixed(0), "second");

  let responseFromUser = exampleFromTegP + userSresponse;

  let mainElement = document.querySelector("main");
  const divAnswer = document.createElement('div');
  divAnswer.classList.add('divAnswer');
  mainElement.appendChild(divAnswer);

  const button = document.createElement('button');
  button.setAttribute('type', 'button');
  button.classList.add('btn');

  const arrNumbers = exampleFromTegP.match(/-?\d+/g).map(Number);
  const mathematical_sign = exampleFromTegP.match(/[+\-*:]/)[0];

  let getmathematicalStandard = (mathematical_sign) => {
    switch (mathematical_sign) {
      case "+":
        return arrNumbers[0] + arrNumbers[1];
      case "-":
        return arrNumbers[0] - arrNumbers[1];
      case "*":
        return arrNumbers[0] * arrNumbers[1];
      case ":":
        return arrNumbers[0] / arrNumbers[1];
    }
  };
  const mathematicalStandard = getmathematicalStandard(mathematical_sign);
  // console.log(mathematicalStandard);
  if (example < 10) {
    example++;
    // console.log(example);
    if (mathematicalStandard == userSresponse && userSresponse !== '') {
      divAnswer.innerHTML = "<p>" + "OK, You're right!!!" + "</p>";
      divAnswer.innerHTML += "<img src='../img/pngwing.com.png' height='200px' width='200px'>";
      arrOfCorrectAnswers.push(responseFromUser);
      pointsForCorrectAnswer++;
      // console.log(arrOfCorrectAnswers);
    } else if (example <= 9) {
      divAnswer.innerHTML = "<p>" + "Oh No, it's a mistake." + "<img src='../img/pngsad.com.png' height='100px' width='100px'>" + "</p>";
      divAnswer.innerHTML += "<p>" + "Try the following example!" + "<img src='../img/TRY.com.png' height='100px' width='150px'>" + "</p>";
      arrOfIncorrectAnswers.push(responseFromUser);
      // console.log(arrOfIncorrectAnswers);
    } else {
      divAnswer.innerHTML = "<p>" + "Oh No, it's a mistake." + "<img src='../img/pngsad.com.png' height='100px' width='100px'>" + "</p>";
      arrOfIncorrectAnswers.push(responseFromUser);
      // console.log("I work!", `${example}`);
    }

  }
  // console.log(pointsForCorrectAnswer);

  if (example < 10) {
    button.textContent = 'Click and get an example';
    mainElement.appendChild(button);
  } else {
    button.textContent = 'Click and find out the result';
    mainElement.appendChild(button);
  }

  button.addEventListener('click', () => {
    divAnswer.remove();
    button.remove();
    if (example == 10) {
      createResult();
      arrOfCorrectAnswers = [];
      arrOfIncorrectAnswers = [];
      example = 0;
    } else {
      creatingExampleForUser();
    }
  })

  function createResult() {
    // console.log("I'm work")
    let divResult = document.createElement('div');
    divResult.classList.add('result');
    // divResult.innerHTML = "<div class = 'correct'>" + `${arrOfCorrectAnswers}` + "</div>";
    // divResult.innerHTML += "<div class = 'incorrect'>" + `${arrOfIncorrectAnswers}` + "</div>";
    if (pointsForCorrectAnswer == 0) {
      divResult.innerHTML =
        `<p>You got ${pointsForCorrectAnswer} points, but that's okay! Try again – you can do it!</p> ` +
        "<img src='./img/Minon if 0 points.gif'>";
    } else if (pointsForCorrectAnswer < 10) {
      divResult.innerHTML =
        `<p>You got ${pointsForCorrectAnswer} points. You’re doing great! Just a bit more, and it’ll be 10 out of 10!</p>` +
        "<img src='./img/2DV point from 0 to 10.gif'>";
    } else {
      divResult.innerHTML =
        `<p>You got ${pointsForCorrectAnswer} points. Fantastic result! 10 out of 10. Keep it up!</p>` +
        "<img src='./img/10points.gif'>"
    }
    pointsForCorrectAnswer = 0;
    mainElement.appendChild(divResult);
    button.textContent = 'Click to return to the start page';
    mainElement.appendChild(button);
  }
}



