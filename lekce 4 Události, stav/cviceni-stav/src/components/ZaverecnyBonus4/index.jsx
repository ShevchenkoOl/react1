import './style.css'
/*
Zadání: Pomocí dvou stavových proměnných s výchozí hodnotou 0, které se budou měnit podle vstupních
  políček, vypiš do `<output></output>` jejich součet.
*/

export const ZaverecnyBonus4 = () => {
  return (
    <div className='bonus4'>
      <input type="number" defaultValue="0" /> +{' '}
      <input type="number" defaultValue="0" /> = <output>0</output>
    </div>
  )
}
