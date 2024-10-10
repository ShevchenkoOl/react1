import { useState } from 'react'
import './kasicka.css'
import penizeUrl from './penize.svg'

/*
Zadání 1: Přichystej v komponentě `Kasicka` proměnnou pro počet uložených peněz s výchozí hodnotou
  podle prop proměnné `pocatecniStav`.
Zadání 2: Prvním tlačítkem přidej pět a druhým nastav na nulu.
Zadání 3: Počet peněz vypiš.
*/

const Kasicka = ({ pocatecniStav }) => {

  const [stav, setStav] = useState(pocatecniStav);

  return (
    <div className="kasicka">
      <h3>
        <img src={penizeUrl} width={24} height={24} alt="" /> Peníze v kasičce: {stav} Kč
      </h3>
      <button onClick={() => setStav(stav+5)}>přihodit pětikorunu</button> <button onClick={() => setStav(0)}>vysypat</button>
    </div>
  )
}

export const ZaverecnyBonus2 = () => {
  return (
    <>
      {[0, 20, 50, 8].map((hodnota, i) => (
        <Kasicka pocatecniStav={hodnota} key={i} />
      ))}
    </>
  )
}
