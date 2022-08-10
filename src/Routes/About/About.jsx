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
              <h1 className="about-heading">NAME</h1>
              <h1 className="about-description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur</h1>
            </Col>
          </Row>

          <Row className="about-row">
            <Col xs={6}>
              <h1 className="about-heading">NAME</h1>
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
              <h1 className="about-heading">NAME</h1>
              <h1 className="about-description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur</h1>
            </Col>
          </Row>

          <Row className="about-row">
            <Col xs={6}>
              <h1 className="about-heading">NAME</h1>
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
