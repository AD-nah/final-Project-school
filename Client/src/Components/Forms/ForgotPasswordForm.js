import React, { Component } from 'react'

export default class ForgotPasswordForm extends Component {
  render() {
    return (

      <div>
        {/* rest the password  form*/}
        <h4 class="">
          Forgot your password?
        </h4>
        <form accept-charset="UTF-8" role="form" id="login-recordar" method="post">
          <fieldset>
            <span class="help-block">
              Email address you use to log in to your account
                <br />
                We'll send you an email with instructions to choose a new password.
              </span>
            <div class="form-group input-group">
              <span class="input-group-addon">
                @
                </span>
              <input class="form-control" placeholder="Email" name="email" type="email" required="" />
              </div>
            <button type="submit" class="btn btn-primary btn-block" id="btn-olvidado">
              Continue
              </button>
            <p class="help-block">
              <a class="text-muted" href="#" id="acceso"><small>Home Page</small></a>
            </p>
          </fieldset>
        </form>
      </div>

    )
  }
}
