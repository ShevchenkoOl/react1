import './style.css';

export const FunctionButton = ({ label, onFunctionClick }) => {
  return (
    <button className="numpad-button" onClick={onFunctionClick}>{label}</button>
  );
};
