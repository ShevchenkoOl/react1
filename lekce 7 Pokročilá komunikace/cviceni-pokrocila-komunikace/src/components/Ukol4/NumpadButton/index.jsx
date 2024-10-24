import './style.css';

export const NumpadButton = ({ digit, onDigitClick }) => {
  return (
    <button className="numpad-button" onClick={() => onDigitClick(digit)}>{digit}</button>
  );
};
