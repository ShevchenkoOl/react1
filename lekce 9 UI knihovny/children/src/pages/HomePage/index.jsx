import { Adds } from '../../components/Adds';
import { Calendar } from '../../components/Calendar';
import { Content } from '../../components/Content';
import { Sidebar } from '../../components/Sidebar';
import { Weather } from '../../components/Weather';
import './style.css';

export const HomePage = () => {
  return (
    <div className="container">
      <Sidebar>
            <Weather />
            <Calendar />
            <Adds />
      </Sidebar>
      <Content />
    </div>
  );
};
