import "./style.css";
import { useState, useEffect } from 'react';
export const HomePage = () => {

  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  
  useEffect(() => {          //useEffect принимает два параметра, первый - функция, второй - список;
   console.log("useEffect");
   const loadData = async () => {
    console.log(date);
    const [y, m, d] = date.split("-"); //раздкляем строку на символ "-"
    const res = await fetch(`https://nameday.abalin.net/api/V1/getdate?day=${d}&month=${m}`);
    const data = await res.json();
    console.log(data.nameday.cz);
    setName(data.nameday.cz);
  };
  loadData();
  }, [date]);

  return (
    <div className="container">
      <input type="date" value={date} onChange={e=>setDate(e.target.value)}/>
     <div>Svatek dnes ma: {name}</div>
     {/* <button onClick={_ => loadData()}>Click</button> */}
    </div>
  );
};
