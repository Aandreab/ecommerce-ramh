import * as React from "react";
import "./About.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { images } from "../../constants";
import Footer from '../../components/Footer/Footer';
export default function About() {
  return (
    <main>
      <div className="main-container">
        <Container>
          <h1 className="about-header">MEET THE TEAM</h1>
          <Row className="about-row">
            <Col className="about-col" xs={6}>
              <img
                className="d-block w-100"
                src={images.tempimg}
                alt="photograph"
              />
            </Col>
            <Col xs={6}>
              <h1 className="about-heading">RYAN PETERS</h1>
              <h1 className="about-description">Hi I'm Captain Classroom 30 ( or Ryan for short) I'm a 28 year old from Santa Barbara California who absolutely loves to mess with my bootcamp teachers. I love bodybuilding, reading fantasy books, and spending time with my wife Emily and our son Benjamin. My wife and I are expecting our second child (a daughter) and we could not be more excited. I want to personally thank you for taking the time to go through our CometKaze site and I hope we can provide what you are looking for!</h1>
            </Col>
          </Row>

          <Row className="about-row">
            <Col xs={6}>
              <h1 className="about-heading">AANDREA BARRIOS</h1>
              <h1 className="about-description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur</h1>
            </Col>
            <Col className="about-col" xs={6}>
              <img
                className="d-block w-100"
                src={images.tempimg}
                alt="photograph"
              />
            </Col>
          </Row>
          <Row className="about-row">
            <Col className="about-col" xs={6}>
              <img
                className="d-block w-100"
                src={images.tempimg}
                alt="photograph"
              />
            </Col>
            <Col xs={6}>
              <h1 className="about-heading">HENRY HUYNH</h1>
              <h1 className="about-description">Hi there, I'm Henry Huynh. I'm an ambitious, reliable, and coachable tech enthusiast and full-stack developer. My interests have always had me exploring the tech world and have had me branching out to improve and strengthen my skills. This past year, I decided to take a strong step forward to improve my understanding of technology and software development. So I took a full-stack coding program focused on Front-End and Back-End development learning HTML, CSS, JS, and REACT. I focused on the backend portion of this website designing its database and api routes. There is room for improvement, but I am quite proud of the work my team has put forth.</h1>
            </Col>
          </Row>

          <Row className="about-row">
            <Col xs={6}>
              <h1 className="about-heading">MAX MOIR</h1>
              <h1 className="about-description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur</h1>
            </Col>
            <Col className="about-col" xs={6}>
              <img
                className="d-block w-100"
                src={images.tempimg}
                alt="photograph"
              />
            </Col>
          </Row>

        </Container>
      </div>
      <Footer />
    </main>
  );
}
