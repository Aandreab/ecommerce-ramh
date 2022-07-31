import React from "react";
import "./Home.css";
import { images } from "../../constants";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Card from 'react-bootstrap/Card';
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";
// import Image from 'react-bootstrap/Image'
export default function Home() {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate("/Products");
  };
  const handleNewsletter = async (e) => {
    e.preventDefault();
    navigate("/Newsletter");
  };
  return (
    <main>
      <div className="home-container">
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={images.caro}
              alt="First slide"
            />
            <Carousel.Caption className="weekly">
              <Button
                onClick={handleSubmit}
                className="weeklybutton"
                variant="light"
                size="md"
                active
              >
                SHOP NOW
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={images.newbac}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={images.newsletter}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={images.poisonivy}
              alt="Third slide"
            />

            <Carousel.Caption className="poisonivy">
              <div className="poisonivy-text">
                <h1>Join our newsletter!</h1>
                <p>Stay up to date with all of our releases.</p>
              </div>
              <Button
                className="poisonivybutton"
                variant="dark"
                size="md"
                active
              >
                LEARN MORE
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        {/* <Container className="banner">
          sign up or create an account with us
        </Container> */}
        <Container className="shop-character-container">
          <Row className="shop-character-row">
            <Col className="shop-character-col"></Col>
          </Row>
        </Container>

        <Container className="newsletter-container">
          <h1 className="newsletter-header">LATEST NEWS</h1>
          <Row className="newsletter-row-one">
            <Col className="robert" xs={6}>
              <img
                onClick={handleNewsletter}
                className="d-block w-100"
                src={images.robert}
                alt="photograph"
              />
            </Col>
            <Col xs={6}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </Col>
          </Row>
          <Row className="newsletter-row">
            <Col xs={6}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </Col>
            <Col className="spawn" xs={6}>
              <img
                onClick={handleNewsletter}
                className="d-block w-100"
                src={images.spawn}
                alt="photograph"
              />
            </Col>
          </Row>
        </Container>
        <Container className="new-comics">
          <h1 className="new-releases">NEW RELEASES</h1>
          <Row className="new-comics-row">
            <Col>
              <img
                className="d-block w-100"
                src={images.comicon}
                alt="photograph"
              />
            </Col>
            <Col xs={6}>
              <h1 className="home-news-heading">
                MARVEL ENTERTAINMENT REVEALS COMIC-CON SCHEDULE, EXCLUSIVES,
                MORE
              </h1>
              <h1 className="home-news-heading">
                With San Diego Comic-Con just around the corner, Marvel
                Entertainment returns to San Diego Comic-Con with all-star
                panels, exclusive announcements, fan-favorite talent signings,
                and unforgettable fan experiences at the Marvel booth all
                starting Thursday, July 21 through Sunday, July 24.
              </h1>
            </Col>
          </Row>
        </Container>

        <Container className="new-releases">
          <h1 className="new-releases-header">NEW RELEASES</h1>
          <Row className="new-releases-row">
            <Col>
              <img
                className="d-block w-100"
                src={images.darkknight}
                alt="photograph"
              />
              <p>BATMAN: One Dark Knight</p>
            </Col>
            <Col>
              <img
                className="d-block w-100"
                src={images.spiderman}
                alt="photograph"
              />
              <p>SPIDERMAN: The Sinister Seven</p>
            </Col>
            <Col>
              <img
                className="d-block w-100"
                src={images.blackpanther}
                alt="photograph"
              />
              <p>BLACK PANTHER: Ridley Cabal</p>
            </Col>
            <Col>
              <img
                className="d-block w-100"
                src={images.superman}
                alt="photograph"
              />
              <p>SUPERMAN: Space Age</p>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </main>
  );
}
