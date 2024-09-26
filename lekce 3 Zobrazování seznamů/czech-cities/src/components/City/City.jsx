import PropTypes from "prop-types";

const City = ({ name, population, area, district, photo }) => (
    <div className="city">
      <h2>{name}</h2>
      <img src={photo} alt={name}></img>
      <p>
        Okres: {district}
      </p>
      <p>Počet obyvatel: {population}</p>
      <p>
        Rozloha: {area} km<sup>2</sup>
      </p>
    </div>
  );

export default City;


City.propTypes = {
    name: PropTypes.string.isRequired,
    population: PropTypes.number.isRequired,
    area: PropTypes.number.isRequired,
    district: PropTypes.string,
    photo: PropTypes.string
  };