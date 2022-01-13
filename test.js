let clearLet;
let clear = 0;

const btn = document.querySelectorAll('.btn');

const divText1 = document.querySelector('.divText1');
const divText2 = document.querySelector('.divText2');
const divText3 = document.querySelector('.divText3');
const divText4 = document.querySelector('.divText4');

function handleClick() {
  if (clear === 1) {
    clearLet.classList.remove('newClass');
    clear = 0;
  } else if (this.classList.contains('newClass')) {
    this.classList.remove('newClass');
  }
  if (!this.classList.contains('newClass')) {
    this.classList.add('newClass');
    clearLet = document.querySelector('.newClass');
    clear++;
    console.log(clear);
    if (this.textContent === 'First') {
      divText1.classList.remove('hidden');
    } else divText1.classList.add('hidden');
    if (this.textContent === 'Second') {
      divText2.classList.remove('hidden');
    } else divText2.classList.add('hidden');
    if (this.textContent === 'Third') {
      divText3.classList.remove('hidden');
    } else divText3.classList.add('hidden');
    if (this.textContent === 'Fourth') {
      divText4.classList.remove('hidden');
    } else divText4.classList.add('hidden');
  }
}

btn.forEach((e) => {
  e.addEventListener('click', handleClick);
});
