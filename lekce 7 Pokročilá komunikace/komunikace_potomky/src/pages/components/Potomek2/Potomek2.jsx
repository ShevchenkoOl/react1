export const Potomek2 = ({pocet}) => {

    return (
        <div style={{border: '5px solid green', padding: 20, margin: 20}}>
            <h2>Potomek2</h2>
            <button>Zvetsi Pocet</button>
            <p>Текущее значение счётчика: {pocet}</p>
        </div>
    );
};