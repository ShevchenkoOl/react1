import './style.css';

const Bulb = ({on}) => {
    const style = `bulb ${on ? "bulb--on" : ""}`; //Třída bulb je vždy přítomna a podmíněně se přidává bulb--on
return (
<div className={style}></div>
)
};

export default Bulb;