import { useState } from 'react'
import './ukazatel-uspechu.css'

/*
Zadání 1: Použij prop `barva` ve style atributu.
Zadání 2: Přidej komponentě číselný stav od nuly do sta, který bude reprezentovat postup.
Zadání 3: Po kliknutí na tlačítko zvětši stav o deset. Nejvýše ale do sta.
Zadání 4. Nastav prvku `ukazatel-uspechu__postup` šířku podle stavové proměnné.
*/

const UkazatelPokroku = ({ barva }) => {

  const [progress, setProgress]=useState(0);
  
  const handleClick = () => {
    setProgress(prevProgress => Math.min(prevProgress + 10, 100)); // vestavěná funkce pro zvýšení o 10, ale ne více než 100
// if (progress < 100 ) {
//   setProgress(progress + 10)
// }
}
  return (
    <div className="ukazatel-uspechu">
      <div className="ukazatel-uspechu__ramecek">
        <div
          className="ukazatel-uspechu__postup"
          style={{
            width: `${progress}%`,
            backgroundColor: barva
          }}
        ></div>
      </div>
      <button onClick={handleClick}>postoupit o 10 %</button>
    </div>
  )
}

export const Uloha7 = () => {
  return (
    <>
      <UkazatelPokroku barva="blue" />
      <UkazatelPokroku barva="green" />
      <UkazatelPokroku barva="purple" />
    </>
  )
}
