import { createRoot } from 'react-dom/client';
import { HomePage } from './pages/HomePage';
import './style.css';
import './global.css';

// createRoot(
//   document.querySelector('#app'),
// ).render(<HomePage />);

const plushy1 = {
  name: 'Silvestr',
  image: 'https://kodim.cz/cms/assets/czechitas/react1/lekce/uvod-do-reactu/cv-prvni-aplikace/plysaci/elephant.jpg',
  text: 'Silvestr rád pozoruje dění za oknem a upřímně se usmívá na všechno kolemjdoucí.',
};
const plushy2 = {
  name: 'Ctirad',
  image: 'https://kodim.cz/cms/assets/czechitas/react1/lekce/uvod-do-reactu/cv-prvni-aplikace/plysaci/mouse.jpg',
  text: 'Ctirad tráví svůj čas v blízkosti lednice a s očekáváním pozoruje její bílé dveře.',
};

// vytvoříme proměnnou obsahu pomocí JSX
const content = (
  <>
    <h1>Plyšáci</h1>
    <div className="plushies">
    <div className="plushy">
  <img className="plushy__image" src={plushy1.image} />
  <h2 className="plushy__name">{plushy1.name}</h2>
  <p className="plushy__text">{plushy1.text}</p>
</div>
<div className="plushy">
  <img className="plushy__image" src={plushy2.image} />
  <h2 className="plushy__name">{plushy2.name}</h2>
  <p className="plushy__text">{plushy2.text}</p>
</div>
    </div>
  </>
);

// Použití content ve funkci vykreslení
createRoot(document.querySelector('#app')).render(content);
