import { createRoot } from 'react-dom/client';
import './global.css';
import Bulb from './Bulb/Bulb';

createRoot(
  document.querySelector('#app'),
).render(
  <>
  <Bulb on={false} />
  <Bulb on={true} />
  <Bulb on={false} />
  <Bulb on={true} />
  </>
);
