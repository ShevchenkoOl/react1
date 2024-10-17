import { createRoot } from 'react-dom/client';
import { HomePage } from './pages/HomePage';
import { Planets } from '../src/pages/Planets/Planets';
import './global.css';

createRoot(
  document.querySelector('#app'),
).render(
  <>
{/* <HomePage /> */}
<Planets />
</>
);
