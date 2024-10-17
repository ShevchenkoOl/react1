import { Product } from "./Product";

/*
Zadání: Budeme chtít, aby uživatel při kliknutí na nějaký kousek oblečení uviděl jeho cenu
  přímo pod nadpisem.
Krok 1: Vytvořte stav s názvem `price` a nastavte jej na na začátku na 0. Zobrazte stav pod
  nadpisem.
Krok 2: Do komponenty `Product` přidejte prop `onSelectPrice`, kterou komponenta zavolá při
  kliknutí na nějaký kousek oblečení a předá jí svou cenu.
Krok 3: Do prop `onSelectPrice` předejte funkci, která nastaví cenu do stavu. Vyzkoušejte,
  že stránka funguje, jak má.
*/

export const Ukol3 = () => {
  return (
    <>
      <p>
        Cena: <strong>0 Kč</strong>
      </p>
      <div className="products">
        <Product image="/clothing/item01.jpg" name="Bunda" price={500} />
        <Product image="/clothing/item02.jpg" name="Halenka" price={1200} />
        <Product image="/clothing/item03.jpg" name="Svetr" price={1500} />
        <Product image="/clothing/item04.jpg" name="Mikina" price={800} />
      </div>
    </>
  );
};
