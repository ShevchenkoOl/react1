/*
Zadání 1: Vytvořte v této komponentě stav `nacteno`, který bude mít výchozí hodnotu `false`.
  Dále vytvořte efekt, který po 3 vteřinách od prvního načtení komponenty nastaví stav `nacteno` na `true`.
  Představte si to jako simulaci načítání dat z API, které bude trvat zhruba 3 vteřiny.
Zadání 2: Pomocí ternárního operátoru zobrazte text `Načítám…` nebo `Hotovo!` podle hodnoty
  ve stavu `nacteno`.
*/
import { useState, useEffect } from 'react';

export const Ukol4 = () => {
  const [nacteno, setNacteno] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setNacteno(true);
    }, 3000);
  }, []);

  return (
    <>
      <p>{!nacteno ? "Načítám…" : "Hotovo"}</p>
    </>
  );
};
