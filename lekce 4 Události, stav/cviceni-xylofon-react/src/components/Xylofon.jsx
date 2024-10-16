import { useState } from "react";
import { zahraj } from "../zahraj";
import { nanoid } from 'nanoid'

// 1. Nahraď jednotlivé tlačítka/kameny za výpis pole pomocí `.map`. Použij následující pole `kameny`.
const kameny = ["C", "D", "E", "F", "G", "A", "B"];

// 2. Přichystej si stavovou proměnnou `nadpis`, ve které jako výchozí hodnotu nastav „Xylofon“ a proměnnou vypiš uvnitř tagu `<h1>`.
// 3. Po kliknutí na jakýkoliv kámen změň hodnotu nadpisu na text „Cink!“. Zkontroluj, že se nadpis opravdu změní.
// 4. Místo „Cink!“ změň nadpis na název tónu. Nápověda: Název najdeš v `event.target.textContent`.
// 5. Zahraj příslušný tón zavoláním funkce `zahraj('C')` a `'C'` nahraď názvem odpovídajícího tónu. Import přehrávací funkce už máš předchystaný výše.
// 6. Zapni si v počítači zvuk a xylofon otestuj.

export const Xylofon = () => {

	const [nadpis, setNadpis] = useState('Xylofon')
	return (
	  <>
		<h1>{nadpis}</h1>
		<div className="xylofon">
		  {kameny.map((kamen) => {
			const key = nanoid();
			const handleClick = (event) => {
				const clickTone = event.target.textContent + ", Click!";
				setNadpis(clickTone)
				zahraj(event.target.textContent);
			}
			return (
			  <button type="button" className="kamen" key={key} onClick={handleClick}>
				{kamen}
			  </button>
			);
		  })}
		</div>
	  </>
	);
  };
