'use strict';
const inputNumberRef = document.querySelector('.input_task4');
const inputButtonCancel = document.querySelector('.task-four_cancel');
const inputButtonOk = document.querySelector('.task-four_ok');
inputButtonCancel.addEventListener('click', () => {
  alert('Отменено пользователем!');
});
inputButtonOk.addEventListener('click', () => {
  let credits = 23580;
  const pricePerDroid = 3000;
  let numberOfDroid = inputNumberRef.value;
  console.log(numberOfDroid);

  if (numberOfDroid * pricePerDroid <= credits) {
    let totalPrice = numberOfDroid * pricePerDroid;
    let accountBalance = credits - totalPrice;
    alert(
      `Вы купили ${numberOfDroid} дроидов,на сумму ${totalPrice} кредитов, на счету осталось ${accountBalance} кредитов.`,
    );
  } else if (numberOfDroid * pricePerDroid > credits) {
    alert('На счету недостаточно кредитов.');
  }
});

// Задача сделаная согласно тз

// let credits = 23580;
// const pricePerDroid = 3000;
// const numberOfDroid = prompt(`Какое количество дроидов желаете приобрести? Цена ${pricePerDroid} кредитов/шт.`);

// if (numberOfDroid == null) {
//   message = 'Отменено пользователем!';
//   alert(message);
// } else if (numberOfDroid * pricePerDroid <= credits) {
//   let totalPrice = numberOfDroid * pricePerDroid;
//   let accountBalance = credits - totalPrice;
//   message = `Вы купили ${numberOfDroid} дроидов,на сумму ${totalPrice} кредитов, на счету осталось ${accountBalance} кредитов.`;
//   alert(message);
// } else if (numberOfDroid * pricePerDroid > credits) {
//   message = `На счету недостаточно кредитов.`;
//   alert(message);
// }
