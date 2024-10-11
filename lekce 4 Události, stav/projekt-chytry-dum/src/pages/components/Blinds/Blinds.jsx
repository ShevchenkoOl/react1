import { useState } from "react";
import "../../HomePage/style.css";

export const Blinds = ({ state }) => {
  const [isOpen, setIsOpen] = useState(state);
  return (
    <div className="blinds">
      <div className="blinds__icon">
        <img
          src={
            isOpen ? "/images/blinds-open.svg" : "/images/blinds-closed.svg"
          }
        />
      </div>
      <div className="blinds__name">Žaluzie</div>
      <div className="blinds__controls">
        <button
          className={`button ${!isOpen ? "button--active" : ""}`}
          onClick={() => setIsOpen(true)}
        >
          Otevřeno
        </button>
        <button
          className={`button ${isOpen ? "button--active" : ""}`}
          onClick={() => setIsOpen(false)}
        >
          Zavřeno
        </button>
      </div>
    </div>
  );
};
