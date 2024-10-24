import { Potomek1 } from "../Potomek1/Potomek1.jsx";
import { Potomek2 } from "../Potomek2/Potomek2.jsx";
import { useState } from 'react';

// Родительский компонент
export const Rodic = () => {
    const [pocet, setPocet] = useState(0); // Счётчик в родителе

    // Функция для увеличения счётчика
    const zvetsiPocet = () => {
        setPocet(pocet + 1);
    };

    return (
        <div style={{border: '5px solid dodgerblue', padding: 20, margin: 20}}>
            <h2>Rodic: </h2>
            <Potomek1 zvetsiPocet={zvetsiPocet} />
            <Potomek2 pocet={pocet} />
        </div>
    )
};