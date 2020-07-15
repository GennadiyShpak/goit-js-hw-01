('use strict');
const inputTaskRef = document.querySelector('.input_task2');
const buttonRef = document.querySelector('.task-two');
buttonRef.addEventListener('click', () => {
  const ordered = Number(inputTaskRef.value);
  const total = 100;
  const zero = Number(null);
  let message;

  if (ordered === zero) {
    message = 'Нельзя заказать ноль товаров, введите корректное число товаров';
    alert(message);
  } else if (ordered > total) {
    message = 'На складе недостаточно твоваров!';
    alert(message);
  } else if (ordered <= total) {
    message = 'Заказ оформлен, с вами свяжется менеджер';
    alert(message);
  }
});
