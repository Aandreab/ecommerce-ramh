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
          <Row className="about-row">
            <h1 className="about-header">ABOUT US</h1>
            <Col className="about-col">
              <h1 className="about-heading">Welcome to CometKaze Comics! Your one stop shop for all things comic related. We pride ourselves on a robust base of comic titles and categories. Thank you for your interest in our site and we look forward to providing you with the highest quality comics in a timely manner. Now get out there and get your Comic(on)!</h1>
            </Col>
          </Row>
          <Row className="about-row">
            <h1 className="about-header">MEET THE TEAM</h1>
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
              <h1 className="about-description">
                Hi everyone! I'm Aandrea and I’m from San Jose California. I graduated college at the end of 2020 with a bachelors of science in Kinesiology and quickly after graduating realized that I might've chosen the wrong major (crazy right).
                After lots of thought and self reflection, I decided to join Fullstack Academy.
                In these last few months I have done things I could have never imagined possible for myself. I found a love for coding and I have learned so much about programming. I’m super excited to see what the future holds for myself and hope you all enjoy our e-commerce website. </h1>
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
              <h1 className="about-description">My name is Max Moir and I am a Full Stack Academy Graduate. I decided it was time for a career change and found Fullstack . I have fallen in love with coding and couldnt be more happy with my decision. When Im not studying or working you can find me on the golf course or the beach. I live on the central coast of California so the weather is always beautiful. Im excited for a long knowledge filled career in the programming  and have worked really hard on this Comic book site. Enjoy!</h1>
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
