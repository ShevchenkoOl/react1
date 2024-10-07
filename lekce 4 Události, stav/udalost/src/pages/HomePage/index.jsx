import { useState } from 'react';
import './style.css';

export const HomePage = () => {
const handleClick = (event) => {
  console.log(event.target);
  console.log(event.target.innerText); // Click me!
  console.log("Cliked!");
}

const [pocet, setPocet] = useState(0);

// let pocet = 0;
// const handleClick2 = () => {
//   pocet += 1;
// }

  return (
    <div className="container">
      <h1>Udalost</h1>
      <button onClick={handleClick}>Click me!</button>
      <button onMouseOver={()=>console.log("Mouse on!")}>Mouse button</button>
      <h1>Stav</h1>
      <p>Pocet kliku: {setPocet}</p>
      <button onClick={handleClick2}>Click</button>
    </div>
  );
};
