import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import StepOne from "./StepOne";
import StepThree from "./StepThree";
import StepTwo from "./StepTwo";
let cInActive = 'inactive';
let cActive = 'active';

const MasterForm = () => {
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  const [values, setValues] = useState({
    looking_to: "",
    what_kind_property: "",
    kind_of_property:"",
    phone: userInfo.phone?userInfo.phone:"",
    owner_name: userInfo.username?userInfo.username:"",
    propert_addr: "",
    no_of_bathrooms: "",
    no_of_bedrooms: "",
    no_of_balconies:"",
    no_of_floors:"",
    property_age:"",
    road:"",
    fur_details:"",
    house_occupied_area:"",
    availability:"",
    ownership:"",
    expected_price:"",
    doc_no:"",
    sro:"",
    price_negotiable:"",
    detailed_notes:""
    
  });
  const [step, setStep] = useState(1);

  const nextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    } else if (step === 3) {
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleChange = (name) => (e) => {
    console.log(name,e)
    setValues({ ...values, [name]: e.target?.value?e.target.value:e});
  };
  console.log(values)

  return (
    <div style={{width:'83%',background:'aqua'}}>
      <div className="container justify-content-center align-items-center" style={{boxShadow:'grey 0px 1px 8px 1px'}}>
        <div className="card" style={{border:'none', background:'aqua'}}>
          {
            {
              1: <StepOne handleChange={handleChange} />,
              2: <StepTwo handleChange={handleChange} />,
              3: <StepThree handleChange={handleChange} />,
            }[step]
          }
          <div className="d-flex justify-content-around px-5 mt-3 mb-3">
            {step > 1 ? (
              <button className="btn btn-info next-prev-button" onClick={prevStep}>
                Back
              </button>
            ) : null}
            <button type="submit" className="btn btn-info next-prev-button" onClick={nextStep}>
              {step === 3 ? "Submit" : "Next"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MasterForm;