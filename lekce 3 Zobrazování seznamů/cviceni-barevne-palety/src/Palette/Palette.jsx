import React from 'react';
import SchemeColor from '../SchemeColor/SchemeColor';
import '../style.css';

const Palette = ({ paletteData, index }) => {
    const layoutClass = index % 2 === 0 ? 'palette--image-left' : 'palette--image-right';
  return (
    <div className={`palette ${layoutClass}`}>
      <div className={`palette-scheme palette-scheme--${paletteData.direction}`}>
        <img className="scheme-image" src={paletteData.image} alt={paletteData.name} />
        <div className="scheme-colors">
          {paletteData.colors.map((color) => (
            <SchemeColor key={color} color={color} />
          ))}
        </div>
      </div>
      <div className="palette-info">
        <h2>{paletteData.name}</h2>
        <p>{paletteData.description}</p>
        <p>Photo by <a href={paletteData.attribution.url} target="_blank" rel="noopener noreferrer">{paletteData.attribution.name}</a>.</p>
      </div>
    </div>
  );
};

export default Palette;
