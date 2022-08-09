import React from 'react';
import './Footer.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { BsFillCursorFill } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
export default function Footer() {
  return (
    <footer className='footer'>
      <Container className="footer-container">
        <Row className="footer-row">
          <Col className="footer-col">
          <div className='footer-company-header'>KAMIKAZE COMICS</div>
          <div className='footer-company-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehender</div>
          </Col>

          <Col className="footer-col">
          <div className='quicklinks-header'>QUICK LINKS</div>
          <div className='footer-links'>Comics</div>
          <div className='footer-links'>Newsletter</div>
          <div className='footer-links'> About Us </div>
          <div className='footer-links'>Privacy Policy</div>
          </Col>

          <Col className="footer-col">
            <h1 className='footer-sign-up-header'> SIGN UP FOR OUR NEWSLETTER</h1>
            <InputGroup className="mb-3">
              <Form.Control placeholder="Email" />
              <Button variant="outline-secondary" id="button-addon2">
                <BsFillCursorFill className='curser' />
              </Button>
            </InputGroup>
            <div className='socials-container'>
              <a href="https://www.facebook.com/"><AiFillFacebook className='social-icons' size={30}/></a>
              <a href="https://www.instagram.com/"><AiFillInstagram className='social-icons' size={30}/></a>
              <a href="https://twitter.com/"><AiFillTwitterCircle className='social-icons' size={30}/></a>
              <a href="https://www.linkedin.com/"><AiFillLinkedin className='social-icons' size={30}/></a>
            </div>
          </Col>

        </Row>
        <Row>
          <p className="copyright">Kamikaze Comics Copyright © 2022</p>
        </Row>
      </Container>
    </footer>
  );
}