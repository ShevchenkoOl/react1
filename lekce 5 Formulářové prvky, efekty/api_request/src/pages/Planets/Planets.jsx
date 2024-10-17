import { useEffect, useState } from "react"


export const Planets = () => {

   const [data, setData] = useState([]); 
useEffect(

    
    () => {
        const getPlanets = async () => {
            const responce = await fetch ('https://swapi.dev/api/planets');
            const data = await responce.json();
            console.log(data.results);
            setData(data.results);
        }
        getPlanets();
    }, []);    
    
    return (
<>
<h1>Planets</h1>
{data === null ? <p>Nacitam data...</p> : <ul>{data.map((item)=> <li key="item.name">{item.name}</li>)}</ul>}
</>
    )
}