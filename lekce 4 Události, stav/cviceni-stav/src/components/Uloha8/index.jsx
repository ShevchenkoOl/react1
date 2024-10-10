/*
Zadání 1: Vytvoř stavovou proměnnou s výchozí hodnotou `'možná'`.
Zadání 2: Proměnnou vypiš místo `ano/ne/možná`.
Zadání 3: Po kliknutí na tlačítko změň `možná` na `ano`, `ano` na `ne`, případně `ne` na `možná`.
*/
import { useState } from "react";
export const Uloha8 = () => {
  const [possible, setPossible] = useState('mozna');

  const handleClick = () => {
    if (possible == 'mozna') {
      setPossible('ano')
    } if (possible == 'ano') {
      setPossible('ne')
    } if (possible == 'ne') {
      setPossible('mozna')
    }}
  return (
    <>
      <h3>Prší v Brně:  {possible}</h3>
      <button onClick={handleClick}>změnit</button>
    </>
  )
}
