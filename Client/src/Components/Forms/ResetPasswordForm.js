import React, { Component } from 'react'
import ErrorMessage from "../Messages/ErrorMessage"
import SuccessMessage from '../Messages/SuccessMessage'

import {Spinner} from 'react-bootstrap'


export default class ResetPasswordForm extends Component {


    
        constructor(props) {
            super(props)
            this.state = {
                data:{
    
                    token : this.props.token,
                    userPassword : '',
                    passwordConfirmation: ''
                },
    
                loading: false,
                success: false,
                errors:{}
            };
        };
    
        onChange = (e) =>{
            
            this.setState({
                    ...this.state, 
                   data: { ...this.state.data, [e.target.name] : e.target.value }
            });
        };
    
        onSubmit = (e) =>{
            e.preventDefault();
    
            const errors = this.validator( this.state.data ); // do not do enything else if we have errors 
    
            this.setState({ errors });
    
            if(Object.keys(errors).length === 0){
    
                this.setState({ loading: true });
    
                return this.props
                                .submit(this.state.data).then(res => {
    
                                    return this.setState({loading: false, success:true});
    
                                }).catch(err => { 
    
                                    return this.setState({ errors : err.response.data.resetPasswordError , loading: false });
                                });
            };
        };
    
        validator = (data) =>{
    
                const errors = {}; // the errors var will be empty if we don`t have errors 
                if( !data.userPassword ) errors.userPassword = 'new Password is required';  
                if(data.userPassword !== data.passwordConfirmation) errors.userPassword = 'Password is not matched'
                
            return errors;
        };
    
        render() {
    
            return (
                <div className = 'container'>
                <form className="form-group" onSubmit = { this.onSubmit } > 
                    {this.state.success && <SuccessMessage text = 'your Password is successfully changed'/>}
                    {this.state.errors.userPassword && <ErrorMessage text = {this.state.errors.userPassword}/>}
    
    
                    <div className="form-group">
                    <label htmlFor = 'userPassword'>Set new Password</label>
                        <input 
                            type = 'password' 
                            id = 'userPassword' 
                            className = 'form-control'
                            
                            value = {this.state.data.userPassword} 
                            onChange = {this.onChange}
                            name = 'userPassword'  
                        />
                    </div>
    
    
                    <div className="form-group">
                    <label htmlFor = 'passwordConfirmation'>Confirm Password</label>
                        <input 
                            type = 'password' 
                            id = 'passwordConfirmation' 
                            className = 'form-control'
                            
                            value = {this.state.data.passwordConfirmation} 
                            onChange = {this.onChange}
                            name = 'passwordConfirmation'  
                        />
                        {this.state.errors.resetPasswordError && <ErrorMessage text = {this.state.errors.resetPasswordError}/>}
                    </div>
    
                    {this.state.loading && <Spinner animation="border" />}
                    <button type = 'submit' className = 'btn btn-info' >Reset Your Password</button>
                </form>
                </div>
            )
        }
    }
  