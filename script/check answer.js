// 1. Следим за кнопкой. Кнопка нажата.
// 2. получить строку с примером и ответ пользователя.
// 3. проверить решение и ответить пользователю.
// 4. под ответом кнопка "хочу пример"
// 5. выдать следующий пример из массива.
import { creatingExample } from './work with DOM.js';

export function checkAnswer(exampleFromTegP, userSresponse, example, divExample, scriptElement) {
  const arrNumbers = exampleFromTegP.match(/-?\d+/g).map(Number);
  divExample.remove();
  const divAnswer = document.createElement('div');
  divAnswer.classList.add('divAnswer');
  scriptElement.parentNode.insertBefore(divAnswer, scriptElement);
  if (arrNumbers[0] + arrNumbers[1] == userSresponse) {
    console.log("Ok");
    divAnswer.innerHTML = "<p>" + "OK, You're right!!!" + "</p>";
    divAnswer.innerHTML += "<img src='./img/pngwing.com.png' height='200px' width='200px'>";

  } else {
    console.log("The answer is wrong")
    divAnswer.innerHTML = "<p>" + "Oh No, it's a mistake." + "<img src='./img/pngsad.com.png' height='100px' width='100px'>" + "</p>";
    // divExample.innerHTML += 
    divAnswer.innerHTML += "<p>" + "Try the following example!" + "<img src='./img/TRY.com.png' height='100px' width='150px'>" + "</p>";
    //
  }
  if (example < 10) {
    creatingExample();
  }
}
