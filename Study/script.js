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
  console.log(numberCoins);
})