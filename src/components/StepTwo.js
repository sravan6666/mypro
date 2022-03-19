import React from "react";
import { Col, Form, FormControl, InputGroup } from "react-bootstrap";
import * as prop_dtls from '../constants/property';

const StepTwo = ({ handleChange }) => {
  console.log(handleChange.first_name);
  const noOfBathrooms = [0, 1, 2, 3, 4, 5];
  return (
    <div className="d-flex flex-column align-items-center" style={{ display: 'flex !important' }}>
      <h2 className="mt-2 text-trans">Add Property Details</h2>
      <h6 className="mt-2 text-trans">selected property:{ }</h6>
      <Form.Group className="w-75 mt-4 flex-column">
        <Form.Label>Property Address</Form.Label><br />
        <textarea
          placeholder="Enter Detailed Address, How to reach your property Example:
          City: Hyderabad "
          name="propert_addr"
          rows="4"
          cols="50"
          onChange={handleChange('propert_addr')}
        />
      </Form.Group>
      <Form.Group className="w-75 mt-2">
        <Form.Label>No. of Bathrooms</Form.Label>
        <Form.Control as='select' aria-label="Default select example" onChange={handleChange('no_of_bathrooms')}>
          <option>Select Bathrooms</option>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </Form.Control>
      </Form.Group>
      <Form.Group className="w-75 mt-2">
        <Form.Label>No. of Bedrooms</Form.Label>
        <Form.Control as='select' aria-label="Default select example" onChange={handleChange('no_of_bedrooms')}>
          <option>Select Bedrooms</option>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </Form.Control>
      </Form.Group>
      <Form.Group className="w-75 mt-2">
        <Form.Label>No. of Balconies</Form.Label>
        <Form.Control as='select' aria-label="Default select example" onChange={handleChange('no_of_balconies')}>
          <option>Select Balconies</option>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </Form.Control>
      </Form.Group>
      <Form.Group className="w-75 mt-2">
        <Form.Label>No. of Floors</Form.Label>
        <Col><input type="text" name="no_of_floors" style={{ width: '30px' }} onChange={handleChange('no_of_floors')} /></Col>
      </Form.Group>
      <Form.Group className="w-75 mt-2">
        <Form.Label>Property Age in years</Form.Label>
        <Col><input type="text" name="property_age" style={{ width: '30px' }} onChange={handleChange('property_age')} /></Col>
      </Form.Group>
      <Form.Group className="w-75 mt-2">
        <Form.Label>Road</Form.Label>
        <Col><input type="text" name="road" style={{ width: '30px' }} onChange={handleChange('road')} /> ft</Col>
      </Form.Group>
      <Form.Group className="w-75 mt-2 flex-column">
        <Form.Label>Furniture details</Form.Label>
        <Form.Control as='select' aria-label="Default select example" name="fur_details" onChange={handleChange('fur_details')}>
          <option>Select Furniture</option>
          <option value="0">{prop_dtls.default.furnishingTypes.Furnished}</option>
          <option value="1">{prop_dtls.default.furnishingTypes.semiFurnished}</option>
          <option value="2">{prop_dtls.default.furnishingTypes.unFurnished}</option>
        </Form.Control>


      </Form.Group>
      <Form.Group className="w-75 mt-2 flex-column">
        <InputGroup>
          <FormControl
            placeholder="House Occupied Area"
            aria-label="House Occupied Area"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Text id="basic-addon2" name="house_occupied_area" onChange={handleChange('house_occupied_area')}>Sq.ft</InputGroup.Text>
        </InputGroup>
      </Form.Group>
      <Form.Group className="w-75 mt-2 flex-column">
        <Form.Label>Availability</Form.Label>
        <Form.Control as='select' aria-label="Default select example" onChange={handleChange('availability')}>
          <option>Select Availability</option>
          <option value="0">{prop_dtls.default.availability.readyToMove}</option>
          <option value="1">{prop_dtls.default.availability.underConstruction}</option>
        </Form.Control>

      </Form.Group>
    </div>
  );
};

export default StepTwo;
