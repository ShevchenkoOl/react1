import { createRoot } from 'react-dom/client';
import { HomePage } from './pages/HomePage';
import './global.css';
import Inbox from './pages/Inbox/Inbox';
import Headr from './pages/Headr/Headr'

createRoot(
  document.querySelector('#app'),
).render(
<>
<Headr />
<Inbox account="radovan.holatko@mejlik.cz" messages={0} />
</>  
);
