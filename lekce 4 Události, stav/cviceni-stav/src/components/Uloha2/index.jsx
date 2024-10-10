/*
Zadání 1: Převeďte `cislo` na stavovou proměnnou.
Zadání 2: Zařiďte, aby jednotlivá tlačítka měnila stav. +1 přičítalo jedničku, +5 přičítalo pětku,
  vynulovat nastavovalo na nulu apod.
*/

import { useState } from "react";

const Pocitadlo = () => {
  // const cislo = 0;
const [cislo, setCislo] = useState(0);
  return (
    <>
      <h3>Počítadlo: {cislo}</h3>
      <div>
        <button onClick={() => { setCislo(cislo - 5) }}>-5</button>
        <button onClick={() => { setCislo(cislo - 1) }}>-1</button>
        <button onClick={() => setCislo(0)}>vynulovat</button>
        <button onClick={() => { setCislo(cislo +1) }}>+1</button>
        <button onClick={() => { setCislo(cislo + 5) }}>+5</button>
      </div>
    </>
  );
};

export const Uloha2 = () => {
  return (
    <>
      <Pocitadlo />
      <Pocitadlo />
    </>
  );
};
