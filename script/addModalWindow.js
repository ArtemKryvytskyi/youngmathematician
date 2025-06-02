import { creatingStudent } from "./creatingStudent.js";
import { creatingButtonStudy } from "./creatingButtonStudy.js";
export function addModalWindow() {
  const newModalWindow = document.createElement('div');
  newModalWindow.innerHTML = `
  <div class="upload-container">
      <div class="preview" id="preview"></div>
      <span id="close" class="close">&times;</span>
      <h2 id="upload">Set a goal for the student</h2>
      <p>Upload a motivational picture</p>
      <form id="uploadForm" class="uploadForm">
        <input type="file" id="fileInput" accept="image/*">
        <br>
        <!-- <button type="submit">Upload</button> -->
      </form>
      <h2>Set the required number of coins</h2>
      <div class="upload-tasks">
        <p>Number of coins</p>
        <img src="./img/coin_pig.png" class="coin-pig">
        <input type="text" id="parantScore" >
        <button class ="button-apply">Apply</button>
      </div>
      <p>one correctly solved example is 1 coin</p>
      <hr>
      <p>if you want to close this window, click on an empty space.</p>
    </div>`
  newModalWindow.classList.add('modal-parant');
  // Находим контейнер, куда вставить
  const container = document.querySelector('body');
  // Вставляем элемент (например, в конец)
  container.appendChild(newModalWindow);
  //загрузка картинки
  let imgMotivational = ""
  fileInput.addEventListener('change', () => {
    preview.innerHTML = '';
    const file = fileInput.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = document.createElement('img');
        img.id = "imgmotivational"
        img.src = e.target.result;
        imgMotivational = e.target.result;
        preview.appendChild(img);
      };
      reader.readAsDataURL(file);
    }
  });
  //работаю с кнопкой "применить" родительское окно
  const buttonApply = document.querySelector(".button-apply");
  buttonApply.addEventListener("click", () => {
    creatingStudent(imgMotivational);
  })
  const modal = document.querySelector(".modal-parant");
  const btn = document.querySelector(".close")
  btn.addEventListener('click', () => {
    modal.remove();
    creatingButtonStudy();
  })
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.remove();
      creatingButtonStudy();
    }
  });
}