import "./Newsletter.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { images } from "../../constants";
export default function Newsletter() {
  return (
    <div className="newsletter-container">
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={images.tempimg} />
      <Card.Body>
        <Card.Title>AVENGERS: ENDGAME Directors Recall Jon Favreau Objecting To Them Deciding To Kill Iron Man</Card.Title>
        <Card.Text>
        Avengers: Endgame directors Joe and Anthony Russo have shared Iron Man helmer Jon Favreau's shocked reaction to learning that they planned to kill Iron Man in the 2019 finale to The Infinity Saga... 
        </Card.Text>
        <Button variant="primary">Read More</Button>
      </Card.Body>
    </Card>
    </div>
  );
}
