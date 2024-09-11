import './style.css';

const Today = (props) => {
    const { day, month, year } = props;
    return (
      <div className="today-container">
        <span className="today-day">{day}</span>
        <span className="today-separator">.</span>
        <span className="today-month">{month}</span>
        <span className="today-separator">.</span>
        <span className="today-year">{year}</span>
      </div>
    );
  }

export default Today;