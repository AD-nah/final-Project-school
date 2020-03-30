import React from "react";



import { MDBContainer, MDBCol, MDBInput, MDBBtn, MDBIcon, } from 'mdbreact';



import Validator from 'validator'
import ErrorMessage from '../Messages/ErrorMessage'
import ForgotPasswordForm from './ForgotPasswordForm'


//Loading Spinner
import { SemipolarLoading } from 'react-loadingg';
import './Forms.css'





class LoginForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: {
        email: '',
        userPassword: ''
      },
      loading: false,
      errors: {},
      fromIsOpen: false,
      showHide: 'Forgot Password'
    }
  }

  onChange = (e) => this.setState({
    data: {
      ...this.state.data,
      [e.target.name]: e.target.value
    }
  })

  onSubmit = (e) => {
    e.preventDefault()
    const errors = this.validate(this.state.data) // do not do enything else if we have errors 
    this.setState({ errors })

    if (Object.keys(errors).length === 0) {

      this.setState({ loading: true })

      return this.props
        .submit(this.state.data).then((res) => {

          console.log('auth data is successfully received (LoginForm.js)')

          return this.setState({ loading: false })

        }).catch((err) => {

          console.log('receiving auth data is failed (LoginForm.js) Server Error is: ', err)

          return this.setState({ errors: err.response.data.globalErrors, loading: false })

        })
    }
  }

  validate = (data) => {

    const errors = {}; // the errors var will be empty if we don`t have errors 
    if (!Validator.isEmail(data.email)) errors.email = 'Email is required';
    if (!data.userPassword) errors.userPassword = 'Password is required';
    return errors;
  }


  render() {

    const showForgotPasswordForm = () => {
      this.setState({ fromIsOpen: !this.state.fromIsOpen })

      if (!this.state.fromIsOpen) {
        this.setState({ showHide: 'Close' })
      } else {
        this.setState({ showHide: 'Forgot Password' })
      }
    }



    return (<>
      <MDBContainer>

        <MDBCol className=' w-100 '>
          <form onSubmit={this.onSubmit}>


            {this.state.loading && <SemipolarLoading />}
            {this.state.errors.authError && <ErrorMessage text={this.state.errors.authError} />}

            <MDBInput
              className='text-dark'
              label="Your email"
              type="email"
              validate
              success=""
              name='email'
              onChange={this.onChange}
              value={this.state.data.email}
            />
            <br />


            {this.state.errors.email && <ErrorMessage text={this.state.errors.email} />}

            <MDBInput
              className='text-dark'
              label="Your password"
              type="password"
              name='userPassword'
              onChange={this.onChange}
              value={this.state.data.userPassword}
            />

            {this.state.errors.userPassword && <ErrorMessage text={this.state.errors.userPassword} />}

            {/* <p className="font-small blue-text d-flex justify-content-end pb-3">
            </p> */}


            <div className="text-center mb-3">
              <MDBBtn
                color="elegant"
                outline
                type="submit"
                rounded
                className="btn z-depth-1a"
              > Login</MDBBtn>

            </div>

            {/*remember me  checkbox */}
            {/* <div>
              <span className="rememberMe">Remember me</span>
              <label class="checkbox">
                <input type="checkbox" />
                <span class="success"></span>
              </label>
            </div> */}
          </form>

          <div className='text-center'>
            <button className='btn '  onClick={showForgotPasswordForm}>{this.state.showHide}</button>
          </div>

          {this.state.fromIsOpen ?  <ForgotPasswordForm /> : null}

          <hr/>

          <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">

            or Login in with:
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
              className="z-depth-1a"
            >
              <MDBIcon fab icon="google-plus-g" className="red-text" />
            </MDBBtn>
          </div>
        </MDBCol>

      </MDBContainer>


    </>)

  }
}


export default LoginForm;