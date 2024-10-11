import { useState } from 'react';
import './style.css'
/*
Zadání: Pomocí dvou stavových proměnných s výchozí hodnotou 0, které se budou měnit podle vstupních
  políček, vypiš do `<output></output>` jejich součet.
*/

export const ZaverecnyBonus4 = () => {
  const [add, setAdd] = useState(0);
  const [substarct, setSubstract] = useState(0);
  const [summ, setSumm] = useState(0);

const handleChangeAdd = (e) => {
  const newAdd = Number(e.target.value);
  setAdd(newAdd);
  setSumm(newAdd + substarct) //Použijeme novou přidanou hodnotu Add a aktuální substarct
}

const handleSubstarctChange = (e) => {
  const newSubstract = Number(e.target.value);
  setSubstract(newSubstract);
  setSumm(add + newSubstract) //Použijeme novou hodnotu substarct a aktuální add
}


   return (
    <div className='bonus4'>
      <input type="number" value={add} onChange={handleChangeAdd}/> +{' '}
      <input type="number" value={substarct} onChange={handleSubstarctChange}/> = <output>{summ}</output>
    </div>
  )
}
