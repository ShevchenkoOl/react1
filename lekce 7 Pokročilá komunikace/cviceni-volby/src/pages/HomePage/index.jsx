import { useState, useEffect } from 'react';
import { Candidate } from '../../components/Candidate';
import './style.css';
import { Castel } from '../../components/Castle/Castel';

export const HomePage = () => {
  const [candidates, setCandidates] = useState([]);
  const [president, setPresident] = useState(null);

  useEffect(() => setCandidates([
    { name: "Ferdinand Mravenec", avatar: '/avatars/candidate01.png' },
    { name: "Markéta Smetana", avatar: '/avatars/candidate02.png' },
    { name: "Beáta Skočdopolová", avatar: '/avatars/candidate03.png' },
    { name: "Lubomír Poňuchálek", avatar: '/avatars/candidate04.png' },
  ]), []);
  
  return (
    <div className="container">
      <Castel />
          
      <h2>Kandidáti</h2>
      <div className="candidate-list">
        {candidates.map((c) => (
          <Candidate 
            key={c.name}
            name={c.name} 
            avatar={c.avatar} 
          />
        ))}
      </div>
    </div>
  );
};
