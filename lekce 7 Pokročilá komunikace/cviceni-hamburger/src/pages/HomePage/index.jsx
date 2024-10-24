import { useState } from 'react';
import { MenuItem } from '../../components/MenuItem';
import './style.css';

export const HomePage = () => {

const [menuOpened, setMenuOpened] = useState(false);
const [selectedItem, setSelectedItem] = useState('');

const handleClick = () => {
  setMenuOpened(!menuOpened);
  console.log(menuOpened);
};

const handleSelectItem = (item) => {
  console.log(`Selected item: ${item}`);
  setMenuOpened(false);
  setSelectedItem(item);
};

  return (
    <>
      <header>
        <div className={`${menuOpened ? "menu" : "menu--closed"}`}>
          <button className="menu__btn" onClick={handleClick}></button>
          <div className="menu__items">
            <MenuItem text="Domů" onSelect={()=> handleSelectItem('Domů')}/>
            <MenuItem text="Naše nabídka" onSelect={()=> handleSelectItem("Naše nabídka")}/>
            <MenuItem text="Náš tým" onSelect={()=> handleSelectItem("Náš tým")}/>
            <MenuItem text="Blog" onSelect={()=> handleSelectItem("Blog")}/>
            <MenuItem text="Kontakt" onSelect={()=> handleSelectItem("Kontakt")}/>
          </div>
        </div>
      </header>
      <main>
        <h1>{selectedItem}</h1>
      </main>
    </>
  );
};
