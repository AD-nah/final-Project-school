import React, { Component } from 'react'
import ResetPasswordForm from '../Forms/ResetPasswordForm'
import {Spinner} from 'react-bootstrap'
import { connect } from 'react-redux'
import ErrorMessage from '../Messages/ErrorMessage'
import {validateResetPasswordTokenAction} from '../../Redux/Actions/auth'
import {resetPasswordAction}from '../../Redux/Actions/auth'
import PropTypes from 'prop-types'

class ResetPasswordPage extends Component {
    
    constructor(props) {
        super(props)
        
        this.state = {
            loading:true,
            success:false,
            errors : {}
        };
    };
    
    componentDidMount(){
        this.props.validateResetPasswordTokenAction(this.props.match.params.token).then(res => { // status(200)

            this.setState({loading: false, success : true});

        }).catch(err => { // status(401)
            this.setState({loading : false, success : false, errors: err.response.data.invalidToken});
        });
    };

    render() {

        const submit = (data) => {

            return this.props.resetPasswordAction(data).then(res => {
                setTimeout(()=>{
                    return this.props.history.push('/')
                },2000);
            });
        };
    

        return (
            <div>
                <h1  className = "bg-light text-center" style = {{ padding :'6px', height:'60px' }}>Reset You Password</h1>

                    {this.state.loading && (
                        <Spinner animation="border" />
                    )}

                    {!this.state.loading && this.state.success && (
                         <ResetPasswordForm submit = { submit } token = {this.props.match.params.token} />
                    )}

                    {/* {!this.state.loading &&  !this.state.success && (
                        <ErrorMessage text = 'something went wrong' />
                    )} */}

                    {this.state.errors.invalidToken && (
                        <ErrorMessage text = {this.state.errors.invalidToken} />
                    )}


            </div>
        );
    };
};

ResetPasswordPage.propTypes = {

    validateResetPasswordTokenAction : PropTypes.func.isRequired,
    resetPasswordAction : PropTypes.func.isRequired,
    match: PropTypes.shape({
        params: PropTypes.shape({
            token: PropTypes.string.isRequired
        }).isRequired
    }).isRequired,

    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired
};
export default connect(null, { validateResetPasswordTokenAction, resetPasswordAction})(ResetPasswordPage);