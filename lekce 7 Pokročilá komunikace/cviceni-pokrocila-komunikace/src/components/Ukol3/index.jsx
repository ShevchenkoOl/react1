import { Product } from "./Product";
import { useState } from 'react';

/*
  Zadání: Budeme chtít, aby uživatel mohl klikat na kousky oblečení a u každého viděl, kolik
    kusů si objednal. Zároveň chceme, aby se mu po kliknutí na kousek oblečení zvýšila celková
    cena objednávky.
  
  Krok 1: V komponentě `Product` založte stav `count` a zařiďte, aby se správně navyšoval a 
    zobrazoval počet kusů, když uživatel kliká na jednodlitvé produkty.

  Krok 2: Do komponenty `Product` přidejte prop `onAddToCart`, která bude očekávat funkci, 
    která se zavolá při kliknutí na produkt a předá se jí cena produktu.

  Krok 3: V komponentě `Ukol3` založte stav `totalPrice`. Také založte funkci  
    `handleAddToCart` s parametrem `price`. Ve funkci zvyšte stav `totalPrice` o vybranou 
    cenu a předejte tuto funkci komponentě `Product` skrze prop `onAddToCart`.
*/

export const Ukol3 = () => {

  const [totalPrice, setTotalPrice] = useState(0);

  const handleAddToCart = (price) => {
    setTotalPrice((prevTotalPrice) => prevTotalPrice + price);
  };

  return (
    <>
      <p>
        Cena: <strong>{totalPrice} Kč</strong>
      </p>
      <div className="products">
        <Product image="/clothing/item01.jpg" name="Bunda" price={500} onAddToCart={handleAddToCart}/>
        <Product image="/clothing/item02.jpg" name="Halenka" price={1200} onAddToCart={handleAddToCart} />
        <Product image="/clothing/item03.jpg" name="Svetr" price={1500} onAddToCart={handleAddToCart} />
        <Product image="/clothing/item04.jpg" name="Mikina" price={800} onAddToCart={handleAddToCart} />
      </div>
    </>
  );
};
