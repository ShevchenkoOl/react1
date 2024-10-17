import './style.css';

export const IconButton = ({ label, click }) => {
  return (
    <button className="icon-button" onClick={() => click(label)}>
      <i className="user-icon" />
      <div className="button-label">{label}</div>
    </button>
  );
};
