import React from "react";
import { MDBContainer, MDBCol, MDBInput, MDBBtn, MDBIcon} from 'mdbreact';


const RegisterForm = () => {
  return (
    <MDBContainer>
      
        <MDBCol  className= ' w-100 ' lg>

              <MDBInput
                label="Name"
                group
                type="text"
                success="Accepted.."
              />



              <MDBInput
                label="Email"
                group
                type="email"
                validate
                error="Email Wrong"
                success="Accepted.."
              />
              
              
              <MDBInput
                label="City"
                group
                type="text"
                validate
                success="Accepted.."
              />
              
              
              <MDBInput
              label="Plz/Zip"
              group
              type="number"
              validate
              success="Accepted.."
              />


              <MDBInput
              label="Country"
              group
              type="text"
              validate
              success="Accepted.."
              />



              <MDBInput
                label="Your password"
                group
                type="password"
                validate
                containerClass="mb-0"
              />
              
              
              <MDBInput
                label="Confirm password"
                group
                type="password"
                validate
                containerClass="mb-0"
              />
                  

              <div className="text-center mb-3">
                <MDBBtn
                  type="button"
                  gradient="blue"
                  rounded
                  className="btn-block z-depth-1a"
                >
                Register
                </MDBBtn>
              </div>



              <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">

                or Register in with:
              </p>



              <div className="row my-3 d-flex justify-content-center">
                <MDBBtn
                  type="button"
                  color="white"
                  rounded
                  className="mr-md-3 z-depth-1a"
                >
                  <MDBIcon fab icon="facebook-f" className="blue-text text-center" />
                </MDBBtn>


                <MDBBtn
                  type="button"
                  color="white"
                  rounded
                  className="mr-md-3 z-depth-1a"
                >
                  <MDBIcon fab icon="twitter" className="blue-text" />
                </MDBBtn>


                <MDBBtn
                  type="button"
                  color="white"
                  rounded
                  className="z-depth-1a"
                >
                  <MDBIcon fab icon="google-plus-g" className="blue-text" />
                </MDBBtn>
              </div>
        </MDBCol>
    </MDBContainer>
  );
};

export default RegisterForm;




// import React from "react";
// import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';

        // <form>
//                 <p className="h4 text-center py-4">Sign up</p>
//                 <div className="grey-text">
//                   <MDBInput
//                     label="Your name"
//                     icon="user"
//                     group
//                     type="text"
//                     validate
//                     error="wrong"
//                     success="right"
//                   />
//                   <MDBInput
//                     label="Your email"
//                     icon="envelope"
//                     group
//                     type="email"
//                     validate
//                     error="wrong"
//                     success="right"
//                   />
//                   <MDBInput
//                     label="Confirm your email"
//                     icon="exclamation-triangle"
//                     group
//                     type="text"
//                     validate
//                     error="wrong"
//                     success="right"
//                   />
//                   <MDBInput
//                     label="Your password"
//                     icon="lock"
//                     group
//                     type="password"
//                     validate
//                   />
//                 </div>
//                 <div className="text-center py-4 mt-3">
//                   <MDBBtn color="cyan" type="submit">
//                     Register
//                   </MDBBtn>
//                 </div>
//               </form>
//            

