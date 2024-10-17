import './style.css';

export const IconButton = ({ label }) => {
  return (
    <button className="icon-button">
      <i className="user-icon" />
      <div className="button-label">{label}</div>
    </button>
  );
};
