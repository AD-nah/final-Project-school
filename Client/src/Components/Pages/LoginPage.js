import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import LoginForm from '../Forms/LoginForm'
import {connect} from 'react-redux'
import * as reduxActions from '../../Redux/Actions/auth'

class LoginPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            redirect: null
        }
    }

    
         
        submit = (userLoginAuthData) => {
              
           return this.props.loginAction(userLoginAuthData).then((res) => {
           
            this.setState({redirect: <Redirect to = '/her'/>})

        })

    }

    render() {

        return (
        <div>
            {this.state.redirect}
            <LoginForm submit = {this.submit} />
        </div>
        )
    }
}

LoginPage.propTypes = {
   loginAction: PropTypes.func.isRequired,
};
export default connect(null, { loginAction: reduxActions.loginAction })(LoginPage)

 
