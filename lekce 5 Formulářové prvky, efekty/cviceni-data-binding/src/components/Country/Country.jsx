import { useState } from "react";

export const Country = () => {
  const [userName, setUserName] = useState("");
  const [country, setContry] = useState("Česká republika");

  const handleChange = (e) => {
    setUserName(e.target.value);
  };

  const handleSubmit = () => {
    alert(`Uživatel ${userName} ze země ${country} se chce zaregistrovat.`);
    setUserName("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <label htmlFor="">
        Uživatélske jméno:
        <input type="text" value={userName} onChange={handleChange} />
      </label>
      <label>
        Země původu:
        <select value={country} onChange={(e) => setContry(e.target.value)}>
          <option value="Chorvatsko">Chorvatsko</option>
          <option value="Česká republika">Česká republika</option>
          <option value="Polsko">Polsko</option>
          <option value="Slovenská republika">Slovenská republika</option>
        </select>
      </label>
      <button disabled={userName === ""} type="submit">
        Registrovat
      </button>
      {userName === "" ? <div>Uživatelské jméno je povinný údaj</div> : null}
    </form>
  );
};
