import "./carousel.css";
import { useState } from "react";

/*
Zadání 1: Nachystejte si adresy obrázků níže do pole.
Zadání 2: Přidejte komponentě stavovou proměnnou, ve které bude index právě aktivního obrázku.
  Na začátku 0.
Zadání 3: Pro `src` v tagu `img` použijte adresu z pole pod správným indexem.
Zadání 4: Tlačítky ← a → měňte index.

Bonus: Pozor na krajní hodnoty. Pokud dojdete na konec nebo začátek pole, tak už v daném směru
  neměňte index, aby neutekl mimo položky v poli. Nastavte tlačítkům atribut `disabled`, pokud
  v jejich směru už není žádný obrázek.
*/

/*
  Adresy obrázků:
  https://source.unsplash.com/WLUHO9A_xik/880x500
  https://source.unsplash.com/DA1eGglMmlg/880x500
  https://source.unsplash.com/kTxL6le0Wgk/880x500
  https://source.unsplash.com/7go5UASxmDY/880x500
  https://source.unsplash.com/YmATDIFsCmQ/880x500
*/

export const Uloha4 = () => {
  const images = [
    "https://placehold.co/600x400?text=Foto+1",
    "https://placehold.co/600x400?text=Foto+2",
    "https://placehold.co/600x400?text=Foto+3",
    "https://placehold.co/600x400?text=Foto+4",
    "https://placehold.co/600x400?text=Foto+5",
  ];
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length); //dělení bez zbytku
  };

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel">
      <button
        className="carousel__predchozi"
        aria-label="předchozí"
        onClick={handlePrev}
      >
        ←
      </button>
      <div className="carousel__media">
        <img
          className="carousel__image"
          src={images[index]}
          alt={`Image ${index + 1}`}
        />
      </div>
      <button
        className="carousel__dalsi"
        aria-label="další"
        onClick={handleNext}
      >
        →
      </button>
    </div>
  );
};
