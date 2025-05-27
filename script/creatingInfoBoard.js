export function creatingBattonStudy() {
  const buttonParant = document.createElement('div');
  buttonParant.classList.add("block-button");
  buttonParant.innerHTML = `
      <div class="side-button-1-wr" id = "openModalBtn">
        <label class="side-button-1" for="side-checkbox">
          <div class="side-b side-open">click if you want your child to study</div>
        </label>
      </div>`
  document.querySelector('body').prepend(buttonParant);
}