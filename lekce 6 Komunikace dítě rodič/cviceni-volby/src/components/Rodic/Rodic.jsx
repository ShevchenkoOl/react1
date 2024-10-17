import { useState } from "react";
import { Potomek } from "./Potomerk";

export const Rodic = () => {

const [pocet, setPocet] =useState(0);

const zvetsiPocet = () => {
setPocet(pocet + 1);
};

    return (
        <div style={{border: '5px solid dodgerblue', padding: 20, margin: 20}}>
            <h2>Rodic: {pocet}</h2>
            <Potomek priZvetseni={zvetsiPocet}/>
        </div>
    )
};