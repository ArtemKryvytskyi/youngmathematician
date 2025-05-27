import { arrayOfexamplesUser } from "./creatingExampleForUser.js";
import { addModalWindow } from "./addModalWindow.js";
import { dbExists, getAllStudents } from "./studentDB.js";
import { infoBoard } from "./creatingStudent.js";
import { creatingBattonStudy } from "./creatingInfoBoard.js";

const buttonAddition = document.getElementById('+');
const buttonSubtraction = document.getElementById('-');
const buttonMultiplication = document.getElementById('*');
const buttonDivision = document.getElementById('/');
let getArrOfExamplesUser = arrayOfexamplesUser;// для повторного запуска.

dbExists('DB_YoungMathematician').then(exists => {
  // console.log(exists);
  if (exists == false) {
    creatingBattonStudy();
    //ищу кнопку "нажми если ты хочешь"
    const buttonOpenModalWindowParant = document.getElementById("openModalBtn");
    buttonOpenModalWindowParant.addEventListener('click', () => {
      addModalWindow();
      document.querySelector('.block-button').remove();
    })
  } else {
    getAllStudents().then(get_Student => {
      console.log();
      if (get_Student[0].parantScore <= get_Student[0].studentScoreAll) {
        deleteDatabase();
        creatingBattonStudy();
      }
      // console.log(get_Student[0]);  // Теперь у тебя есть массив данных
      infoBoard(get_Student[0]);
    }).catch(error => {
      console.error('Ошибка при получении студентов:', error);
    });
  }
  // console.log('База StudentDatabase существует?', exists);
});

//модальное окно при запуске
// document.addEventListener("DOMContentLoaded", () => {
//   const modal = document.getElementById("modal");
//   const closeBtn = document.getElementById("close");

//   // Показываем модальное окно при загрузке страницы
//   modal.style.display = "flex";

//   // Закрываем модальное окно при клике на крестик
//   closeBtn.addEventListener("click", () => {
//     modal.style.display = "none";
//   });

//   // Закрываем модальное окно при клике вне его
//   window.addEventListener("click", (event) => {
//     if (event.target === modal) {
//       modal.style.display = "none";
//     }
//   });
// });

//сообщение в телеграм
const token = "7096847185:AAFb6KAwH9q1G0Xtd75uMjilvA7Httz0DTg";
const chatId = "2068241986";
let message = "Привет, меня запустили";

// fetch('https://ipapi.co/json/')
//   .then(res => res.json())
//   .then(data => {
//     console.log(`Город: ${data.city}, Страна: ${data.country_name}, IP: ${data.ip}`);
//     message += `Город: ${data.city}, Страна: ${data.country_name}, IP: ${data.ip}`
//   });

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

async function sendGeoMessage() {
  let message = "Привет, меня запустили\n";
  try {
    const res = await fetch('https://ipapi.co/json/');
    const data = await res.json();
    message += `Город: ${data.city}, Страна: ${data.country_name}, IP: ${data.ip}`;
    const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: message
      })
    });
    const result = await response.json();
    console.log("Успех:", result);
  } catch (error) {
    console.error("Ошибка:", error);
  }
}
// sendGeoMessage();

buttonAddition.addEventListener('click', () => {
  const mathematical_sign = "+";
  getArrOfExamplesUser(mathematical_sign);
  const divButton = document.querySelector(".button");
  divButton.remove();
  document.querySelector('.block-button').remove();
});
buttonSubtraction.addEventListener('click', () => {
  const mathematical_sign = "-";
  getArrOfExamplesUser(mathematical_sign);
  const divButton = document.querySelector(".button");
  divButton.remove();
  document.querySelector('.block-button').remove();
});
buttonMultiplication.addEventListener('click', () => {
  const mathematical_sign = "*";
  getArrOfExamplesUser(mathematical_sign);
  const divButton = document.querySelector(".button");
  divButton.remove();
  document.querySelector('.block-button').remove();
});
buttonDivision.addEventListener('click', () => {
  const mathematical_sign = "/";
  getArrOfExamplesUser(mathematical_sign);
  const divButton = document.querySelector(".button");
  divButton.remove();
  document.querySelector('.block-button').remove();
});