import React, { Component } from 'react'

import { MDBContainer, MDBCol, MDBInput, MDBBtn, MDBIcon, MDBModalFooter } from 'mdbreact';

export default class ForgotPasswordForm extends Component {
  render() {
    return (

      <div>
        {/* rest the password  form*/}
        <br/>
        <h4 className="text-center">
          Forgot your password ?
        </h4>
        <form accept-charset="UTF-8" role="form" id="login-recordar">
          <fieldset>
            <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">
              We'll send you an email with instructions to choose a new password.
            </p>
              <MDBInput
              className='text-dark'
              label="Your email"
              type="email"
              validate
              success=""
              name='email'
              // onChange={this.onChange}
              // value={this.state.data.email}
            />
            <button type="button" className="btn btn-primary btn-block" id="btn-olvidado">
              Continue
              </button>
            <p className="help-block">
              <a className="text-muted" href="#" id="acceso"><small>Home Page</small></a>
            </p>
          </fieldset>
        </form>
      </div>

    )
  }
}
