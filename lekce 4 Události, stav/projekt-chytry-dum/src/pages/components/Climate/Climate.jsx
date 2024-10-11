import { useState } from "react";
import "../../HomePage/style.css";

export const Climate = ({clima}) => {

    const [temperature, setTemperature] = useState(clima.temperature);
    const [humidity, setHumidity] = useState(clima.humidity);

  return (
    <div className="climate">
      <div className="climate__icon">
        <img src="/images/temp.svg" />
      </div>
      <div className="climate__content">
        <div className="climate__temperature">{temperature}&deg;C</div>
        <div className="climate__humidity">Vlhost vzduchu {clima.humidity}&nbsp;%</div>
      </div>
      <div className="climate__controls">
        <button className="button" onClick={()=>setTemperature(temperature + 1)}>+</button>
        <button className="button" onClick={()=>setTemperature(temperature - 1)}>-</button>
      </div>
    </div>
  );
};
