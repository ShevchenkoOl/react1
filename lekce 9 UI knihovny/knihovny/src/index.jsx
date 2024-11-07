import { createRoot } from 'react-dom/client';
import { HomePage } from './pages/HomePage';
import './global.css';
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(
  document.querySelector('#app'),
).render(<HomePage />);
