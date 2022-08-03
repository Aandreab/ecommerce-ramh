import React from 'react';
import { Card } from 'react-bootstrap';
import './Singleproduct.css'

export default function Singleproduct({name, price, image}) {
    return (
     <Card>
       <Card.Img variant = "top" src={image}/>
       <Card.Body>
         <Card.Title>
           <div>{name}</div>
           <div>{price}</div>
         </Card.Title>
       </Card.Body>
     </Card>
    );
  }