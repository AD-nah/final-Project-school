import React, { Component } from 'react'

export default class RestPasswordForm extends Component {
    render() {
        return (

            <div class="card card-outline-secondary">

                <div class="card-header">
                    <h3 class="mb-0">Rest Password</h3>
                </div>

                <div class="card-body">

                    <form class="form" role="form" autocomplete="off">


                        <div class="form-group">
                            <label for="inputPasswordNew">New Password</label>
                            <input type="password" class="form-control" id="inputPasswordNew" required="" />
                            <span class="form-text small text-muted">
                                The password must be 8-20 characters, and must <em>not</em> contain spaces.
                                        </span>
                        </div>
                        <div class="form-group">
                            <label for="inputPasswordNewVerify">Verify</label>
                            <input type="password" class="form-control" id="inputPasswordNewVerify" required="" />
                            <span class="form-text small text-muted">
                                To confirm, type the new password again.
                                        </span>
                        </div>
                        <div class="form-group">
                            <button type="submit" class="btn btn-ouline-success  float-right">Set</button>
                        </div>

                    </form>


                </div>

            </div>
        )
    }
}
