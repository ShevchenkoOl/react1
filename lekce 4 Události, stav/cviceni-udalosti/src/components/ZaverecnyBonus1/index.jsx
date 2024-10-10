/*
Zadání: Předstírejme, že na stránce je složitý formulář, do kterého uživatel možná pracně vyplnil
  nějaká data. Po kliku na odkaz se radši uživatele zeptejte pomocí `confirm`, jestli chce opravdu
  odejít na jinou stránku a tím ztratit rozpracovanou práci. Pokud otázku nepotvrdí, nechce odejít,
  zamezte přesměrování pomocí `event.preventDefault()`.
*/

export const ZaverecnyBonus1 = () => {

  const handleLinkClick = (event) => {

    //window.confirm je vestavěná funkce prohlížeče, která zobrazuje modální okno s textem a dvěma tlačítky: „OK“ a „Cancel“. Je součástí objektu window, který představuje globální kontext v prohlížeči (ačkoli můžete jednoduše zavolat confirm(), protože okno je globální a nemusí být explicitně specifikováno).

  //   const userConfirmed = window.confirm("Opravdu chcete odejít? Vaše neuložená práce bude ztracena.");
  //   if (!userConfirmed) {
  //     event.preventDefault(); // Zrušime přechod na druhou stránku
  //   }
  // };

  if(!confirm("Opravdu chcete odejít? Vaše neuložená práce bude ztracena.")){
    event.preventDefault(); // Zrušime přechod na druhou stránku
  }
};
  return (
    <>
      Odkaz: <a href="https://www.czechitas.cz/" onClick={handleLinkClick}>www.czechitas.cz</a>
      <hr />
      Formulář:
      <form>
        <textarea
          rows={5}
          cols={60}
          defaultValue="Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit aperiam vitae necessitatibus et perspiciatis consectetur, soluta quia vero porro hic, esse tempora sint eaque adipisci asperiores alias repudiandae tempore? Omnis?"
        />
        <br />
        <button>uložit</button>
      </form>
    </>
  );
};
