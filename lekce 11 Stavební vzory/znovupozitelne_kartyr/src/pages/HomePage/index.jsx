import React from 'react';
import Card from '../HomePage/Card/Card';

const App = () => {
  return (
    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
      <Card
        image="https://via.placeholder.com/300"
        imagePosition="top"
        title="Card Title"
        content={<p>This is the content of the card. You can use any JSX here.</p>}
        footer={<button style={{ padding: '8px 16px', background: '#007bff', color: '#fff', border: 'none', borderRadius: '4px' }}>Click Me</button>}
      />
      <Card
        image="https://via.placeholder.com/300"
        imagePosition="bottom"
        title="Another Card"
        content={<p>Here is some different content!</p>}
      />
      <Card
        title="No Image Card"
        content={<p>This card has no image but still supports all features.</p>}
        footer={<a href="#" style={{ textDecoration: 'none', color: '#007bff' }}>Learn More</a>}
      />
    </div>
  );
};

export default App;