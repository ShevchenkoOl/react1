import React from 'react';
import '../style.css'; // Стили для компонента

const Card = ({ 
  image, 
  imagePosition = 'top', 
  title, 
  content, 
  footer 
}) => {
  return (
    <div className="card">
      {image && imagePosition === 'top' && <img src={image} alt="Card visual" className="card-image" />}
      <div className="card-body">
        {title && <h3 className="card-title">{title}</h3>}
        <div className="card-content">{content}</div>
      </div>
      {image && imagePosition === 'bottom' && <img src={image} alt="Card visual" className="card-image" />}
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
};

export default Card;