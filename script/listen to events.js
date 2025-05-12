//тут взаимодействие с страницей
// import { creatingTasksForUser } from "./creatingTasksForUser.js";
// import { arrOfExamplesAll } from "./array of examples up to 10.js";
import { arrayOfexamplesUser } from "./creatingExampleForUser.js";
import { addModalWindow } from "./addModalWindow.js";
import { dbExists, getAllStudents, getStudent } from "./studentDB.js";
import { getStudentDB } from "./creatingStudent.js";

const buttonAddition = document.getElementById('+');
const buttonSubtraction = document.getElementById('-');
const buttonMultiplication = document.getElementById('*');
const buttonDivision = document.getElementById('/');

let getArrOfExamplesUser = arrayOfexamplesUser;// для повторного запуска.

dbExists('DB_YoungMathematician').then(exists => {
  console.log(exists);
  if (exists == false) {
    const buttonParant = document.createElement('div');
    buttonParant.classList.add("block-button");
    buttonParant.innerHTML = `
      <div class="side-button-1-wr" id = "openModalBtn">
        <label class="side-button-1" for="side-checkbox">
          <div class="side-b side-open">click if you want your child to study</div>
        </label>
      </div>`
    document.querySelector('body').prepend(buttonParant);
    //ищу кнопку "нажми если ты хочешь"
    const buttonOpenModalWindowParant = document.getElementById("openModalBtn");
    buttonOpenModalWindowParant.addEventListener('click', () => {
      addModalWindow();
      document.querySelector('.block-button').remove();
    })

  } else {
    getAllStudents().then(get_Student => {
      console.log(get_Student[0]);  // Теперь у тебя есть массив данных
      getStudentDB(get_Student[0]);
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



// megaFirework();  // Запуск


// 