import { useState } from "react";

/*
Zadání: Začneme velmi jednoduše. Zařiďte, aby se po kliknutí na tlačítko zobrazilo jméno, které je
  uvnitř tlačítka. Zatím nejde o žádnou velkou komunikaci mezi komponentami, ale je to základ,
  který budeme dále rozvíjet.
*/

export const Ukol1 = () => {
  const [jmeno, setJmeno] = useState("Jirka");
const handleClick = (event) => {
  setJmeno(event.target.innerHTML); 
}
  return (
    <>
      <p>
        <strong>{jmeno}</strong>
      </p>
      <div>
        <button onClick={handleClick}>Jirka</button>
        <button onClick={handleClick}>Honza</button>
        <button onClick={handleClick}>Tomáš</button>
        <button onClick={handleClick}>Šimon</button>
      </div>
    </>
  );
};
