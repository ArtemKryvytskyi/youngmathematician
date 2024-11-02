import { creatingExampleForUser } from "./creatingExampleForUser.js";

export let arrOfCorrectAnswers = [];
export let arrOfIncorrectAnswers = [];
let example = 0;

export function checkingUserResponse(exampleFromTegP, userSresponse) {
  let responseFromUser = exampleFromTegP + userSresponse;
  console.log(responseFromUser);

  let mainElement = document.querySelector("main");
  const divAnswer = document.createElement('div');
  divAnswer.classList.add('divAnswer');
  mainElement.appendChild(divAnswer);

  const button = document.createElement('button');
  button.setAttribute('type', 'button');
  button.classList.add('btn');

  const arrNumbers = exampleFromTegP.match(/-?\d+/g).map(Number);
  if (example < 10) {
    example++;
    if (arrNumbers[0] + arrNumbers[1] == userSresponse) {
      divAnswer.innerHTML = "<p>" + "OK, You're right!!!" + "</p>";
      divAnswer.innerHTML += "<img src='./img/pngwing.com.png' height='200px' width='200px'>";
      arrOfCorrectAnswers.push(responseFromUser);
      console.log(arrOfCorrectAnswers);
    } else if (example <= 9) {
      divAnswer.innerHTML = "<p>" + "Oh No, it's a mistake." + "<img src='./img/pngsad.com.png' height='100px' width='100px'>" + "</p>";
      divAnswer.innerHTML += "<p>" + "Try the following example!" + "<img src='./img/TRY.com.png' height='100px' width='150px'>" + "</p>";
      arrOfIncorrectAnswers.push(responseFromUser);
      console.log(arrOfIncorrectAnswers);
    } else {
      divAnswer.innerHTML = "<p>" + "Oh No, it's a mistake." + "<img src='./img/pngsad.com.png' height='100px' width='100px'>" + "</p>";
      arrOfIncorrectAnswers.push(responseFromUser);
      console.log(arrOfIncorrectAnswers);
    }
  }
  if (example < 10) {
    button.textContent = 'Following example'; //меняется 
    mainElement.appendChild(button);
    button.addEventListener('click', () => {
      divAnswer.remove();
      button.remove()
      creatingExampleForUser();
    })
  } else {
    button.textContent = 'I want to know the result'; //меняется 
    mainElement.appendChild(button);
    button.addEventListener('click', () => {
      divAnswer.remove();
      button.remove();
      createResult();

    })
  }
  function createResult() {
    let divResult = document.createElement('div');
    divResult.classList.add('result');
    divResult.innerHTML = "<div class = 'correct'>" + `${arrOfCorrectAnswers}` + "</div>";
    divResult.innerHTML += "<div class = 'incorrect'>" + `${arrOfIncorrectAnswers}` + "</div>";
    mainElement.appendChild(divResult);
    button.textContent = 'Return to the start page'; //меняется 
    mainElement.appendChild(button);
    console.log("Before click event: divResult exists?", !!divResult);
    console.log(mainElement);
    button.addEventListener('click', () => {
      let divResultTest = document.querySelector(".result");
      // console.log(divResultTest);
      // divResultTest.remove();// not working
      console.log("Before click event: divResult exists?", !!divResult);
      setTimeout(() => divResultTest.remove(), 0);
      // if (divResult) {
      //   console.log("I work");
      //   divResult.remove();
      // }
      // divResult.parentNode.removeChild(divResult)
      button.remove();
      creatingExampleForUser();
    })
  }
}
