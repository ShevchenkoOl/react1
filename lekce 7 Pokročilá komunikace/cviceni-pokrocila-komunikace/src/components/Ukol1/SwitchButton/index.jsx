import './style.css';

export const SwitchButton = ({ label, onSwitch, on }) => {
  return (
    <button className={`switch-button ${on ? "switch-button--on" : null}`} onClick={onSwitch}>
      <i className="switch-icon" />
      <div className="button-label">{label}</div>
    </button>
  );
};
