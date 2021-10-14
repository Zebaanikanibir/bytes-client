import React from 'react';
import { Button } from 'react-bootstrap'
import './Form.css'
const Form = () => {
  return (
    <div className="form ">
      <div className="form-box mt-5">
          <input className="form-box-input" type="email" name="" id="" placeholder="Email Id" />
          <Button variant="light">Subscribe</Button>
      </div>
    </div>
  );
}

export default Form;
