import React, { Component } from 'react'
import LoginForm from '../Forms/LoginForm'
import * as reduxActions from '../../Redux/Actions/auth'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

class LoginPage extends Component {

    render() {

        const submit = (data) => {
            console.log(data)
            return this.props.loginAction(data)/* .then(() => this.props.history.push('/')) */
        }
        
        return (
            <LoginForm submit = {submit} />
        )
    }
}

LoginPage.propTypes = {
/*     history: PropTypes.shape({
     push: PropTypes.func.isRequired
   }).isRequired, */
   loginAction: PropTypes.func.isRequired,
};
export default connect(null, { loginAction: reduxActions.loginAction })(LoginPage)

