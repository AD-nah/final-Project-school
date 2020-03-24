import React from "react";
import { MDBContainer, MDBCol, MDBInput, MDBBtn, MDBIcon, MDBModalFooter } from 'mdbreact';



import Validator from 'validator'
import ErrorMessage from '../Messages/ErrorMessage'
import ForgotPasswordForm  from './ForgotPasswordForm'


//Loading Spinner
import { SemipolarLoading } from 'react-loadingg';
import './Forms.css'





class LoginForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      
      
      data:{
          email:'',
          userPassword:''

      
      
      },
      loading: false,
      errors: {}
    }
  }

  onChange = (e) => this.setState({
    data: {
      ...this.state.data,
      [e.target.name]: e.target.value
    }
  })

  onSubmit = (e) => {
    e.preventDefault()
    const errors = this.validate(this.state.data) // do not do enything else if we have errors 
    this.setState({ errors })

    if (Object.keys(errors).length === 0) {

      this.setState({ loading: true })

      return this.props
        .submit(this.state.data).then((res) => {

          console.log('auth data is successfully received (LoginForm.js)')

          return this.setState({ loading: false })

        }).catch((err) => {

          console.log('receiving auth data is failed (LoginForm.js) Server Error is: ', err)

          return this.setState({ errors: err.response.data.globalErrors, loading: false })

        })
    }
  }

  validate = (data) => {

    const errors = {}; // the errors var will be empty if we don`t have errors 
    if(!Validator.isEmail(data.email)) errors.email = 'Email is required';
    if(!data.userPassword ) errors.userPassword = 'Password is required';  


    return errors;
  }


  render() {
    return (<>
      <MDBContainer>
        
          <MDBCol className= ' w-100 ' lg>
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
                  name = 'userPassword'
                  onChange = {this.onChange}
                  value = {this.state.data.userPassword} 
                />

                {this.state.errors.userPassword &&  <ErrorMessage text = {this.state.errors.userPassword}/>}

                <p className="font-small blue-text d-flex justify-content-end pb-3">
                  Forgot
                  <a href="#!" className="blue-text ml-1">
                    Password?
                  </a>
                </p>

        {/* <MDBCol className=' w-100 ' lg>
          <form onSubmit={this.onSubmit}> */}


            {/* {this.state.loading && <SemipolarLoading />}
            {this.state.errors.authError && <ErrorMessage text={this.state.errors.authError} />}

            <MDBInput
              className='text-dark'
              label="Your email"
              type="email"
              validate
              success=""
              name='email'
              onChange={this.onChange}
              value={this.state.data.email}
            /> */}



            {/* {this.state.errors.email && <ErrorMessage text={this.state.errors.email} />} */}

            {/* <MDBInput
              className='text-dark'
              label="Your password"
              type="password"
              name='password'
              onChange={this.onChange}
              value={this.state.data.password}
            />

            {this.state.errors.password && <ErrorMessage text={this.state.errors.password} />} */}


            {/* <ForgotPasswordForm/> */}


            <div className="text-center mb-3">
              <MDBBtn
              color="elegant"
                outline
                type="submit"
                rounded
                className="btn z-depth-1a"
              >
                Login
                  </MDBBtn>

            </div>



            <div>
              <span className="rememberMe" >Remember me</span>
              <label class="checkbox">
                <input type="checkbox" />
                <span class="success"></span>
              </label>
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
              className="z-depth-1a"
            >
              <MDBIcon fab icon="google-plus-g" className="red-text" />
            </MDBBtn>
          </div>
        </MDBCol>

      </MDBContainer>
    </>)
  }
}


export default LoginForm;










{/* //------------please dont delete it-----------  */}
{/* <form onSubmit={this.onSubmit}>

{this.state.loading && <SemipolarLoading />}
{this.state.errors.authError && <ErrorMessage text={this.state.errors.authError} />}

<div class="form-group">
  <input type="email"   validate class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={this.onChange}
    value={this.state.data.email} />
  <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  {this.state.errors.email && <ErrorMessage text={this.state.errors.email} />}
</div>
<div class="form-group">
  <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" onChange={this.onChange}
    value={this.state.data.password} />
</div>


{this.state.errors.password && <ErrorMessage text={this.state.errors.password} />}

<div>
  <a href="#!" className="blue-text font-small float-right">
    Forgot
    Password?
  </a>
</div>

<br />

<div className="d-flex justify-content-end "> <button type="submit" class="btn btn-primary   ">Login</button></div>

<div>
  <span className="rememberMe" style={{ fontSize: "16px" }}>Remember me</span>
  <label class="checkbox">
    <input type="checkbox" />
    <span class="success"></span>
  </label></div>
</form> */}