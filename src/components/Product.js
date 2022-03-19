import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

const Product = ({ product }) => {
  console.log(product)
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/product/${product.id}`}>
        <Card.Img src={product.images?product.images[0]:''} variant='top' alt='Image not found'/>
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        {/* <Card.Text as='div'>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text> */}
        <Card.Text as='h5'>{product.propertyType}</Card.Text>
        <Card.Text as='h5'>{product.area} {product.units}</Card.Text>
        <Card.Text as='h5'>{product.formattedAddress}</Card.Text>
        <Card.Text as='h5'>₹{product.price}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product
