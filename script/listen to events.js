//тут взаимодействие с страницей
// import { creatingTasksForUser } from "./creatingTasksForUser.js";
// import { arrOfExamplesAll } from "./array of examples up to 10.js";
import { arrayOfexamplesUser } from "./creatingExampleForUser.js";
// import { student } from "../Study/script.js";



const buttonAddition = document.getElementById('+');
const buttonSubtraction = document.getElementById('-');
const buttonMultiplication = document.getElementById('*');
const buttonDivision = document.getElementById('/');
const buttonLearnChild = document.querySelector('label');

let getArrOfExamplesUser = arrayOfexamplesUser;// для повторного запуска.

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const closeBtn = document.getElementById("close");

  // Показываем модальное окно при загрузке страницы
  modal.style.display = "flex";

  // Закрываем модальное окно при клике на крестик
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Закрываем модальное окно при клике вне его
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});

//сообщение в телеграм
// const token = "7096847185:AAFb6KAwH9q1G0Xtd75uMjilvA7Httz0DTg";
// const chatId = "2068241986";
// const message = "Привет, меня запустили";

// fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
//   method: "POST",
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify({
//     chat_id: chatId,
//     text: message
//   })
// })
//   .then(response => response.json())
//   .then(data => console.log("Успех:", data))
//   .catch(error => console.error("Ошибка:", error));


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

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const closeBtn = document.getElementById("close");

  // Показываем модальное окно при загрузке страницы
  modal.style.display = "flex";

  // Закрываем модальное окно при клике на крестик
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Закрываем модальное окно при клике вне его
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});

buttonRegistration.addEventListener('click', () => {
  window.location.href = "Study/studyPage.html";
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
