let openBtn = document.querySelector('.btn');
let closeBtn = document.querySelector('.closeModal');
let modal = document.querySelector('.modal-container');

openBtn.addEventListener('click', (e) => {
  e.preventDefault();
  modal.style.display = 'flex';
});

closeBtn.addEventListener('click', function (e) {
  modal.style.display = 'none';
});

// Changing card numbers

const cardInput = document.querySelector('#card-number');
const mainCardNumber = document.querySelector('.card-number');

const nameInput = document.querySelector('#name');
const mainCardName = document.querySelector('.name');

const cvcInput = document.querySelector('#cvc-input');
const mainCardCvc = document.querySelector('#cvc');

const monthInput = document.querySelector('#month');
const mainCardMonth = document.querySelector('.month');

const yearInput = document.querySelector('#year');
const mainCardYear = document.querySelector('.year');

cardInput.addEventListener('input', () => {
  mainCardNumber.innerHTML = cardInput.value;
});

nameInput.addEventListener('input', () => {
  mainCardName.innerHTML = nameInput.value;
});

cvcInput.addEventListener('input', () => {
  mainCardCvc.innerHTML = cvcInput.value;
});
monthInput.addEventListener('input', () => {
  mainCardMonth.innerHTML = monthInput.value;
});
yearInput.addEventListener('input', () => {
  mainCardYear.innerHTML = yearInput.value;
});
