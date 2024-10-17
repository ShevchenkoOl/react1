import { createRoot } from 'react-dom/client';
import { HomePage } from './pages/HomePage';
import './global.css';
import { Rodic } from './components/Rodic/Rodic';

createRoot(
  document.querySelector('#app'),
).render(
<>
<Rodic />
{/* <HomePage /> */}
</>
);
