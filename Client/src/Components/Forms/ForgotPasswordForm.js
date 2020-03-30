import React, { Component } from 'react'
import { MDBInput} from 'mdbreact';

export default class ForgotPasswordForm extends Component {
  render() {
    return (

      <div >
        {/* rest the password  form*/}
        <br/>
        <hr/>


        <h4 className="text-center" >
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
            <button type="button" className="btn bg-outline-transparent" id="btn-olvidado">
              Rest it
            </button>
          
          </fieldset>
        </form>
      </div>

    )
  }
}
