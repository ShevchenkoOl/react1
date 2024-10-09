import { useEffect, useState } from "react";
import "./style.css";

export const HomePage = () => {
  const handleClick = (event) => {
    console.log(event.target);
    console.log(event.target.innerText); // Click me!
    console.log("Cliked!");
  };

  // let pocet = 0;  - změňime původní hodnotu pocet na hook useState a přiřadame hodnotu 0

  const [pocet, setPocet] = useState(0);
  console.log(pocet);
  const [jmeno, setJmeno] = useState("");
  const [seznam, setSeznam] = useState([1, 2, 3, 45, 87]);
  const [isHidden, setIsHidden] = useState(false);

  const handleClick2 = () => {
    // pocet += 1;      //to bude fungovat v klasickém JS, nebo v konzoli
    // console.log(pocet);
    setPocet(pocet + 1); //pro React musíme zavolat funkci setPocet() a předat hodnotu, kterou chceme zobrazit
  };
  // useEffect(() => { //Toto je hook, který vám umožňuje spouštět vedlejší efekty (akce mimo hlavní vlákno vykreslování komponenty). Často se používá, když potřebujete komunikovat s externími datovými zdroji, měnit záhlaví, přihlásit se k odběru událostí nebo například pracovat s výzvami nebo jinými asynchronními akcemi.
  //   const userName = prompt("Zadej svoje jmeno");
  //   if (userName) {
  //     setJmeno(userName);
  //   }
  // }, []); //Prázdné pole závislostí znamená, že efekt se spustí pouze při prvním vykreslení

  const handleChange = (event) => {
    const userName = event.target.value;
    setJmeno(userName);
  };

  const handleBlur = (event) => {
    setJmeno(event.target.value);
  };
  const addNumber = () => {
    setSeznam([0, ...seznam, 548]); // spread operator
  };

  const deleteNumber = (indexToDelete) => {
    // Удаляем элемент по индексу
    const updatedSeznam = seznam.filter((_, index) => index !== indexToDelete); //naše pole má dva prvky {seznam.map((cislo, index) .... _ - ignorovat prvek pole a vzít pouze druhý prvek, tedy index
    setSeznam(updatedSeznam);
  };

  // seznam.filter((_, index) => ...):
  // filter() — это метод массива, который перебирает каждый элемент массива и оставляет только те, которые соответствуют условию внутри.
  // (_, index) — это функция обратного вызова, которая передаётся в filter().
  // Первый аргумент (_) — это сам элемент массива (в данном случае число), но он здесь не используется, поэтому он обозначен как _ (мы его игнорируем).
  // Второй аргумент (index) — это индекс текущего элемента в массиве, и он важен для нашего условия.

  // index !== indexToDelete:
  // Это условие, которое проверяется для каждого элемента массива.
  // index — это индекс текущего элемента в массиве, который перебирается.
  // indexToDelete — это индекс элемента, который мы хотим удалить. Он был передан в функцию deleteNumber() при нажатии на кнопку "delete".
  // Знак "не равно" (!==) означает, что мы фильтруем все элементы массива и оставляем только те, у которых индекс не совпадает с indexToDelete.

  return (
    <div className="container">
      <h1>Udalost</h1>
      <button onClick={handleClick}>Click me!</button>
      <button onMouseOver={() => console.log("Mouse on!")}>Mouse button</button>
      <hr />
      <h1>Stav</h1>
      <p>Pocet kliku: {pocet}</p>
      <button onClick={handleClick2}>Click</button>
      <hr />
      <h1>{jmeno}</h1>
      <input
        type="text"
        defaultValue={jmeno} // Používá počáteční hodnotu, ale není řízena Reactem
        // value={jmeno} //propojení input se stavem, pokud použijeme onChange, pak pouze value, pokud ne defaultValue
        // onChange={handleChange}
        onBlur={handleBlur}
      />
      <span>{jmeno}</span>
      <hr />
      <button onClick={addNumber}>Add number</button>
      <ul>
        {seznam.map((cislo, index) => (
          <li key={index}>
            {cislo}
            <button
              onClick={() => {
                deleteNumber(index);
              }}
            >
              delete
            </button>
          </li>
        ))}
      </ul>
      <hr />
       <button onClick={()=> {isHidden == false ? setIsHidden(true) : setIsHidden(false)}}>{isHidden ? "hide" : "show"}</button> {/*jedná se o dva stejné záznamy*/}
      <button onClick={()=> setIsHidden(!isHidden)}>Show</button>
      {isHidden && (
        <div>
          <h1>Modal</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
            perferendis quod asperiores illum, repellat esse mollitia dolore.
            Iste, sequi exercitationem!lorem50
          </p>
        </div>
      )}
    </div>
  );
};
