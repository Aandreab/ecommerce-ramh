import React from 'react';
import './Products.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form'
import Footer from '../../components/Footer/Footer';
import { Button, Card } from "react-bootstrap";
import { useState, useEffect } from 'react';
import { getProducts } from '../../api';
import { formatCurrency } from '../../utilities/formatCurrency';
export default function Products() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')
  const filteredProducts = products.filter(({ title, description }) => {
    return description.toLowerCase().includes(searchTerm.toLowerCase()) || title.toLowerCase().includes(searchTerm.toLowerCase())
  })
  const productHandler = async () => {
    try {
      const newProducts = await getProducts();
      setProducts(newProducts)
    } catch (err) {
      console.error(err);
    }
  }
  useEffect(() => {
    productHandler();
  }, [])
  const quantity = 1
  return (
    <main>
      <div className='products-container'>
        <Container className="all-comics-container">
          <h1 className='main-comics-header'>COMICS</h1>
          <Row className="search-container">
            <Form className=" gap-2 searchTerm">
              <Form.Control placeholder="Search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
              <Button variant='outline-secondary'>Search</Button>
            </Form>
          </Row>
          <Row >
            {filteredProducts && filteredProducts.map((product, idx) => (
              <Col key={idx} value={product}>
                <Card className="single-product-card" style={{ width: "18rem" }}>
                  <Card.Img className="card-image" variant="top" src={product.imageLink} />
                  <Card.Body>
                    <Card.Title>
                      <div>{product.title}</div>
                      <div>{formatCurrency(product.price)}</div>
                    </Card.Title>
                    <div>
                      {quantity === 0 ? (
                        <Button size='sm'>+ Add To Cart</Button>
                      ) : (
                        <div className='singleProduct-add-remove'>
                          <Button>-</Button>
                          <div>
                            <span>{quantity}</span>
                            In cart
                          </div>
                          <Button>+</Button>
                          <Button variant='danger' size='sm'>Remove</Button>
                        </div>
                      )}
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <Footer />
    </main>
  );
}