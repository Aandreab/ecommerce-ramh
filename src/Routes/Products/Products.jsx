import React from 'react';
import './Products.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form'
import Footer from '../../components/Footer/Footer';
// import Dropdown from 'react-bootstrap/Dropdown'
import { Button, Card } from "react-bootstrap";
import { useState, useEffect } from 'react';
import { getProducts, addToCart, getCart } from '../../api';
import { formatCurrency } from '../../utilities/formatCurrency';
import Rating from '../../utilities/Rating';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Toast from 'react-bootstrap/Toast';
export default function Products({ setCart, token }) {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')
  const [show, setShow] = useState(false);
  // const [quantity, setQuantity] = useState(0)
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
  const cartHandler = async () => {
    const newCart = await getCart(token);
    setCart(newCart)
  }
  const handleAddToCart = async (e, userId, productPrice, productId, quantity) => {
    e.preventDefault();
    const newAddedCart = await addToCart(userId, productPrice, productId, quantity)
    console.log(newAddedCart)
    setCart(newAddedCart)
  }

  useEffect(() => {
    productHandler();
    cartHandler();
  }, [])

  return (
    <main>
      <Container className='product-nav-container'>
        <Navbar variant="dark" bg="primary" expand="lg">
          <Container>
            <Navbar.Brand href="#home">SHOP BY GENRE</Navbar.Brand>
            <Nav className="justify-content-center flex-grow-1 pe-3">
              <Nav.Link href="#">Superhero</Nav.Link>
              <Nav.Link href="#">Sci-Fi</Nav.Link>
              <Nav.Link href="#">Manga</Nav.Link>
              <Nav.Link href="#">Romance</Nav.Link>
              <Nav.Link href="#">Horror</Nav.Link>
              <Nav.Link href="#">Comedy</Nav.Link>
              <Nav.Link href="#">Fantasy</Nav.Link>
              <Nav.Link href="#">Mystery</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control placeholder="Search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
              <Button variant='outline-dark'>Search</Button>
            </Form>
          </Container>
        </Navbar>
      </Container>
      <div className='products-container'>
        <Container className="all-comics-container">
          <h1 className='main-comics-header'> ALL COMICS</h1>
          <Row >
            {filteredProducts && filteredProducts.map(({ imageLink, price, rating, inventory, title, productId }) => (
              <Col key={productId}>
                <Card className="single-product-card" style={{ width: "18rem" }}>
                  <Card.Img className="card-image" variant="top" src={imageLink} />
                  <Card.Body>
                    <Card.Title>
                      <div>{title}</div>
                      <div>{formatCurrency(price)}</div>
                    </Card.Title>
                    <div className='product-card-rating'>
                      <Rating
                        value={rating}
                        text={`${inventory} reviews`} />
                    </div>
                    <div>
                      <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                        <Toast.Header>
                          <img
                            src="holder.js/20x20?text=%20"
                            className="rounded me-2"
                            alt=""
                          />
                          <strong className="me-auto">item added to cart!</strong>
                        </Toast.Header>
                        <Toast.Body>{title} </Toast.Body>

                      </Toast>
                      <Button onClick={() => {handleAddToCart(productId); setShow(true)}} size='sm'>+ Add To Cart</Button>

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