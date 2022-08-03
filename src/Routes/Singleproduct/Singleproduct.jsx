import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Singleproduct.css'

export default function Singleproduct({name, price, image}) {
    return (
     <Card className='single-product-card'>
       <Card.Img className= "card-image" variant = "top" src={image}/>
       <Card.Body>
         <Card.Title>
           <div>{name}</div>
           <div>{price}</div>
         </Card.Title>
         <div>
           <Button size='sm'>+ Add To Cart</Button>
         </div>
       </Card.Body>
     </Card>
    );
  }