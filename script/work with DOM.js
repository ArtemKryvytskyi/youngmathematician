import { CreatingTask } from './creating a task.js';
import { checkAnswer } from './check answer.js';

// console.log(CreatingTask());
let arrOfExamples = CreatingTask();
let example = 0;

export function creatingExample() {
  const scriptElement = document.querySelector('script');
  const button = document.createElement('button');
  button.setAttribute('type', 'button');
  button.classList.add('btn');
  button.textContent = 'I want an example of addition';
  scriptElement.parentNode.insertBefore(button, scriptElement);
  button.addEventListener('click', () => {
    if (document.querySelector(".divAnswer")) {
      let divAnswer = document.querySelector('.divAnswer');
      divAnswer.remove();
    }
    button.remove();
    const divExample = document.createElement('div');
    divExample.classList.add('divExample');
    // написать изменение примеров
    divExample.innerHTML = "<p>" + `${arrOfExamples[example]}= ` + "</p>";
    if (example < 9) { example++ } else { example = 0; arrOfExamples = CreatingTask() };
    scriptElement.parentNode.insertBefore(divExample, scriptElement);
    const inputAnswer = document.createElement('input');
    divExample.appendChild(inputAnswer);
    const buttonCheck = document.createElement('button');
    buttonCheck.setAttribute('type', 'button');
    buttonCheck.classList.add('btn');
    buttonCheck.textContent = 'Сheck my answer';
    scriptElement.parentNode.insertBefore(buttonCheck, scriptElement);
    buttonCheck.addEventListener('click', () => {
      let exampleFromTegP = document.querySelector("p").innerHTML;
      let userSresponse = document.querySelector("input").value;
      console.log(exampleFromTegP);
      console.log(userSresponse);
      checkAnswer(exampleFromTegP, userSresponse, example, divExample, scriptElement);
      buttonCheck.remove()
    });
  });
}
creatingExample();

// export function changingExample() {
//   const button = document.querySelector('button');
//   button.addEventListener('click', () => {

//   });
//   creatingExample();
// }

// creatingExample();