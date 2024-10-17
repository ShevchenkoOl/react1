import { useState } from "react";
import { IconButton } from "./IconButton";
import './style.css';

/*
Krok 1: Nyní už máme zajímavější tlačíko s ikonkou jako komponentu. Opět zařiďte, aby se po kliknutí
  na tlačítko zobrazilo jméno, které je uvnitř tlačítka. K tomu bude potřeba na tlačítko IconButton
  přidat prop `onSelectName`, kterou tlačítko zavolá při kliknutí a předá jí svůj `label`.
Krok 2: Do prop `onSelectName` předejte funkci, která nastaví jméno do stavu. Vyzkoušejte, že
  stránka funguje, jak má.
*/

export const Ukol2 = () => {
  const [jmeno, setJmeno] = useState('Jirka');
  
  return (
    <>
      <p>
        <strong>{jmeno}</strong>
      </p>
      <div className="button-group">
        <IconButton label="Jirka" />
        <IconButton label="Honza" />
        <IconButton label="Tomáš" />
        <IconButton label="Šimon" />
      </div>
    </>
  );
};
