import React, { Component } from 'react'

import Validator from 'validator'
import ErrorMessage from '../Messages/ErrorMessage'

import { MDBContainer, MDBCol, MDBInput, MDBBtn, MDBIcon, MDBModalFooter } from 'mdbreact';

export default class ForgotPasswordForm extends Component {
constructor(props) {
  super(props)

  this.state = {
    data: {
      email: ''
    },
    errors: {},
    loading: false
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

      return this.props.submit(this.state.data).then((res) => {
        return this.setState({ loading: false })
      }).catch((err) => {
        return this.setState({ errors : err.response.data.emailNotFoundError , loading: false });
      })
  }

}
validate = (data) => {
  const errors = {}; // the errors var will be empty if we don`t have errors 
  if (!Validator.isEmail(data.email)) errors.email = 'Email is required';
  return errors;
}

  render() {
    return (

      <div >
        {/* rest the password  form*/}
        <br/>
        <hr/>


        <h4 className="text-center" >
          Forgot your password ?
        </h4>
        <form onSubmit = {this.onSubmit} accept-charset="UTF-8" role="form" id="login-recordar">
          <fieldset>
            <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">
              We'll send you an email with instructions to choose a new password.
            </p>
              <MDBInput
              className='text-dark'
              label="Your email"
              type="email"
              validate
              name='email'
               onChange={this.onChange}
               value={this.state.data.email}
            />

            {this.state.errors.email && <ErrorMessage text={this.state.errors.email} />}

            {this.state.errors.notFound && <ErrorMessage text = {this.state.errors.notFound}/>}

            <button type="submit" className="btn btn-primary btn-block" id="btn-olvidado">
              Send
            </button>
   
   

      </fieldset>
        </form>
      </div>

    )
  }
}
