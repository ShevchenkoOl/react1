import { TShirt } from '../components/TShirt';
import { TShirtSetup } from '../components/TShirtSetup';
import './style.css';

export const HomePage = () => {
  return (
    <div className="container">
      <div className="tshirt-panel">
        <div className="tshirt-panel__tshirt">
          <TShirt type="normalShortSleeve" color="yellow" print="Ahoj světe" />
        </div>
        <div className="tshirt-panel__setup">
          <h2>Možnosti:</h2>
          <TShirtSetup />
        </div>
      </div>
    </div>
  );
};
