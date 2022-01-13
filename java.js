'use strict';

const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const btn4 = document.querySelector('.btn4');

const divText1 = document.querySelector('.divText1');
const divText2 = document.querySelector('.divText2');
const divText3 = document.querySelector('.divText3');
const divText4 = document.querySelector('.divText4');

//const overlay = document.querySelector('.overlay');

btn1.addEventListener('click', function () {
  btn1.classList.toggle('newClass');
  divText1.classList.toggle('hidden');
  this.setAttribute('onclick', "new Audio('1.mp3').play()");
  if (!divText2.classList.contains('hidden')) divText2.classList.add('hidden');
  if (!divText3.classList.contains('hidden')) divText3.classList.add('hidden');
  if (!divText4.classList.contains('hidden')) divText4.classList.add('hidden');
  if (btn2.classList.contains('newClass')) btn2.classList.remove('newClass');
  if (btn3.classList.contains('newClass')) btn3.classList.remove('newClass');
  if (btn4.classList.contains('newClass')) btn4.classList.remove('newClass');
});

btn2.addEventListener('click', function () {
  btn2.classList.toggle('newClass');
  divText2.classList.toggle('hidden');
  this.setAttribute('onclick', "new Audio('1.mp3').play()");
  if (!divText1.classList.contains('hidden')) divText1.classList.add('hidden');
  if (!divText3.classList.contains('hidden')) divText3.classList.add('hidden');
  if (!divText4.classList.contains('hidden')) divText4.classList.add('hidden');
  if (btn1.classList.contains('newClass')) btn1.classList.remove('newClass');
  if (btn3.classList.contains('newClass')) btn3.classList.remove('newClass');
  if (btn4.classList.contains('newClass')) btn4.classList.remove('newClass');
});

btn3.addEventListener('click', function () {
  btn3.classList.toggle('newClass');
  divText3.classList.toggle('hidden');
  this.setAttribute('onclick', "new Audio('1.mp3').play()");
  if (!divText2.classList.contains('hidden')) divText2.classList.add('hidden');
  if (!divText1.classList.contains('hidden')) divText1.classList.add('hidden');
  if (!divText4.classList.contains('hidden')) divText4.classList.add('hidden');
  if (btn2.classList.contains('newClass')) btn2.classList.remove('newClass');
  if (btn1.classList.contains('newClass')) btn1.classList.remove('newClass');
  if (btn4.classList.contains('newClass')) btn4.classList.remove('newClass');
});

btn4.addEventListener('click', function () {
  btn4.classList.toggle('newClass');
  divText4.classList.toggle('hidden');
  this.setAttribute('onclick', "new Audio('1.mp3').play()");
  if (!divText2.classList.contains('hidden')) divText2.classList.add('hidden');
  if (!divText3.classList.contains('hidden')) divText3.classList.add('hidden');
  if (!divText1.classList.contains('hidden')) divText1.classList.add('hidden');
  if (btn2.classList.contains('newClass')) btn2.classList.remove('newClass');
  if (btn1.classList.contains('newClass')) btn1.classList.remove('newClass');
  if (btn3.classList.contains('newClass')) btn3.classList.remove('newClass');
});

// const btn = document.querySelectorAll('.btn');
// const divText = document.querySelector('.divText1');

// function handleClick() {
//   this.classList.toggle('newClass');
//   this.setAttribute('onclick', "new Audio('1.mp3').play()");
//   if (this.innerHTML === 'First') divText.classList.toggle('hidden');
// }

// function newFunction() {
//   this.classList.remove('newClass');
//   divText.classList.add('hidden');
// }

// btn.forEach((button) => {
//   button.addEventListener('click', handleClick);
// });

// btn.forEach((button) => {
//   button.addEventListener('mouseout', newFunction);
// });
// let clearLet = 5;
// let btn2 = 0;

// for (let i = 0; i < 4; i++) {
//   let btn = document.querySelector('.btn--' + i);
//   //btn.className = 'btn--' + i;
//   btn.setAttribute('onclick', "new Audio('1.mp3').play()");

//   btn.addEventListener('click', function () {
//     btn.classList.toggle('newClass');
//   });
// }
//   if (!btn.classList.contains('newClass')) {
//     btn.classList.add('newClass');
//     clearLet = btn;
//     console.log(e.target);
//   } else {
//     btn.classList.remove('newClass');
//   }
// });
// } else if (clearLet.classList.contains('newClass')) {
//   clearLet.classList.remove('newClass');
//   //btn.classList.add('newClass');
// } else btn.classList.remove('newClass');
