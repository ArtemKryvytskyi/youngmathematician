// создаем пример.
import { arrOfExamplesAll } from "./array of examples up to 10.js";
import { checkingUserResponse } from "./checkingUserResponse.js";
import { creatingTasksForUser } from "./creatingTasksForUser.js";
let example = 0;
export let arrayOfexamplesUser = (mathematical_sign) => {
  switch (mathematical_sign) {
    case "+":
      arrayOfexamplesUser = creatingTasksForUser(arrOfExamplesAll.ArrOfExamplesForAddition);
      creatingExampleForUser();
      return arrayOfexamplesUser;
    case "-":
      arrayOfexamplesUser = creatingTasksForUser(arrOfExamplesAll.ArrOfExamplesForSubtraction);
      creatingExampleForUser();
      return arrayOfexamplesUser;
    case "*":
      arrayOfexamplesUser = creatingTasksForUser(arrOfExamplesAll.ArrOfExamplesForMultiplication);
      creatingExampleForUser();
      return arrayOfexamplesUser;
    case "/":
      arrayOfexamplesUser = creatingTasksForUser(arrOfExamplesAll.ArrOfExamplesForDivision);
      creatingExampleForUser();
      return arrayOfexamplesUser;
  }
};
export function creatingExampleForUser() {
  let startTime = performance.now();
  const mainElement = document.querySelector("main");
  if (example < 10) {
    const divExample = document.createElement('div');
    divExample.classList.add('divExample');
    divExample.innerHTML = "<p id='respons'>" + `${arrayOfexamplesUser[example]} = ` + "</p>";// меняется
    mainElement.appendChild(divExample);
    const inputAnswer = document.createElement('input');
    inputAnswer.setAttribute("type", "text");
    inputAnswer.setAttribute("id", "answer");
    inputAnswer.setAttribute("pattern", "\\d*");
    inputAnswer.setAttribute("inputmode", "numeric");
    inputAnswer.addEventListener('keydown', checkForEnter);
    divExample.appendChild(inputAnswer);
    inputAnswer.focus()
    const button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.classList.add('btn');
    button.textContent = 'Click to check';
    mainElement.appendChild(button);
    function checkForEnter(e) {
      if (e.keyCode == 13) {
        document.querySelector(".btn").click();
      }
    }
    const divCountingDownExamples = document.createElement('div');
    divCountingDownExamples.classList.add('CountingDownExamples');
    example++;
    if (example < 10) {
      divCountingDownExamples.innerHTML = "<span>" + `There are still ${arrayOfexamplesUser.length - example} examples to solve` + "</span>";
    } else if (example == 10) {
      divCountingDownExamples.innerHTML = "<span>" + `This is the last example` + "</span>";
    }
    mainElement.appendChild(divCountingDownExamples);
    button.addEventListener('click', () => {
      let exampleFromTegP = document.getElementById("respons").innerHTML;
      let userSresponse = document.getElementById("answer").value;
      divExample.remove();
      divCountingDownExamples.remove();
      button.remove()
      checkingUserResponse(exampleFromTegP, userSresponse, startTime);//mathematical_sign
    })
  } else {
    location.reload();
    example = 0;
  }
}