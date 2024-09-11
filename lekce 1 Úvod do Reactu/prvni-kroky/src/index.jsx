import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

// Uložte si JSX představující obsah stránky do seperátní proměnné App uvnitř index.jsx a tu pak použijte ve funkci render.

const App = () => {
  const name = "Oleksii Shvchenko";
  /*Uložte si své jméno do proměnné a obsah této proměnné vložte do hlavičky stránky.*/
  const introClass = "intro";
  /*Uložte si název této třídy do proměnné a tu pak použijte jako className pro odstavec p na vaší stránce.*/
  return (
    <div className="container">
      <header>
        <h1>{name}</h1>{" "}
        {/* 4. Přímo ve volání funkce render změňte nadpis stránky h1 a v hlavičce uveďte svoje jméno */}
      </header>
      <main>
        <p className={introClass}>Moje první React aplikace</p>
      </main>
    </div>
  );
};

createRoot(document.querySelector("#app")).render(<App />);
