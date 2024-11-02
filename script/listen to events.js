//тут взаимодействие с страницей
import { creatingTasksForUser } from "./creatingTasksForUser.js";
import { arrOfExamplesAll } from "./array of examples up to 10.js";
import { arrayOfexamplesUser } from "./creatingExampleForUser.js";

const buttonAddition = document.getElementById('+');
const buttonSubtraction = document.getElementById('-');
const buttonMultiplication = document.getElementById('*');
const buttonDivision = document.getElementById('/');

let getArrOfExamplesUser = arrayOfexamplesUser;

buttonAddition.addEventListener('click', () => {
  const mathematical_sign = "+";
  getArrOfExamplesUser(mathematical_sign);
  const divButton = document.querySelector(".button");
  divButton.remove();
});

buttonSubtraction.addEventListener('click', () => {
  creatingExampleSubtraction();
});

buttonMultiplication.addEventListener('click', () => {
  creatingExampleMultiplication();
});

buttonDivision.addEventListener('click', () => {
  creatingExampleDivision();
});

// function creatingExample(arrayOfexamplesUser) {
//   // divAnswer.remove();
//   divButton.remove();
//   const divExample = document.createElement('div');
//   divExample.classList.add('divExample');
//   divExample.innerHTML = "<p>" + `${arrayOfexamplesUser[example]} = ` + "</p>";// меняется

//   if (example < 9) { example++ } else { example = 0; arrayOfexamplesUser = CreatingTask() };

//   scriptElement.parentNode.insertBefore(divExample, scriptElement);

//   const inputAnswer = document.createElement('input');
//   inputAnswer.addEventListener('keydown', checkForEnter);
//   divExample.appendChild(inputAnswer);
//   inputAnswer.focus()

//   button.textContent = 'Сheck my answer'; //меняется
//   scriptElement.parentNode.insertBefore(button, scriptElement);
//   function checkForEnter(e) {
//     if (e.keyCode == 13) {
//       document.querySelector(".btn").click();
//     }
//   }
//   const divCountingDownExamples = document.createElement('div');
//   divCountingDownExamples.classList.add('CountingDownExamples');
//   if (example >= 1) {
//     divCountingDownExamples.innerHTML = "<span>" + `There are still ${arrayOfexamplesUser.length - example} examples to solve` + "</span>";
//   } else {
//     divCountingDownExamples.innerHTML = "<span>" + `There is only one example left` + "</span>";
//   }
//   scriptElement.parentNode.insertBefore(divCountingDownExamples, scriptElement);
//   button.addEventListener('click', () => {
//     let exampleFromTegP = document.querySelector("p").innerHTML;
//     let userSresponse = document.querySelector("input").value;
//     divExample.remove();
//     divCountingDownExamples.remove();
//     button.remove()
//     checkAnswer(exampleFromTegP, userSresponse);


//   })
// }













// function creatingAnswer() {
//   const inputAnswer = document.createElement('input');
//   // divExample.appendChild(inputAnswer);
//   inputAnswer.focus()
//   inputAnswer.addEventListener('keydown', checkForEnter);

//   function checkForEnter(e) {
//     if (e.keyCode == 13) {
//       document.querySelector(".btn").click();
//     }
//   }

//   button.textContent = 'Сheck my answer'; //меняется
//   scriptElement.parentNode.insertBefore(button, scriptElement);
//   button.addEventListener('click', () => {
//     divExample.remove();
//     let exampleFromTegP = document.querySelector("p").innerHTML;
//     let userSresponse = document.querySelector("input").value;

//     checkAnswer(exampleFromTegP, userSresponse, example, divExample, scriptElement);

//     button.remove()
//   })
// }
