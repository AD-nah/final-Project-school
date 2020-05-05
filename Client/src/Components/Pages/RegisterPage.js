import React, { Component } from 'react'
import RegisterForm from '../Forms/RegisterForm'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import * as reduxActions from '../../Redux/Actions/auth'

class RegisterPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            redirect: false,
        }
    }

    submit = (data) => {
              
        return this.props.registerAction(data).then((res) => {

            this.setState({redirect: true})
            
            this.props.closeRegister()            
         })
    }

    render() {
        return (
            <div>
                {!this.state.redirect ? <RegisterForm submit = {this.submit} /> : <Redirect to = '/products/women'/>}
            </div>
        )
    }
}

RegisterPage.propTypes = {
    registerAction: PropTypes.func.isRequired,
 }
 export default connect(null, { registerAction: reduxActions.registerAction })(RegisterPage)
 
  