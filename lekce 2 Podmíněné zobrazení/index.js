//------------------------------------------------ cviceni 1 Podmíněné jednohubky

// const password = prompt('Zadejte heslo:');
// let valid = null;
// if (password.length > 8) {
//   valid = 'Heslo je v pořádku';
// } else {
//   valid = 'Heslo není bezpečné';
// }

const password = prompt('Zadejte heslo:');
const valid = password.length > 8 ? 'Heslo je v pořádku' : 'Heslo není bezpečné';



// const grade = prompt('Počet bodů z písemky:');
// let passed = null;
// if (grade >= 50) {
//   passed = '<span>prošel</span>';
// } else {
//   passed = '<span class="red">neprošel</span>';
// }

const grade = prompt('Počet bodů z písemky:');
passed = grade >= 50 ? '<span>prošel</span>' : '<span class="red">neprošel</span>';