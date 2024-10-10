import { useEffect } from "react";
/*
Zadání: Upravte efekt v této komponentě tak, aby se při KAŽDÉM vykreslení komponenty v konzoli objevil
  text „Jsem tady“.

Poznámka: Nemáte jak prakticky ověřit, že se to zobrazí při každém vykreslení – protože React nemá
  žádný důvod vykreslovat komponentu opakovaně. Důležité je vyzkoušet si ten zápis useEffectu pouze
  s jedním parametrem.
*/
// Chcete-li, aby se useEffect spouštěl při každém vykreslení, můžete jednoduše vynechat druhý argument, který spustí efekt po každém vykreslení.
export const Ukol1 = () => {
  useEffect(() => {
    console.log("Jsem tady");
  });

  return (
    <>
      <p>Jsem tady</p>
    </>
  );
};
