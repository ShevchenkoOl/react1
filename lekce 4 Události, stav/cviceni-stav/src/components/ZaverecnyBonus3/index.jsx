import { useState } from "react";
import { useCasVSekundach } from "./hodiny";

/*
Zadání: Pomocí předchystané stavové proměnné, která se mění každou sekundu, zobraz aktuální čas
  ve formátu 7:49:05.

Nápověda: Pokud je v `casVSekundach` nula, pak je 0:00:00. Pokud je v `casVSekundach` 60, pak je
  0:01:00. Pokud je v `casVSekundach` 67, pak je 0:01:07.
*/

/*Pracovní algoritmus:
1. Rozdělení sekund na hodiny, minuty a sekundy:
Hodiny se získají jako celočíselný zlomek sekund dělený 3600 (1 hodina má 3600 sekund).
Minuty jsou zbytek po dělení 3600 a poté děleno 60.
Sekundy jsou zbytek po dělení 60.
2. Přidání úvodních nul:
Chcete-li zajistit správný formát (například 07:49:05 místo 7:49:5), musíte přidat úvodní nuly, když jsou hodiny, minuty nebo sekundy menší než 10.*/

export const ZaverecnyBonus3 = () => {
  const casVSekundach = useCasVSekundach();

  const formatTime = (totalSecond) => {
    // const hour = Math.floor(totalSecond / 3600);
    // const minute = Math.floor((totalSecond % 3600) / 60);
    // const second = totalSecond % 60;

    // const padTime = (unit) => unit < 10 ? `0${unit}` : unit; // funkce pro přidání 0, pokud číslo < 10;

    // return `${padTime(hour)}:${padTime(minute)}:${padTime(second)}`;

    // nebo můžete použít metodu padStart, ale nejprve převeďte číslo na řetězec
    const hour = String(Math.floor(totalSecond / 3600)).padStart(2, "0");
    const minute = String(Math.floor((totalSecond % 3600) / 60)).padStart(
      2,
      "0"
    );
    const second = String(totalSecond % 60).padStart(2, "0");

    return `${hour}:${minute}:${second}`;
  };
  return (
    <>
      Čas právě teď: <b>{formatTime(casVSekundach)}</b>
    </>
  );
};
