import { Student } from "./constructorObjectStudent.js";
import * as studentDB from "./studentDB.js";
export let student;
export function creatingStudent(imgMotivational) {
  student = new Student();
  student.id = generateSecureRandomId();
  student.imgMotivational = "./img/target.png";
  if (imgMotivational) student.imgMotivational = imgMotivational;
  student.parantScore = document.getElementById("parantScore").value;
  studentDB.openDB();
  studentDB.saveStudent(student);
  infoBoard(student)
  document.querySelector(".modal-parant").remove();
}
export function getStudentDB(get_Student) {
  student = get_Student;
  infoBoard(student)
}
function generateSecureRandomId() {
  const array = new Uint32Array(1);
  window.crypto.getRandomValues(array);
  return array[0];
}
function saveimgMotivational(imgMotivational) {
  imgMotivational.addEventListener('change', function () {
    const file = this.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (event) {
        const imageData = event.target.result;
        student.imgMotivational = imageData;
      };
    };
  });
}
export function infoBoard(student) {
  console.log("infoBord", student);
  const infoStudent = document.createElement("div");
  infoStudent.classList.add("info-student");
  infoStudent.innerHTML = `
  <img src="${student.imgMotivational}" class="imgMotivational">
  <p class="text-parantScore">${student.parantScore}</p>
  <img src="./img/gold_coins_pot.png" class="coin-pod">
  <p class="text-parantScore" id="score-all">${student.studentScoreAll}</p>
  <img src="./img/coin_pig1.png">
  <p class="text-parantScore" id="score-now">${student.studentScoreNow}</p>`
  document.querySelector('main').prepend(infoStudent);
}