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
      btn.classList.add('newClass');
      i === 0 ? (divText1.style.opacity = 1) : (divText1.style.opacity = 0);
      i === 1 ? (divText2.style.opacity = 1) : (divText2.style.opacity = 0);
      i === 2 ? (divText3.style.opacity = 1) : (divText3.style.opacity = 0);
      i === 3 ? (divText4.style.opacity = 1) : (divText4.style.opacity = 0);
    } else if (
      btn.textContent === e.target.textContent &&
      btn.classList.contains('newClass')
    ) {
      btn.classList.remove('newClass');
      divText1.style.opacity = 0;
      divText2.style.opacity = 0;
      divText3.style.opacity = 0;
      divText4.style.opacity = 0;
    } else {
      btn.classList.remove('newClass');
    }
  });
});
