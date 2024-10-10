/*
Zadání 1: Pomocí události `change` a vlastnosti `event.target.value` vypisujte do konzole, co
  postupně uživatel do inputu píše ve formátu
  console.log('Uživatel napsal: ' + DOPLŇ_TEXT_OD_UŽIVATELE).
Zadání 2: Pokud uživatel z textového políčka vše smaže, vypište „Uživatel nenapsal nic“.
*/

export const Uloha4 = () => {
  return (
    <input
      onChange={(event) => {
        if (event.target.value != "") {
          console.log(event.target.value);
        } else {
          console.log("Uživatel nenapsal nic");
        }
      }}
      onBlur={(event) => {
        if (event.target.value != "") {
          //událost onBlur – spustí se, když uživatel opustí vstupní pole.
          console.log("Uživatel napsal: " + event.target.value);
        } else {
          console.log("Uživatel nenapsal nic");
        }
      }}
    />
  );
};
