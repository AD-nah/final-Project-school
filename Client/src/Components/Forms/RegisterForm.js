import React from "react";
import {

  MDBInput,
  MDBBtn,
  MDBIcon,
} from "mdbreact";
//import { toast } from "react-toastify";

import Validator from "validator";
import ErrorMessage from "../Messages/ErrorMessage";

//Loading Spinner
import { SemipolarLoading } from "react-loadingg";







class RegisterForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        email: "",
        password: ""
      },
      loading: false,
      errors: {}
    };
  }

  onChange = e =>
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value
      }
    });

  onSubmit = e => {
    e.preventDefault();
    const errors = this.validate(this.state.data); // do not do enything else if we have errors
    this.setState({ errors });

    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true });

      return this.props
        .submit(this.state.data)
        .then(res => {
          console.log("auth data is successfully received (RegisterForm.js)");

          return this.setState({ loading: false });
        })
        .catch(err => {
          console.log(
            "receiving auth data is failed (RegisterForm.js) Server Error is: ",
            err
          );

          return this.setState({
            errors: err.response.data.errors,
            loading: false
          });
        });
    }
  };

  validate = data => {
    const errors = {}; // the errors var will be empty if we don`t have errors
    if (!Validator.isEmail(data.email)) errors.email = "Email is required";
    if (!data.password) errors.password = "Password is required";

    return errors;
  };

  render() {
    return (
      <div class="container regFormContainer">
      <form className="regFormContainer" onSubmit={this.onSubmit}>
        <div class="row" >
          <div class="col-md-6">
            {this.state.loading && <SemipolarLoading />}
            {this.state.errors.registerError && (
              <ErrorMessage text={this.state.errors.registerError} />
            )}

            <MDBInput
              className="text-dark"
              label="Name"
              type="text"
              validate
            />

            <MDBInput
              className="text-dark"
              label="Family Name"
              type="text"
              validate
            />

            <MDBInput
              className="text-dark"
              label="Your email"
              type="email"
              validate
              success=""
              name="email"
              onChange={this.onChange}
              value={this.state.data.email}
            />

            {this.state.errors.email && (
              <ErrorMessage text={this.state.errors.email} />
            )}

            <MDBInput
              className="text-dark"
              label="Your password"
              type="password"
              name="password"
              onChange={this.onChange}
              value={this.state.data.password}
            />

            <MDBInput
              className="text-dark"
              label="Confirm password"
              type="password"
              onChange={this.onChange}
            />

            {this.state.errors.password && (
              <ErrorMessage text={this.state.errors.password} />
            )}


        </div>

        {/* ---------------second form-------------- */}

        <div class="col">
          {" "}
           
            <MDBInput
              className="text-dark"
              label="Country"
              type="text"
              validate
            />

            <MDBInput
              className="text-dark"
              label="City"
              type="text"
              validate
            />

            <MDBInput
              className="text-dark"
              label="Plz/Zip"
              type="number"
              validate
              success=""
              name="email"
             
            />

         

            <MDBInput
              className="text-dark"
              label="Your Address"
              type="text"
            
            />

            <MDBInput
              className="text-black"
              label="Phone Number"
              type="Number"
          
            />
        </div>
      </div>

      <div className="text-center mb-3">
              <MDBBtn
                type="submit"
                color="elegant"
                outline
                rounded
                className=" z-depth-1a"
              >
                Register
              </MDBBtn>
            </div>

          <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">
            Register with:
          </p>

          <div className="row my-3 d-flex justify-content-center">
            <MDBBtn
              type="button"
              color="white"
              rounded
              className="mr-md-3 z-depth-1a"
            >
              <MDBIcon
                fab
                icon="facebook-f"
                className="blue-text text-center"
              />
            </MDBBtn>
         
            <MDBBtn
              type="button"
              color="white"
              rounded
              className="z-depth-1a"
            >
              <MDBIcon fab icon="google-plus-g" className="red-text " />
            </MDBBtn>
          </div>
    </form>
    </div>
  
    );
  }
}

export default RegisterForm;