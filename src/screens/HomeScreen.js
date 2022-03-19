import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Container, Card } from 'react-bootstrap'
import axios from 'axios';
import { BASE_URL, DEFAULT_OPTIONS } from '../constants/userConstants'
import MasterForm from '../components/MasterForm';
import no_product from '../assets/no_properties.png';

const HomeScreen = ({ match }) => {
  const [lat, setLat] = useState();
  const [lng, setLang] = useState();
  const [proList, setProList] = useState([]);
  const [isProperty, setIsProperty] = useState(false);
  const dispatch = useDispatch()

  useEffect(() => {
    if (!navigator.geolocation) {
    } else {
      navigator.geolocation.getCurrentPosition((position) => {
        setLat(position.coords.latitude);
        setLang(position.coords.longitude);
        console.log(position.coords.latitude, position.coords.longitude)
      });
    }
    axios.get(`${BASE_URL}/api/property/getlistings?lat=${lat}&lng=${lng}&dist=30000&page=0&limit=10&price=1000&sort={"distance":1}`, DEFAULT_OPTIONS).then((res) => {
      console.log(res);
      setProList(res.data.listings);
    })
  }, [lat, lng])


  const addProperty = () => {
    setIsProperty(true);
  }

  return (
    <>
    <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
      {!isProperty&&<Card.Img src={no_product} variant='top' alt='Image not found' style={{width:250}}/>}
      {isProperty&&<MasterForm></MasterForm>}
    </div>
    <div style={{display:'flex', position:'absolute', top:111, marginLeft:'-33px'}}>
    <i className='fas fa-plus-circle'></i><h6 style={{cursor:'pointer', textTransform:'none', fontFamily:'Metropolis', fontWeight:600}} onClick={addProperty}>Add Property</h6>
    </div>
    </>
  )
}

export default HomeScreen
