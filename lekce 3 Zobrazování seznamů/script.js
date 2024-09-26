const list = ['one', 'two', 'three', 'four'];
const items = list.map(item => `<li>${item}</li>`).join(''); //Преобразуем массив HTML-элементов в строку через join('').
document.body.innerHTML = `<ul>${items}</ul>`;

//----------------------------------------------Cvičení 1 Zkracovací jednohubky
const isEmail = (str) => str.includes('@');

const roll = () => Math.floor(Math.random() * 6) + 1;

const getNumber = (id) => Number(document.querySelector(`#${id}`).value);

const weather = (temperature) => temperature > 16 ? 'teplo' : 'zima';

//----------------------------------------------Cvičení 2 Opakování map
const weekdays = [
    'pondělí',
    'úterý',
    'středa',
    'čtvrtek',
    'pátek',
    'sobota',
    'neděle',
  ];
  const months = [
    {
      name: 'leden',
      days: 31,
    },
    {
      name: 'únor',
      days: 28,
    },
    {
      name: 'březen',
      days: 31,
    },
    {
      name: 'duben',
      days: 30,
    },
    {
      name: 'květen',
      days: 31,
    },
    {
      name: 'červen',
      days: 30,
    },
    {
      name: 'červenec',
      days: 31,
    },
    {
      name: 'srpen',
      days: 31,
    },
    {
      name: 'září',
      days: 30,
    },
    {
      name: 'říjen',
      days: 31,
    },
    {
      name: 'listopad',
      days: 30,
    },
    {
      name: 'prosinec',
      days: 31,
    },
  ];

  const weekdaysToUpper = weekdays.map(day => day.toUpperCase());
  console.log(weekdaysToUpper);

  const weekdaysSlice = weekdays.map(day => day.slice(0,2));
  console.log(weekdaysSlice);
  
  const monthsAmount = months.map(amount => amount.days);
  console.log(monthsAmount);

  const firstDay = months.map(date => `1. ${date.name}. 2020`);
  console.log(firstDay);

  // npm create vite@latest name
  // npm init kodim-app@latest name react
