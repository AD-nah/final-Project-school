import React from "react";
import { MDBContainer, MDBCol, MDBInput, MDBBtn, MDBIcon, MDBModalFooter } from 'mdbreact';



import Validator from 'validator'
import ErrorMessage from '../Messages/ErrorMessage'

//Loading Spinner
import { SemipolarLoading } from 'react-loadingg';






class LoginForm extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      data:{
          email:'ahmad.alnahlawi@icloud.com',
          password:'asdf1234'
      },
      loading: false,
      errors:{}
      }
    }

    onChange = (e) => this.setState({
      data:{
          ...this.state.data, 
          [e.target.name] :e.target.value
      }
    })

  onSubmit = (e) =>{
    e.preventDefault()
    const errors = this.validate( this.state.data ) // do not do enything else if we have errors 
    this.setState({ errors })

    if(Object.keys(errors).length === 0){

        this.setState({ loading: true })

        return this.props
          .submit(this.state.data).then((res) => {

            console.log('auth data is successfully received (LoginForm.js)')

            return this.setState({loading: false})

          }).catch((err) => { 

              console.log('receiving auth data is failed (LoginForm.js) Server Error is: ', err)

            return this.setState({ errors : err.response.data.globalErrors , loading: false })

          })
    }
  }

  validate = (data) =>{

    const errors = {}; // the errors var will be empty if we don`t have errors 
    if(!Validator.isEmail(data.email)) errors.email = 'Email is required';
    if(!data.password ) errors.password = 'Password is required';  

    return errors;
  }

  
  render(){
    return (
      <MDBContainer>
        
          <MDBCol  className= ' w-100 ' lg>
              <form onSubmit = { this.onSubmit }>
             
             
              {this.state.loading && <SemipolarLoading  />}
              {this.state.errors.authError && <ErrorMessage text ={this.state.errors.authError} />}

                <MDBInput
                className='text-dark'
                  label="Your email"
                  type="email"
                  validate
                  success=""
                  name = 'email'
                  onChange = {this.onChange}
                  value = {this.state.data.email} 
                />
                  <br/>
                 

                {this.state.errors.email &&  <ErrorMessage text ={this.state.errors.email}/>}
                
                <MDBInput
                   className='text-dark'
                  label="Your password"
                  type="password"
                  name = 'password'
                  onChange = {this.onChange}
                  value = {this.state.data.password} 
                />

                {this.state.errors.password &&  <ErrorMessage text = {this.state.errors.password}/>}

                <p className="font-small blue-text d-flex justify-content-end pb-3">
                  Forgot
                  <a href="#!" className="blue-text ml-1">
                    Password?
                  </a>
                </p>

                <div className="text-center mb-3">
                  <MDBBtn
                    type="submit"
                    gradient="blue"
                    rounded
                    className="btn-block z-depth-1a"
                  >
                    Login
                  </MDBBtn>
                </div>
              </form>





                <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">

                  or Login in with:
                </p>
                <div className="row my-3 d-flex justify-content-center">
                  <MDBBtn
                    type="button"
                    color="white"
                    rounded
                    className="mr-md-3 z-depth-1a"
                  >
                    <MDBIcon fab icon="facebook-f" className="blue-text text-center" />
                  </MDBBtn>
                  <MDBBtn
                    type="button"
                    color="white"
                    rounded
                    className="mr-md-3 z-depth-1a"
                  >
                    <MDBIcon fab icon="twitter" className="blue-text" />
                  </MDBBtn>
                  <MDBBtn
                    type="button"
                    color="white"
                    rounded
                    className="z-depth-1a"
                  >
                    <MDBIcon fab icon="google-plus-g" className="blue-text" />
                  </MDBBtn>
                </div>
            
              <MDBModalFooter className="mx-5 pt-3 mb-1">
                <p className="font-small grey-text d-flex justify-content-end">
                  Not a member?
                  <a href="#!" className="blue-text ml-1">
                    Sign Up
                  </a>
                </p>
              </MDBModalFooter>
          </MDBCol>
      
      </MDBContainer>
    )
  }
} 


export default LoginForm;