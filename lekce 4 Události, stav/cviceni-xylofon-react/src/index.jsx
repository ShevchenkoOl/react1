import { createRoot } from 'react-dom/client';
import { Xylofon } from './components/Xylofon';
import './global.css';

createRoot(
  document.querySelector('#app'),
).render(<Xylofon />);