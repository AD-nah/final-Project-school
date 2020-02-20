import React from "react";
import { MDBContainer, MDBCol, MDBBtn, MDBInput } from 'mdbreact';

const RegisterForm = () => {
return (
<MDBContainer className= 'border border-dark'>
    <MDBCol >
      <form>
       
        <div className="grey-text">
          <MDBInput label="Your name" icon="user" group type="text" validate error="wrong"
            success="right" />
          <MDBInput label="Your email" icon="envelope" group type="email" validate error="wrong"
            success="right" />

          <MDBInput label="Your password" icon="lock" group type="password" validate />

          <MDBInput label="Confirm your password" icon="exclamation-triangle" group type="text" validate
            error="wrong" success="right" />
         
        </div>
        <div className="text-center">
          <MDBBtn color="primary">Register</MDBBtn>
        </div>
      </form>
    </MDBCol>
</MDBContainer>
);
};

export default RegisterForm;