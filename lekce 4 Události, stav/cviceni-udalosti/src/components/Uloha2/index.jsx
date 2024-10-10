import hradUrl from "./hrad.svg";

/*
Zadání: Po najetí myši, `onMouseEnter` na obrázek zobrazte alert s textem „Na hradě je myš!“
*/

export const Uloha2 = () => {
  const mouseOver = () => {
    alert("Na hradě je myš!");
  };

  const mouseOut = () => {
    alert("Myš už je přič!");
  }
  return (
    <img
      src={hradUrl}
      width={60}
      height={60}
      alt="hrad"
      onMouseOver={mouseOver}
      onMouseOut={mouseOut}
    />
  );
};
