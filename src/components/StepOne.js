import React from "react";
import { Col, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import * as prop_dtls from '../constants/property';
import { Radio, RadioGroup } from 'react-radio-group'

const StepOne = ({ handleChange }) => {
  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  const propfor = Object.keys(prop_dtls.default.propertySellingType);
  // console.log(handleChange)
  return (
    <div className="d-flex flex-column align-items-center">
      <h2 className="mt-2 text-trans">Add Basic Details</h2>
      <h6 className="mt-2 text-trans">Your Intent, Property type & contact details</h6>
      <Form noValidate>
        <Form.Label>You're looking to?</Form.Label>
        <RadioGroup onChange={handleChange('looking_to')} style={{display:'flex'}}>
          <div className="radio-button-background">
            <Radio value="sell" className="radio-button" />Sell
          </div>
          <div className="radio-button-background">
            <Radio value="rent" className="radio-button" />Rent/Lease
          </div>
        </RadioGroup>
        <Form.Label>What kind of property</Form.Label>
        <RadioGroup onChange={handleChange('what_kind_property')} style={{display:'flex'}}>
          <div className="radio-button-background">
            <Radio value="residential" className="radio-button" />Residential
          </div>
          <div className="radio-button-background">
            <Radio value="commercial" className="radio-button" />Comercial
          </div>
          <div className="radio-button-background">
            <Radio value="agriculture" className="radio-button" />Agriculture
          </div>
        </RadioGroup>

        <Form.Label>Please select the kind of property</Form.Label>
        <Form.Control as='select' aria-label="Default select example" onChange={handleChange('kind_of_property')}>
          <option>Select Property</option>
          <option value="house">{prop_dtls.default.residential.house}</option>
          <option value="villa">{prop_dtls.default.residential.villa}</option>
          <option value="apartment">{prop_dtls.default.residential.apartment}</option>
          <option value="openPlot">{prop_dtls.default.residential.openPlot}</option>
        </Form.Control>

        <Form.Group controlId="validationCustom01">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Phone"
            name="phone"
            onChange={handleChange('phone')}
            defaultValue={userInfo.phone}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="validationCustom02">
          <Form.Label>Property Owner Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Property Owner Name"
            name="owner_name"
            defaultValue={userInfo.username}
            onChange={handleChange('owner_name')}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Form>
    </div>
  );
};

export default StepOne;
