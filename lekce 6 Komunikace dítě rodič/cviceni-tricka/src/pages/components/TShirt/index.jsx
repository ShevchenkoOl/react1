import './style.css';

const tshirtTypes = {
  normalShortSleeve: 'M 25,80 V 35 L 15,45 5,30 25,10 h 15 c 0,0 0,10 10,10 10,0 10,-10 10,-10 H 75 L 95,30 85,45 75,35 v 45 z',
  tallShortSleeve: 'M 25,90 V 35 L 15,45 5,30 25,10 h 15 c 0,0 0,10 10,10 10,0 10,-10 10,-10 H 75 L 95,30 85,45 75,35 v 55 z',
  normalLongSleeve: 'M 25,80 V 35 L 15,45 V 80 H 5 V 30 L 25,10 h 15 c 0,0 0,10 10,10 10,0 10,-10 10,-10 H 75 L 95,30 V 80 H 85 V 45 L 75,35 v 45 z',
  tallLongSleeve: 'M 25,90 V 35 L 15,45 V 85 H 5 V 30 L 25,10 h 15 c 0,0 0,10 10,10 10,0 10,-10 10,-10 H 75 L 95,30 V 85 H 85 V 45 L 75,35 v 55 z',
  normalNoSleeve: 'M 25,80 V 35 c 5,-5 5,-20 0,-25 h 15 c 0,0 0,10 10,10 10,0 10,-10 10,-10 h 15 c -5,5 -5,20 0,25 v 45 z',
  tallNoSleeve: 'M 25,90 V 35 c 5,-5 5,-20 0,-25 h 15 c 0,0 0,10 10,10 10,0 10,-10 10,-10 h 15 c -5,5 -5,20 0,25 v 55 z',
};

export const TShirt = ({ type, color, print }) => {
  return (
    <div className="tshirt">
      <svg className="tshirt__outline" viewBox="0 0 100 100">
        <path
          fill={color}
          stroke="black"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          d={tshirtTypes[type]}
        />
      </svg>
      <div className="tshirt__print">{print}</div>
    </div>
  );
};
