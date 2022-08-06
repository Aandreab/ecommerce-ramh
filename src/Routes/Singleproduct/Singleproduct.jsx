import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Singleproduct.css'
import { formatCurrency } from '../utilities/formatCurrency';
export default function Singleproduct({name, price, image}) {
  //const quantity = 0
    return (
     <Card className='single-product-card'>
       <Card.Img className= "card-image" variant = "top" src={image}/>
       <Card.Body>
         <Card.Title>
           <div>{name}</div>
           <div>{formatCurrency(price)}</div>
         </Card.Title>
         <div>
           <Button size='sm'>+ Add To Cart</Button>
         </div>
       </Card.Body>
     </Card>
    );
  }