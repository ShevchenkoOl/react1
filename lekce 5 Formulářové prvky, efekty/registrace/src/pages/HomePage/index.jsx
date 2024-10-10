//--------------------------------DODELAT

import "./style.css";
import { useState } from "react";

export const HomePage = () => {
  const [userName, setUserName] = useState("");

  const handleChange = (e) => {
    setUserName(e.target.value);
  };
const handleSubmit = (e) => {
  e.preventDefault();
  alert(`Uzivatel: ${userName}`);
};
  return (
    <form className="container" onSubmit={handleSubmit}>
      <div>
        Uživatelské jméno:{" "}
        <input type="text" value={userName} onChange={handleChange} />
      </div>
      <button type="submit">registrivat</button>
    </form>
  );
};
