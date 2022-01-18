const btnDv = document.querySelector('.btnDv');
const btn = document.querySelectorAll('.btn');

const divText1 = document.querySelector('.divText1');
const divText2 = document.querySelector('.divText2');
const divText3 = document.querySelector('.divText3');
const divText4 = document.querySelector('.divText4');

btnDv.addEventListener('click', (e) => {
  btn.forEach((btn, i) => {
    if (
      btn.textContent === e.target.textContent &&
      !btn.classList.contains('newClass')
    ) {
      console.log(btnDv.innerHTML);
      btn.classList.add('newClass');
      i === 0
        ? divText1.classList.remove('hidden')
        : divText1.classList.add('hidden');
      i === 1
        ? divText2.classList.remove('hidden')
        : divText2.classList.add('hidden');
      i === 2
        ? divText3.classList.remove('hidden')
        : divText3.classList.add('hidden');
      i === 3
        ? divText4.classList.remove('hidden')
        : divText4.classList.add('hidden');
    } else if (
      btn.textContent === e.target.textContent &&
      btn.classList.contains('newClass')
    ) {
      btn.classList.remove('newClass');
      divText1.classList.add('hidden');
      divText2.classList.add('hidden');
      divText3.classList.add('hidden');
      divText4.classList.add('hidden');
    } else {
      btn.classList.remove('newClass');
    }
  });
});
