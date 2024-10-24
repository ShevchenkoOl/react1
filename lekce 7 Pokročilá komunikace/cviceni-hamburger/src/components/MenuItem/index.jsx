import './style.css';

export const MenuItem = ({ text, onSelect }) => {
  return (
    <a href="#" className="menu-item" onClick={onSelect}>
      {text}
    </a>
  );
};
