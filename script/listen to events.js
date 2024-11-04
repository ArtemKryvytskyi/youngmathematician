//тут взаимодействие с страницей
import { creatingTasksForUser } from "./creatingTasksForUser.js";
import { arrOfExamplesAll } from "./array of examples up to 10.js";
import { arrayOfexamplesUser } from "./creatingExampleForUser.js";

const buttonAddition = document.getElementById('+');
const buttonSubtraction = document.getElementById('-');
const buttonMultiplication = document.getElementById('*');
const buttonDivision = document.getElementById('/');

let getArrOfExamplesUser = arrayOfexamplesUser;// для повторного запуска.

buttonAddition.addEventListener('click', () => {
  const mathematical_sign = "+";
  getArrOfExamplesUser(mathematical_sign);
  const divButton = document.querySelector(".button");
  divButton.remove();
});

buttonSubtraction.addEventListener('click', () => {
  const mathematical_sign = "-";
  getArrOfExamplesUser(mathematical_sign);
  const divButton = document.querySelector(".button");
  divButton.remove();
});

buttonMultiplication.addEventListener('click', () => {
  const mathematical_sign = "*";
  getArrOfExamplesUser(mathematical_sign);
  const divButton = document.querySelector(".button");
  divButton.remove();
});

buttonDivision.addEventListener('click', () => {
  const mathematical_sign = "/";
  getArrOfExamplesUser(mathematical_sign);
  const divButton = document.querySelector(".button");
  divButton.remove();
});














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
