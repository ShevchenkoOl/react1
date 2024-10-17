import { useState } from "react";

export const Newslatter = () => {
  const [userName, setUserName] = useState("");
  const [country, setContry] = useState("Česká republika");
  const [newsletterAccepted, setNewsletterAccepted] = useState(false);

  const handleChange = (e) => {
    setUserName(e.target.value);
  };

  const handleSubmit = () => {
   newsletterAccepted
      ? alert(
          `Uživatel ${userName} ze země ${country} se chce zaregistrovat a dostávat pravidelně novinky.`
        )
      : alert(
          `Uživatel ${userName} ze země ${country} se chce zaregistrovat a o novinky nemá zájem.`
        );
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
      <label>
        {" "}
        Chci pravidelně dostávat novinky do mé e-mailové schránky.
        <input
          type="checkbox"
          value={newsletterAccepted}
          onChange={() => setNewsletterAccepted((prevState) => !prevState)}
        />
      </label>
      <button disabled={userName === ""} type="submit">
        Registrovat
      </button>
      {userName === "" ? <div>Uživatelské jméno je povinný údaj</div> : null}
    </form>
  );
};
