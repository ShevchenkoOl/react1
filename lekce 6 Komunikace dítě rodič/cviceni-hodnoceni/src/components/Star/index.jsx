import { useState } from "react";
import "./style.css";

export const Star = ({ glowing, value, onSelect }) => {
  // const [glowing, setGlowing] = useState(false);

  const starClass = glowing ? "rating__star rating__star--on" : "rating__star";

  return (
    <div
      className={starClass}
      onClick={() => {
        // setGlowing(!glowing);
        onSelect(value);
      }}
    ></div> //vyrobte handler pro událost onClick. Zařiďte, aby se hvězdička po kliknutí rozsvítila
  );
};
