import React, { Component } from "react";
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
  MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBBtn, MDBModal, MDBModalHeader, MDBModalBody, 
} from "mdbreact";
import { Switch, Route, Link } from 'react-router-dom';
import Home from './Home/Home'


import Him from './Him/Him';
import Her from './Her/Her';
import News from './News/News'
import Logout from '../Auth/Logout'
import Profile from './Profile/Profile'
import About from './About/About'

import LoginPage from './Pages/LoginPage'
import RegisterPage from './Pages/RegisterPage'

import Chart from './Chart/Chart'

import  Logo  from '../../src/fire.svg';




class Navbar extends Component {
  state = {
    isOpen: false,
    registerModal: false,
    loginModal: false,



  };



  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  // the toggle for the modal login and register 
  registerToggle = () => {
    this.setState({
      registerModal: !this.state.registerModal
    });
  }
  loginToggle = () => {
    this.setState({
      loginModal: !this.state.loginModal
    });
  }


  render() {
    return (
      <div>
        <MDBNavbar color="special-color" dark expand="md">
          
          <MDBNavbarBrand>
          <img style={{width:"40px"}}   src={Logo} alt="Logo" />
            <strong className="white-text font-weight-bold"> 
            Scount</strong>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav left>

              <MDBNavItem >
                <MDBNavLink  className=" font-weight-bold" to='/home'>Home</MDBNavLink>
              </MDBNavItem>


              {/* the products Dropdown */}
              <MDBDropdown >
                <MDBDropdownToggle nav caret>
                  <div className="d-none d-md-inline  font-weight-bold">Products</div>
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem>
                    <Link  className=" font-weight-bold" to="/her">For Her </Link>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <Link  className=" font-weight-bold" to="/him">For Him </Link>
                  </MDBDropdownItem>

                </MDBDropdownMenu>
              </MDBDropdown>



              <MDBNavItem>
                <MDBNavLink className=" font-weight-bold" to='/news'>News</MDBNavLink>
              </MDBNavItem>



              <MDBNavItem>
                <MDBDropdown >
                  <MDBDropdownToggle nav caret>
                    <div className="d-none d-md-inline font-weight-bold">More</div>
                  </MDBDropdownToggle>
                  <MDBDropdownMenu className="dropdown-default">

                    <MDBDropdownItem >
                    <Link className=" font-weight-bold" to="/about">About</Link>
                    </MDBDropdownItem>

                    <MDBDropdownItem >
                    <Link className=" font-weight-bold" to="/#">Payment</Link>
                    </MDBDropdownItem>

                    <MDBDropdownItem >
                    <Link className=" font-weight-bold" to="/#">Policy</Link>
                    </MDBDropdownItem>

                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right>



              {/* the login modals */}
              <MDBBtn onClick={this.loginToggle} className="w-60 p-2" color="white" >Login</MDBBtn>
              <MDBModal isOpen={this.state.loginModal} toggle={this.loginToggle}>
                <MDBModalHeader toggle={this.loginToggle}>Please Login</MDBModalHeader>
                <MDBModalBody>

                  <LoginPage />

                </MDBModalBody>
              </MDBModal>


              {/* the Register modal  */}
              <MDBBtn onClick={this.registerToggle} className="w-60 p-2" color="white" >Register</MDBBtn>
              <MDBModal isOpen={this.state.registerModal} toggle={this.registerToggle}>
                <MDBModalHeader toggle={this.registerToggle}>Please Register</MDBModalHeader>
                <MDBModalBody>  

                  <RegisterPage />
                
                </MDBModalBody>
              </MDBModal>











              {/*the Account dropDown  */}
              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle className="w-78 p-2" caret color="white">
                    Account
                 </MDBDropdownToggle>
                  <MDBDropdownMenu >

                    <MDBDropdownItem>
                      <Link to="/profile"><strong>Profile</strong></Link>
                    </MDBDropdownItem>


                    <MDBDropdownItem>
                      <Link to="/chart"><strong>My-Chart</strong></Link>
                    </MDBDropdownItem>

                    <MDBDropdownItem >
                      <Link to="/logout"><strong>Log-Out</strong></Link>
                    </MDBDropdownItem>




                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        
        </MDBNavbar>



        <Switch>

          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/about" component={About} />

          <Route path="/him" component={Him} />
          <Route path="/her" component={Her} />
          <Route path="/news" component={News} />
          <Route path="/logout" component={Logout} />
          <Route path="/chart" component={Chart} />


        </Switch>

      </div>
    );
  }
}


export default Navbar;