import React, { Component } from 'react'
import LoginForm from '../Forms/LoginForm'
export default class LoginPage extends Component {

    render() {

        const submit = (data) => {
            console.log(data)
            return this.props.loginAction(userLoginAuthData).then(() => this.props.history.push('/'))

        }
        return (
                <LoginForm submit = {submit} />
        )
    }
}
