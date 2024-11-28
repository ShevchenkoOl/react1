import { createRoot } from 'react-dom/client';
import './global.css';
import App from './pages/HomePage';

createRoot(
  document.querySelector('#app'),
).render(<App />);
