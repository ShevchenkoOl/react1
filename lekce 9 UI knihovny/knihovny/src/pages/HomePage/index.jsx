import './style.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const HomePage = () => {
  return (
    <div className="container">
      {/* <h1>Prazdna stranka</h1>
      <Button variant="primary">Primary</Button> */}
      <Card style={{ width: '18rem', border: "10px solid red" }}>
      <Card.Img variant="top" src="https://picsum.photos/300/200" />
      <Card.Body>
        <Card.Title style={{color: "green"}}>Card Title</Card.Title>
        <Card.Text className='cardText'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" onClick={()=>alert("ahoj!")}>Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  );
};
