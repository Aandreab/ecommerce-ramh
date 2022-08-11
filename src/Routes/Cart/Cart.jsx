import * as React from "react";
import { Button, Card } from "react-bootstrap";
import './Cart.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { formatCurrency } from '../../utilities/formatCurrency';
import { deleteFromCart} from "../../api";
export default function Cart({ user, token, cart, setCart }) {
    //
    const userOrder = user.orders
    const userCart = cart.orderDetails
    console.log(userOrder)
    console.log(userCart)

    const deleteHandler = async (orderId, productId, productPrice, quantity) => {
        await deleteFromCart(orderId, productId, productPrice, quantity)
        setCart(token)
    }
  
    return (
        <div className="shopping-cart-container">
            <h1> SHOPPING CART</h1>
            <Row>
                {user.orders && user.orders.filter(order => order.orderComplete === false).map((filteredOrder, idex) => {
                    return (
                        <div key={idex} value={filteredOrder}>{filteredOrder.orderDetails.map((cartProduct) => {
                            return (
                                <Col>
                                    <Card key={cartProduct} style={{ width: "18rem" }}>
                                        <Card.Img className="card-image" variant="top" src={cartProduct.imageLink} />
                                        <Card.Body>
                                            <Card.Title>
                                                <div>{cartProduct.title}</div>
                                                <div>{formatCurrency(cartProduct.productPrice)}</div>
                                            </Card.Title>
                                            <Button onClick={()=> deleteHandler(token, cartProduct)} variant="outline-secondary" size="sm">Remove From Cart</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        })}</div>
                    )
                })}
            </Row>
            <Row>
                <Button>Checkout</Button>
            </Row>

        </div>

    );
}