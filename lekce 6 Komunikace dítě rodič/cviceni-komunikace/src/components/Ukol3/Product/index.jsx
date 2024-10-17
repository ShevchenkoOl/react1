import './style.css';

export const Product = ({ image, name, price, onSelectPrice}) => {
  return (
    <div className="product" onClick={()=> onSelectPrice(price)}>
      <img src={image} className="product__image" />
      <div className="product__body">{name}: {price} Kč</div>
    </div>
  );
};
