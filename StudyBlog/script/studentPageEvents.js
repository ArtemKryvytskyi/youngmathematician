//модальное окно входа страницы учиника
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