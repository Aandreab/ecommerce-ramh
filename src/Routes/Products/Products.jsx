import React from 'react';
import './Products.css'

import comics from "../../data/comics.json"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from '../Footer/Footer'
import Singleproduct from '../Singleproduct/Singleproduct';
export default function Products() {
  return (
    <main>
      <div className='products-container'>
        <Container className="all-comics-container">
          <h1 className='main-comics-header'>COMICS</h1>
          <Row md={4} xs={1} lg={5}>
            {comics.map(item => (
              <Col key={item.id}>
                <Singleproduct{...item} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <Footer />
    </main>
  );
}