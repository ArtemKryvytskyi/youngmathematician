<<<<<<< HEAD
//для создания объекта
import { objectStudent } from "./objectStudent.js";
export const student = Object.create(objectStudent)
let pictureMotivation = String;

=======
>>>>>>> 07b5cfda2bf87d0159c02e095bf0319da47e2ef3
//загрузка изображения
const fileInput = document.getElementById('fileInput');
const preview = document.getElementById('preview');

fileInput.addEventListener('change', () => {
  preview.innerHTML = '';
  const file = fileInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = document.createElement('img');
      img.src = e.target.result;
<<<<<<< HEAD
      student.img = img;
      pictureMotivation = img;
=======
>>>>>>> 07b5cfda2bf87d0159c02e095bf0319da47e2ef3
      preview.appendChild(img);
    };
    reader.readAsDataURL(file);
  }
});

const uploadForm = document.getElementById('submit');
uploadForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Image uploaded successfully!');
});

const buttonApply = document.querySelector("button");
buttonApply.addEventListener("click", () => {
  const numberCoins = document.getElementById('numberCoins').value;
<<<<<<< HEAD
  student.score = numberCoins;
  console.log(numberCoins, pictureMotivation);
  student.id = (generateSecureRandomId());
  console.log(student);
  window.location.href = "../index.html";
})

function generateSecureRandomId() {
  const array = new Uint32Array(1);
  window.crypto.getRandomValues(array);
  return array[0];
}
=======
  console.log(numberCoins);
})
>>>>>>> 07b5cfda2bf87d0159c02e095bf0319da47e2ef3
