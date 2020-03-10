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
            redirect: false,
        }
    }

    
         
        submit = (data) => {
              
           return this.props.loginAction(data).then((res) => {

               this.setState({redirect: true})
               
              this.props.closeLogin()   
            })

    }

    render() {

    return (
    <div>
    {!this.state.redirect ? <LoginForm submit = {this.submit} /> : <Redirect to = '/home'/>}
    </div>
    )
    }
}

LoginPage.propTypes = {
   loginAction: PropTypes.func.isRequired,
};
export default connect(null, { loginAction: reduxActions.loginAction })(LoginPage)

 
