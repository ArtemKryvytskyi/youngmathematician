// создаем пример.
import { checkingUserResponse } from "./checkingUserResponse.js";
import { creatingTasksForUser } from "./creatingTasksForUser.js";
import { arrOfExamplesAll } from "./array of examples up to 10.js"

let example = 0;
const returnPage = document.querySelector(".button");

export let arrayOfexamplesUser = (mathematical_sign) => {
  switch (mathematical_sign) {
    case "+":
      arrayOfexamplesUser = creatingTasksForUser(arrOfExamplesAll.ArrOfExamplesForAddition);
      creatingExampleForUser();
      return arrayOfexamplesUser;

    default:
      break;
  }
};

export function creatingExampleForUser() {
  const mainElement = document.querySelector("main");
  if (example < 10) {
    const divExample = document.createElement('div');
    divExample.classList.add('divExample');
    divExample.innerHTML = "<p>" + `${arrayOfexamplesUser[example]} = ` + "</p>";// меняется
    mainElement.appendChild(divExample);

    const inputAnswer = document.createElement('input');
    inputAnswer.addEventListener('keydown', checkForEnter);
    divExample.appendChild(inputAnswer);
    inputAnswer.focus()

    const button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.classList.add('btn');
    button.textContent = 'Сheck my answer';
    mainElement.appendChild(button);

    function checkForEnter(e) {
      if (e.keyCode == 13) {
        document.querySelector(".btn").click();
      }
    }
    const divCountingDownExamples = document.createElement('div');
    divCountingDownExamples.classList.add('CountingDownExamples');

    console.log(example);
    example++;

    if (example < 10) {
      divCountingDownExamples.innerHTML = "<span>" + `There are still ${arrayOfexamplesUser.length - example} examples to solve` + "</span>";
    } else if (example == 10) {
      divCountingDownExamples.innerHTML = "<span>" + `This is the last example` + "</span>";
    }
    mainElement.appendChild(divCountingDownExamples);

    button.addEventListener('click', () => {
      let exampleFromTegP = document.querySelector("p").innerHTML;
      let userSresponse = document.querySelector("input").value;
      divExample.remove();
      divCountingDownExamples.remove();
      button.remove()
      checkingUserResponse(exampleFromTegP, userSresponse);//mathematical_sign
    })

  } else {
    let divResultTest = document.querySelector(".result");
    divResultTest.remove();
    console.log(divResultTest);
    mainElement.appendChild(returnPage);
    example = 0;
  }
}