import React from "react";
import { Col, Form } from "react-bootstrap";

const StepThree = ({ handleChange }) => {
  return (
    <div className="d-flex flex-column align-items-center">
      <h2 className="mt-2 text-trans">Add Photos & Pricing</h2>
      <h6 className="mt-2 text-trans">Photos, Ownership Details, Price and a Brief Description</h6>
      <p>Adding 4+ photos might increase responses on your property ad upto 21%</p>
      <Form.Group className="w-75 mt-2 flex-column">
      <Form.Label>Ownership</Form.Label>
      {['radio'].map((type) => (
    <div key={`inline-${type}`} className="mb-3">
      <Form.Check
        inline
        label="Owner"
        name="group1"
        type={type}
        id={`inline-${type}-1`}
      />
      <Form.Check
        inline
        label="lease/agent"
        name="group1"
        type={type}
        id={`inline-${type}-2`}
      />
    </div>
  ))}
      </Form.Group>
      <Form.Group className="w-75 mt-2 flex-column">
      <Form.Label>Enter Price per unit:<br/>Total Price:(0*1258 sq.ft=₹ 0.00)</Form.Label>
      <Form.Control
            required
            type="text"
            placeholder="₹ Enter Expected Price"
            name="expected_price"
            onChange={handleChange('expected_price')}
          />
      </Form.Group>
      <Form.Group className="w-75 mt-2 flex-column">
      <Form.Label>Enter Document No.</Form.Label>
      <Form.Control
            required
            type="text"
            placeholder="Document NO"
            name="doc_no"
            onChange={handleChange('doc_no')}
          />
      </Form.Group>
      <Form.Group className="w-75 mt-2 flex-column">
      <Form.Label>Enter Sro</Form.Label>
      <Form.Control
            required
            type="text"
            placeholder="Sro"
            name="sro"
            onChange={handleChange('sro')}
          />
      </Form.Group>
      <Form.Group className="w-75 mt-2 flex-column">
      <Form.Check 
    type="switch"
    id="custom-switch"
    label="Price Negotiable"
    name="price_negotiable"
    onChange={handleChange('price_negotiable')}
  />
      </Form.Group>
      <Form.Group className="w-75 mt-2 flex-column">
        <Form.Label>Detailed Notes</Form.Label><br />
        <textarea
          placeholder="Share some details about your property like spacious rooms, well maintained facilities, Details address and more..."
          name="detailed_notes"
          rows="4"
          cols="50"
          onChange={handleChange('detailed_notes')}
        />
      </Form.Group>
    </div>
  );
};

export default StepThree;
