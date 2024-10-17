import './style.css';

const currencies = {
  USD: { CZK: 23.823 },
  EUR: { CZK: 24.74 },
  GBP: { CZK: 29.067 }
};

export const Rate = () => {
  return (
    <div className="rate">
      <div className="rate__currency">1 USD</div>
      <div>=</div>
      <div className="rate__value">22 CZK</div>
    </div>
  );
};
