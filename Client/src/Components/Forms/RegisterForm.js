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
        firstName: "ahmad",
        lastName: "nahlawi",

        email: "ahmad.alnahlawi@icloud.com",
        userPassword: "ad-nah",

        country:"Germany",
        city:"Hamburg",
        postCode:"22045",
        userAddress:"raja-Ilinauk-Strasse 33",
        phoneNumber: '+4914838449375',
        birthDate: '2019-03-25'
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
    if (!data.userPassword) errors.userPassword = "Password is required";

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
              name='firstName'
              onChange={this.onChange}
              value={this.state.data.firstName}
            />

            <MDBInput
              className="text-dark"
              label="Family Name"
              type="text"
              validate
              name='lastName'
              onChange={this.onChange}
              value={this.state.data.lastName}
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
              name="userPassword"
              onChange={this.onChange}
              value={this.state.data.userPassword}
            />

            <MDBInput
              className="text-dark"
              label="Confirm password"
              type="password"
              //onChange={this.onChange}
            />

            {this.state.errors.userPassword && (
              <ErrorMessage text={this.state.errors.userPassword} />
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
              name='country'
              onChange={this.onChange}
              value={this.state.data.country}
            />

            <MDBInput
              className="text-dark"
              label="City"
              type="text"
              validate
              name='city'
              onChange={this.onChange}
              value={this.state.data.city}
            />

            <MDBInput
              className="text-dark"
              label="Post Code"
              type="text"
              validate
              name="postCode"
              onChange={this.onChange}
              value={this.state.data.postCode}
            />

         

            <MDBInput
              className="text-dark"
              label="Your Address"
              type="text"
              name='userAddress'
              onChange={this.onChange}
              value={this.state.data.userAddress}
            />

            <MDBInput
              className="text-black"
              label="Phone Number"
              type="text"
              name='phoneNumber'
              onChange={this.onChange}
              value={this.state.data.phoneNumber}
            />

            <MDBInput
              className="text-black"
              label="Birth Date"
              type="date"
              name='birthDate'
              onChange={this.onChange}
              value={this.state.data.birthDate}
            />
        </div>
      </div>

      <div className="text-center mb-3">
              <MDBBtn
                type="submit"
                gradient="blue"
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
    </form>
    </div>
  
    );
  }
}

export default RegisterForm;



// <div class="container">
//   <div class="row">
//     <div class="col">Column</div>
//     <div class="col">Column</div>
//   </div>
// </div>