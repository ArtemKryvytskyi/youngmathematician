import { creatingStudent } from "./creatingStudent.js";
export function addModalWindow() {
  const newModalWindow = document.createElement('div');
  newModalWindow.innerHTML = `
  <div class="upload-container">
      <div class="preview" id="preview"></div>
      <h1 id="upload">Motivational Picture</h1>
      <form id="uploadForm" class="uploadForm">
        <input type="file" id="fileInput" accept="image/*">
        <br>
        <!-- <button type="submit">Upload</button> -->
      </form>
      <div class="upload-tasks">
        <p>Number of coins</p>
        <img src="./img/coin_pig.png" class="coin-pig">
        <input type="text" id="parantScore" >
        <button class ="button-apply">Apply</button>
        
      </div>
      <p>one correctly solved example is 1 coin</p>
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
}