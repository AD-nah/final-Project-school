import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';

const LoginForm = () => {
return (

    <MDBContainer className= 'border border-dark'>
    <MDBCol col="">
      <form>
        <p className="h5 text-center mb-4">Log-in</p>
        <div className="grey-text">
         
          <MDBInput label="Your email" icon="envelope" group type="email" validate error="wrong"
            success="right" />
     
          <MDBInput label="Your password" icon="lock" group type="password" validate />
        </div>
      </form>
    </MDBCol>
</MDBContainer>
);
};

export default LoginForm;