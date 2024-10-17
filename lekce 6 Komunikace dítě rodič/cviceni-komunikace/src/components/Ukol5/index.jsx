import { InputField } from "./InputField";

/*
Zadání: Vyřešte tento úkol podobně jako předchozí, pouze s tím rozdílem, že tentokrát budete mít
  dvě pole, do kterých uživatel může psát jméno a příjmení. Výsledné jméno a příjmení se mají
  zobrazit pod nadpisem oddělené mezerou. Budete tedy potřebovat dva stavy, každý pro jedno pole.
*/

export const Ukol5 = () => {
  return (
    <>
      <p>Jméno: Patrik Pokoutník</p>
      <InputField label="Jméno" type="text" />
      <InputField label="Příjmení" type="text" />
    </>
  );
};
