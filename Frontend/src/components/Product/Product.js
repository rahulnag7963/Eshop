import Fade from "react-reveal/Fade";
import React from 'react'
import { Card, Button} from 'react-bootstrap';
const Product = (props) => {
  const {_id, name, description, price, availability, rating, image, category} = props.product;

  return (
    <div className="p-3">
      <Fade top>
        <Card bg='danger' style={{width:'18rem'}} className='rounded'>
          <Card.Img variant="top" src={image} alt={name} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Subtitle>${price}</Card.Subtitle>
            <Card.Subtitle>category: {category}</Card.Subtitle>
            <Card.Text>
              {description}
            </Card.Text>
              <Button href={`/products/${_id}`} variant="outline-dark"> Update </Button>{' '}
              <Button href={`/delete/${_id}`} variant="outline-dark"> Delete </Button> {' '}
          </Card.Body>
         </Card>
       </Fade>   
    </div>
  )
}

export default Product