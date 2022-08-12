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
export default function Products({ setCart, token}) {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')
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
            {filteredProducts && filteredProducts.map(({imageLink, price, rating, inventory, title, productId}) => (
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
                      <Button onClick={()=> handleAddToCart(productId)} size='sm'>+ Add To Cart</Button>
                    
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