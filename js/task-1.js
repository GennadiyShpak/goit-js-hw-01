('use strict');

let costRef = document.querySelector('.task-one');
const buttonRef = document.querySelector('.task-one');
buttonRef.addEventListener('click', function () {
  const name = 'Генератор защитного поля';
  let price = 1000;

  console.log(`Выбран «${name}», цена за штуку ${price} кредитов`);

  price = 2000;

  console.log(`Выбран «${name}», цена за штуку ${price} кредитов`);
});
