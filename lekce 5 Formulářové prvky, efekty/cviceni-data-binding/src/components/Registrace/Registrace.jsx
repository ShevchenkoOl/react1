import { useState } from "react";

export const Registrace = () => {
  const [userName, setUserName] = useState("");

  const handleChange = (e) => {
    setUserName(e.target.value);
  };

  const handleSubmit = () => {
    alert(`Uživatel ${userName} se chce zaregistrovat`);
    setUserName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="">
        Uživatélske jméno:
        <input type="text" value={userName} onChange={handleChange} />
        <button disabled={userName === ""} type="submit">
          Registrovat
        </button>
      </label>
      {userName === "" ? <div>Uživatelské jméno je povinný údaj</div> : null}
      </form>
  );
};
