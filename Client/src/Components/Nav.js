import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import { Switch, Route } from 'react-router-dom';
import Home from './Home/Home'
import Signin from './Signin/Signin'
import Register from './Register/Register'

class Navbar extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    <div>
      <MDBNavbar color="primary-color" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">Scount</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>

            <MDBNavItem >
              <MDBNavLink to = '/home'>Home</MDBNavLink>
            </MDBNavItem>
{/* 
            <MDBNavItem>
              <MDBNavLink to = '/proucts'>Products</MDBNavLink>
            </MDBNavItem> */}



            <MDBDropdown >
                <MDBDropdownToggle nav caret>
                  <div className="d-none d-md-inline">Products</div>
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem >Mens</MDBDropdownItem>
                  <MDBDropdownItem>Ladies</MDBDropdownItem>
                  <MDBDropdownItem >Payment</MDBDropdownItem>
                 
                </MDBDropdownMenu>
              </MDBDropdown>







            <MDBNavItem>
              <MDBNavLink to='/deals'>News</MDBNavLink>
            </MDBNavItem>






            <MDBNavItem>
              <MDBDropdown >
                <MDBDropdownToggle nav caret>
                  <div className="d-none d-md-inline">More</div>
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem >About</MDBDropdownItem>
                  <MDBDropdownItem>Payment</MDBDropdownItem>
                  <MDBDropdownItem >Policy</MDBDropdownItem>
                 
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>

            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="/register">
                  <MDBNavLink to="/register" ><strong>Register</strong></MDBNavLink>
              </MDBNavLink>
            </MDBNavItem>

            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="/signin">
                 <MDBNavLink to="/signin" ><strong>Sign-in</strong></MDBNavLink>
              </MDBNavLink>
            </MDBNavItem>

            <MDBNavItem>
            <MDBDropdown>
                  <MDBDropdownToggle caret color="primary">
                    Account
                 </MDBDropdownToggle>
                  <MDBDropdownMenu basic>
                    <MDBDropdownItem>Dashboard</MDBDropdownItem>
                    <MDBDropdownItem>My-Chart</MDBDropdownItem>
                    <MDBDropdownItem></MDBDropdownItem>
                    <MDBDropdownItem divider />
                    <MDBDropdownItem>Logout</MDBDropdownItem>
                  </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>



      <Switch>

        <Route exact path="/" component={Home}/>
        <Route  path="/home" component={Home}/>


        <Route path="/signin" component = {Signin} />

        <Route path="/register" component = {Register} />

      </Switch>
 
    </div>
    );
  }
}


export default Navbar;