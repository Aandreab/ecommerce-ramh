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
import {useState} from 'react';
import { useNavigate } from "react-router-dom";
export default function Footer() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const handleChange = event => {
    setEmail(event.target.value);
  };
  const handleClick = () => {
    setEmail('');
  };
  const handleNewsletter = async (e) => {
    e.preventDefault();
    navigate("/Newsletter")
  }
  const handleProducts = async (e) => {
    e.preventDefault();
    navigate("/Products")
  }
  const handleAbout = async (e) => {
    e.preventDefault();
    navigate("/About")
  }
  const handlePrivacy = async (e) => {
    e.preventDefault();
    navigate("/PrivacyPolicy")
  }
  return (
    <footer className='footer'>
      <Container className="footer-container">
        <Row className="footer-row">
          <Col className="footer-col">
          <div className='footer-company-header'>CometKaze Comics</div>
          <div className='footer-company-desc'>Welcome to CometKaze Comics! Your one stop shop for all things comic related. We pride ourselves on a robust base of comic titles and categories. Thank you for your interest in our site and we look forward to providing you with the highest quality comics in a timely manner. Now get out there and get your Comic(on)!</div>
          </Col>

          <Col className="footer-col">
          <div className='quicklinks-header'>QUICK LINKS</div>
          <div className='footer-links' onClick={handleProducts}>Comics</div>
          <div className='footer-links'onClick={handleNewsletter}>Newsletter</div>
          <div className='footer-links' onClick={handleAbout}> About Us </div>
          <div className='footer-links' onClick={handlePrivacy}>Privacy Policy</div>
          </Col>

          <Col className="footer-col">
            <h1 className='footer-sign-up-header'> SIGN UP FOR OUR NEWSLETTER</h1>
            <InputGroup className="mb-3">
              <Form.Control placeholder="Email" type="text" onChange={handleChange} value={email}/>
              <Button onClick={handleClick} variant="outline-secondary" id="button-addon2">
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
          <p className="copyright">CometKaze Comics Copyright © 2022</p>
        </Row>
      </Container>
    </footer>
  );
}