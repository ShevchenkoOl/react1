import { useState } from "react";
import "../../HomePage/style.css";

export const Light = ({ name, initialState }) => {

  const [state, setState] = useState(initialState);

  const image = state === 'on' ? "/images/light-on.svg" : "/images/light-off.svg";

  return (
    <div className="light" onClick={()=>setState((prevState) => (prevState === 'on' ? 'off' : 'on'))}>
      <div className="light__icon">
        <img src={image} alt={name} />
      </div>
      <div className="light__name">
        {name}
      </div>
    </div>
  );
};

