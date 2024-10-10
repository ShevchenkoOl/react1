import "./style.css"

/*
Zadání 1: Pomocí události `change` na vstupním políčku a vlastnosti `event.target.value` ukládej
  do stavu, co uživatel napsal.
Zadání 2: Mezi tagy `<b></b>` vlož napsaný text.
Zadání 3. V dalším odstavci `<p>` zobraz, kolik má text znaků.
Zadání 4. Poslední odstavec zobraz pouze v případě, že je text kratší než 8 znaků.
*/

export const ZaverecnyBonus1 = () => {
  return (
    <div className='formular'>
      <label>
        Napiš něco: <input />
      </label>
      <p>
        Do políčka výše uživatel napsal: <b>@TODO</b>
      </p>
      <p>Počet znaků: 0</p>
      <p>Jako heslo by text neobstál.</p>
    </div>
  )
}
