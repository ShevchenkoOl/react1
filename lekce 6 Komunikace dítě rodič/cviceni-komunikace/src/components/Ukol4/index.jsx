import { InputField } from "./InputField";

/*
Zadání: Máme k dispozici specializovanou komponentu InputField pro rychlé vytvoření vstupního pole
  s popiskem. Chceme, aby se jméno, které uživatel zadává, zobrazilo pod nadpisem.
Krok 1: Vytvořte stav, který bude obsahovat jméno a nastavte jej na začátku na prázdný řetězec.
  Zobrazte stav pod nadpisem.
Krok 2: Do komponenty `InputField` přidejte prop `onValueChange`, kterou komponenta zavolá při
  změně hodnoty a předá jí svou novou hodnotu pokaždé, když uživatel do pole něco napíše.
Krok 3: Do prop `onValueChange` předejte funkci, která nastaví novou hodnotu do stavu. Vyzkoušejte,
  že stránka funguje, jak má.
Krok 4: Vyzkoušejte si obousměrný binding. Do komponenty `InputField` přidejte prop `value`, kterou
  komponenta zobrazí v poli jako svou hodnotu. Do této prop předejte stav se jménem. Vyzkoušejte, že stránka funguje, jak má.
*/

export const Ukol4 = () => {
  return (
    <>
      <p>Jméno:</p>
      <InputField label="Jméno" type="text" />
    </>
  );
};
