import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Container } from 'react-bootstrap'
import axios from 'axios';
import { BASE_URL, DEFAULT_OPTIONS } from '../constants/userConstants'
import Product from './Product';

const MyListings = ({ match }) => {
  const [lat, setLat] = useState();
  const [lng, setLang] = useState();
  const [proList, setProList] = useState([]);
  const [isProperty, setIsProperty] = useState(false);

  useEffect(() => {
    axios.get(`${BASE_URL}/api/listings`, DEFAULT_OPTIONS).then((res) => {
      console.log(res);
      setProList(res.data.listings);
    })
  }, [lat, lng])


  const addProperty = () => {
    setIsProperty(true);
  }

  return (
    <div>
      <Row>
            {proList.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
    </div>
  )
}

export default MyListings
