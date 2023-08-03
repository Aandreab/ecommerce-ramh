import React from "react";
import "./Home.css";
import { images } from "../../constants";
import Carousel from "react-bootstrap/Carousel";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from '../../components/Footer/Footer';
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
export default function Home() {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate("/Products")
  }
  const handleNewsletter = async (e) => {
    e.preventDefault();
    navigate("/Newsletter")
  }
  return (
    <main>
      <div className="main-container">
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={images.caro}
              alt="First slide"
            />
            <Carousel.Caption className="weekly">
              <Button onClick={handleSubmit} className="weeklybutton" variant="light" size="md" active>
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
          </Carousel.Item>
        </Carousel>
        {/* <Container className="banner">
          sign up or create an account with us
        </Container> */}
        <Container className="shop-character-container">
          <Row className="shop-character-row">
            <Col className="shop-character-col">
            </Col>
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
              <h1 className="home-news-heading">AVENGERS: ENDGAME Directors Recall Jon Favreau Objecting To Them Deciding To Kill Iron Man</h1>
              <h1 className="home-news-heading">Avengers: Endgame directors Joe and Anthony Russo have shared Iron Man helmer Jon Favreau's shocked reaction to learning that they planned to kill Iron Man in the 2019 finale to The Infinity Saga...</h1>
            </Col>
          </Row>
          <Row className="newsletter-row">
            <Col xs={6}>
              <h1 className="home-news-heading">McFarlane Dubs Capullo the Greatest Spawn Artist Ever, Best Batman Artist of His Generation</h1>
              <h1 className="home-news-heading">Spawn creator Todd McFarlane had high praise for Batman artist Greg Capullo at San Diego Comic-Con 2022 during DC's Jim Lee & Friends panel.</h1>
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
          <Row className="newsletter-row">
            <Col className="comicon" xs={6}>

              <img onClick={handleNewsletter}
                className="d-block w-100"
                src={images.comicon}
                alt="photograph"
              />

            </Col>
            <Col xs={6}>
              <h1 className="home-news-heading">MARVEL ENTERTAINMENT REVEALS COMIC-CON SCHEDULE, EXCLUSIVES, MORE</h1>
              <h1 className="home-news-heading">With San Diego Comic-Con just around the corner, Marvel Entertainment returns to San Diego Comic-Con with all-star panels, exclusive announcements, fan-favorite talent signings, and unforgettable fan experiences at the Marvel booth all starting Thursday, July 21 through Sunday, July 24.</h1>
            </Col>
          </Row>
        </Container>



        <Container className="new-releases">
          <h1 className="new-releases-header">NEW RELEASES</h1>
          <Row className="new-releases-row">
            <Col>
              <motion.div
                whileInView={{ opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5, type: "tween" }}
              >
                <img
                  className="new-release-indv"
                  src={images.avengers}
                  alt="photograph"
                />
                <p>AVENGERS: Earths Mightiest Heroes</p>
              </motion.div>
            </Col>
            <Col >
              <motion.div
                whileInView={{ opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5, type: "tween" }}
              >
                <img
                  className="new-release-indv"
                  src={images.darkknight}
                  alt="photograph"
                />
                <p>BATMAN: One Dark Knight</p>
              </motion.div>
            </Col>
            <Col>
              <motion.div
                whileInView={{ opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5, type: "tween" }}
              >
                <img
                  className="new-release-indv"
                  src={images.spiderman}
                  alt="photograph"
                />
                <p>SPIDERMAN: The Sinister Seven</p>
              </motion.div>
            </Col>
            <Col>
              <motion.div
                whileInView={{ opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5, type: "tween" }}
              >
                <img
                  className="new-release-indv"
                  src={images.blackpanther}
                  alt="photograph"
                />
                <p>BLACK PANTHER: Ridley Cabal</p>
              </motion.div>
            </Col>
            <Col>
              <motion.div
                whileInView={{ opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5, type: "tween" }}
              >
                <img
                  className="new-release-indv"
                  src={images.superman}
                  alt="photograph"
                />
                <p>SUPERMAN: Space Age</p>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </main>
  )
}
