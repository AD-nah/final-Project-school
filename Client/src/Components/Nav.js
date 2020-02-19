import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import { Switch, Route } from 'react-router-dom';
import Home from './Home/Home'
import Signin from './Signin/Signin'
import Register from './Register/Register'
import Him from './Him/Him';
import Her from './Her/Her';
import News from './News/News'

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
              <MDBNavLink to = '/home'><strong>Home</strong></MDBNavLink>
            </MDBNavItem>

            {/* 
            <MDBNavItem>
              <MDBNavLink to = '/proucts'>Products</MDBNavLink>
            </MDBNavItem> */}


            {/* the products Dropdown */}
            <MDBDropdown >
                <MDBDropdownToggle nav caret>
                  <div className="d-none d-md-inline"><strong>Products</strong></div>
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  
                    <MDBNavItem>
                        <MDBNavLink  to="/him">
                            <MDBNavLink to="/him">For Him</MDBNavLink>
                        </MDBNavLink>
                    </MDBNavItem>

                  <MDBDropdownItem>For Her</MDBDropdownItem>
                  <MDBDropdownItem >Deals </MDBDropdownItem>
                 
                </MDBDropdownMenu>
              </MDBDropdown>







            <MDBNavItem>
              <MDBNavLink to='/news'>News</MDBNavLink>
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

        <Route  path="/him" component={Him}/>
        <Route  path="/her" component={Her}/>
        <Route  path="/news" component={News}/>
           
          

        <Route path="/signin" component = {Signin} />

        <Route path="/register" component = {Register} />

      </Switch>
 
    </div>
    );
  }
}


export default Navbar;