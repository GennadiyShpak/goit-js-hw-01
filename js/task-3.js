'use strict';
const inputPassRef = document.querySelector('.input_task3');
const buttonOkRef = document.querySelector('.task-three_ok');
const buttonCancelRef = document.querySelector('.task-three_cancel');

buttonCancelRef.addEventListener('click', () => {
  alert('Отменено пользователем!');
});
buttonOkRef.addEventListener('click', () => {
  let message;
  const ADMIN_PASSWORD = inputPassRef.value;

  if (ADMIN_PASSWORD == 'jqueryismyjam') {
    message = 'Добро пожаловать!';
    alert(message);
  } else if (ADMIN_PASSWORD !== 'jqueryismyjam') {
    message = 'Доступ запрещен, неверный пароль!';
    alert(message);
  }
});

// Код согласно тз!!!!!!!!!!!!!!

// let message;
// const ADMIN_PASSWORD = prompt('');

// if (ADMIN_PASSWORD == null) {
//   message = 'Отменено пользователем!';
//   alert(message);
// } else if (ADMIN_PASSWORD == 'jqueryismyjam') {
//   message = 'Добро пожаловать!';
//   alert(message);
// } else if (ADMIN_PASSWORD !== 'jqueryismyjam') {
//   message = 'Доступ запрещен, неверный пароль!';
//   alert(message);
// }
