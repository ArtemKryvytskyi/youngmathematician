import { addModalWindow } from "./addModalWindow.js";
import { arrayOfexamplesUser } from "./creatingExampleForUser.js";
import { creatingBattonStudy } from "./creatingInfoBoard.js";
import { infoBoard } from "./creatingStudent.js";
import { dbExists, getAllStudents } from "./studentDB.js";
const buttonAddition = document.getElementById('+');
const buttonSubtraction = document.getElementById('-');
const buttonMultiplication = document.getElementById('*');
const buttonDivision = document.getElementById('/');
let getArrOfExamplesUser = arrayOfexamplesUser;// для повторного запуска.
dbExists('DB_YoungMathematician').then(exists => {
  // console.log(exists);
  if (exists == false) {
    creatingBattonStudy();
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
      infoBoard(get_Student[0]);
    }).catch(error => {
      console.error('Ошибка при получении студентов:', error);
    });
  }
});
const token = "7096847185:AAFb6KAwH9q1G0Xtd75uMjilvA7Httz0DTg";
const chatId = "2068241986";
let message = "Привет, меня запустили";
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
sendGeoMessage();
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