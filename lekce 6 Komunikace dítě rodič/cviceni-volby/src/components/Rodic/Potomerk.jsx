export const Potomek = ({priZvetseni}) => {

    return (
        <div style={{border: '5px solid tomato', padding: 20, margin: 20}}>
            <h2>Potomek</h2>
            <button onClick={priZvetseni}>Zvetsi Pocet</button>
        </div>
    )
};