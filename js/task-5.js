'use strict';
const inputCoutryRef = document.querySelector('.input_task5');
const inputButtonOkRef = document.querySelector('.task-five_ok');
inputButtonOkRef.addEventListener('click', () => {
  const cost;
  const country = inputCoutryRef.value;
  const userInput = country.toLowerCase();
  const capitalLetter = country.slice(0, 1);
  const normalizedInput = capitalLetter.toUpperCase() + userInput.substring(1);
  console.log(normalizedInput);

  switch (userInput) {
    case 'китай':
      userInput = normalizedInput;
      cost = 100;
      alert(`Доставка в ${normalizedInput} будет стоить ${cost} кредитов`);
      break;

    case 'чили':
      cost = 250;
      userInput = normalizedInput;
      alert(`Доставка в ${normalizedInput} будет стоить ${cost} кредитов`);
      break;

    case 'австралия':
      userInput = normalizedInput;
      cost = 170;
      alert(`Доставка в ${normalizedInput} будет стоить ${cost} кредитов`);
      break;

    case 'индия':
      cost = 80;
      userInput = normalizedInput;
      alert(`Доставка в ${normalizedInput} будет стоить ${cost} кредитов`);
      break;

    case 'ямайка':
      cost = 120;
      userInput = normalizedInput;
      alert(`Доставка в ${normalizedInput} будет стоить ${cost} кредитов`);
      break;

    default:
      alert('В вашей стране доставка не доступна');
  }
});

// Код согласно ТЗ!!!!!

// const cost;
// const userImput = prompt('В какую страну в желаете сделать доставку?');
// const normalizedInput = userImput.toLowerCase();

// switch (normalizedInput) {
//   case 'китай':
//     cost = 100;
//     userImput === normalizedInput;
//     alert(`Доставка в ${userImput} будет стоить ${cost} кредитов`);
//     break;

//   case 'чили':
//     cost = 250;
//     userImput === normalizedInput;
//     alert(`Доставка в ${userImput} будет стоить ${cost} кредитов`);
//     break;

//   case 'австралия':
//     cost = 170;
//     userImput === normalizedInput;
//     alert(`Доставка в ${userImput} будет стоить ${cost} кредитов`);
//     break;

//   case 'индия':
//     cost = 80;
//     userImput === normalizedInput;
//     alert(`Доставка в ${userImput} будет стоить ${cost} кредитов`);
//     break;

//   case 'ямайка':
//     cost = 120;
//     userImput === normalizedInput;
//     alert(`Доставка в ${userImput} будет стоить ${cost} кредитов`);
//     break;

//   default:
//     alert('В вашей стране доставка не доступна');
// }
