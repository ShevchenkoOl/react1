import './style.css';

const Bulb = ({on}) => {
    // const style = `bulb ${on ? "bulb--on" : ""}`; // Třída "bulb" je vždy přítomna.Pokud je "on" pravdivé (true), přidá se navíc třída "bulb--on".Jinak zůstane pouze třída "bulb".
    const style = on ? "bulb bulb--on" : "bulb";
return (
<div className={style}></div>
)
};

export default Bulb;