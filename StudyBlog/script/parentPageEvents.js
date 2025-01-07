import { arrayOfexamplesUser } from "../../script/creatingExampleForUser.js";

const fileInput = document.getElementById('fileInput');
const preview = document.getElementById('preview');
const deletForm = document.getElementById('uploadForm');
const button = document.querySelector("button");
console.log(button);

//модальное окно
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const closeBtn = document.getElementById("close");

  // Показываем модальное окно при загрузке страницы
  modal.style.display = "flex";

  // // Закрываем модальное окно при клике на крестик
  // closeBtn.addEventListener("click", () => {
  //   modal.style.display = "none";
  // });

  // Закрываем модальное окно при клике вне его
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

});

//загрузка картинки
fileInput.addEventListener('change', () => {
  preview.innerHTML = '';
  const file = fileInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = document.createElement('img');
      img.src = e.target.result;
      preview.appendChild(img);
    };
    reader.readAsDataURL(file);
  }

  deletH1.remove();
});

button.addEventListener("click", () => {
  const mathematical_sign = "*";
  arrayOfexamplesUser(mathematical_sign);
})
