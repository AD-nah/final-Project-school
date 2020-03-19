import React, { Component } from 'react'

export default class ForgotPasswordForm extends Component {
    render() {
        return (
            <div>
                
            {/* rest the password  form*/}
           
              <p className="forgotpassword">
                <span class="font-small dark-text" style={{ width: '100%' }} data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">Forgot Password?</span>
              </p>
              <div class="collapse" id="collapseExample">
                <div class="card card-body">
                  <div class="form-group">
                    <label for="exampleInputEmail1">Rest Password</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <button type="submit"  class="btn btn-outline-warning">Rest it</button><br />
                  </div>
                </div>
              </div>
         

            </div>
        )
    }
}
