'use strict';
let clearLet = document.querySelector('.btn');

for (let i = 0; i < 4; i++) {
  let btn = document.querySelector('.btn--');
  btn.className = 'btn--' + i;
  btn.setAttribute('onclick', "new Audio('1.mp3').play()");

  btn.addEventListener('click', function () {
    if (!btn.classList.contains('newClass')) {
      btn.classList.add('newClass');
      clearLet = btn;
    } else if (clearLet.classList.contains('newClass')) {
      clearLet.classList.remove('newClass');
      //btn.classList.add('newClass');
    } else btn.classList.remove('newClass');
  });
}
