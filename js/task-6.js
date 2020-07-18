'use strict';
const total = 0;

do {
  const input = prompt('Введите число');

  if (input === null) {
    alert(`Отменено пользователем`);
    break;
  }

  input = Number(input);

  if (Number.isNaN(input)) {
    alert(`Ошибка ввода! Введите пожалуйста число`);
    continue;
  }
  total += input;
} while (true);

alert(`Общая сумма чисел равна ${total}`);
