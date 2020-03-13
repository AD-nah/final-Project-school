import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBBtn,
  MDBModal,
  MDBModalHeader,
  MDBModalBody
} from "mdbreact";

import Logo from "../../src/hot-deal.svg";
import SuccessMessage from "./Messages/SuccessMessage";

import { Switch, Route, Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as reduxActios from "../Redux/Actions/auth";
import { authMessagesHandler } from "../Redux/Actions/auth";
import Home from "./Home/Home";
import Products from "./Products/Products";
import News from "./News/News";
import About from "./About/About";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";

import Profile from "./Profile/Profile";
import Basket from "./Basket/Basket";
import Favorites from "./Favorites/Favorites";



class Navbar extends Component {
  state = {
    isOpen: false,
    registerModal: false,
    loginModal: false,
    logoutSuccess: false,
    redirectSuccess: false,
    NavbarClass: "navbarTop"
  };



  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  registerToggle = () => {
    this.setState({
      registerModal: !this.state.registerModal
    });
  };
  loginToggle = () => {
    this.setState({
      loginModal: !this.state.loginModal
    });
  };

  logoutHandler = () => {


    // redirect to home Page when logoutAction() returned true! 
    if (this.props.logoutAction()) {
      this.setState({ logoutSuccess: true, redirectSuccess: true })

      // to reload the state after logout, that the state will ready for the next lougout, to redirect again!
      setTimeout(() => {
        this.setState({ logoutSuccess: false, redirectSuccess: false });
      }, 1500);
    }
  };




  scrollFunction = () => {

    if (window.scrollY > 10) {

      this.setState({ NavbarClass: "navbarDown" })

    } else {
      this.setState({ NavbarClass: "navbarTop" })
    }
  }


 

  render() {
    
    window.onscroll = () => { this.scrollFunction() };

    return (<>
      <div style={{ maxHeight: "130px" }}>

        <MDBNavbar className={`${this.state.NavbarClass} navbar_header`} dark expand="md">

          {this.state.logoutSuccess && <SuccessMessage text="Good Bey" />}

          {authMessagesHandler() === "registerdMessage" && (
            <SuccessMessage text="Welcome to Your Shop" />
          )}
          {authMessagesHandler() === "loggedinMessage" && (
            <SuccessMessage text="logged in" />
          )}

        <MDBNavbar className={`${this.state.NavbarClass} navbar_header`} dark expand="md" />
        {/* <MDBNavbar color="black" fixed="top" dark expand="md"> */}

          {this.state.redirectSuccess && <Redirect to="/" />}


          <MDBNavbarBrand>
            <img className="logo" src={Logo} alt="Logo" />
            <strong className="scount white-text font-weight-bold "> Scount</strong>

          

          </MDBNavbarBrand >
          <MDBNavbarToggler onClick={this.toggleCollapse} />

          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav left>
              <MDBNavItem>
                <MDBNavLink className=" btn-2_custom font-weight-bold" to="/home">
                  Home
                </MDBNavLink>
              </MDBNavItem>

              <MDBNavItem>
                <MDBNavLink className="btn-2_custom font-weight-bold" to="/products/women">
                  Products
                </MDBNavLink>

              </MDBNavItem>

              <MDBNavItem>
                <MDBNavLink className=" btn-2_custom font-weight-bold" to="/news">
                  News
                </MDBNavLink>
              </MDBNavItem>

              <MDBNavItem>
                <MDBNavLink className=" btn-2_custom font-weight-bold" to="/about">
                  About
                </MDBNavLink>
              </MDBNavItem>




            </MDBNavbarNav>






            <MDBNavbarNav right>
              {!this.props.isAuthenticated && (

                <button
                  class="btn-5"

                  onClick={this.loginToggle}
                >

                  Login
                </button>
              )}

              <MDBModal
                isOpen={this.state.loginModal}
                toggle={this.loginToggle}
              >
                <MDBModalHeader toggle={this.loginToggle}>
                  {/* Please Login */}
                </MDBModalHeader>
                <MDBModalBody>
                  <LoginPage closeLogin={this.loginToggle} />
                </MDBModalBody>
              </MDBModal>





              {!this.props.isAuthenticated && (
                <button
                  class=" btn-5"

                  onClick={this.registerToggle}
                >
                  Register
                </button>
              )}

              <MDBModal
                isOpen={this.state.registerModal}
                toggle={this.registerToggle}
                size="lg"
              >
                <MDBModalHeader toggle={this.registerToggle}></MDBModalHeader>
                <MDBModalBody>
                  <RegisterPage closeRegister={this.registerToggle} />
                </MDBModalBody>
              </MDBModal>











              {this.props.isAuthenticated && (
                <MDBNavItem>
                  <MDBDropdown>
                    <MDBDropdownToggle className="w-78 p-2" caret color="white">
                      Account
                    </MDBDropdownToggle>
                    <MDBDropdownMenu>
                      <MDBDropdownItem>
                        <Link to="/profile">
                          <strong>Profile</strong>
                        </Link>
                      </MDBDropdownItem>

                      <MDBDropdownItem>
                        <Link to="/basket">
                          <strong>My-Basket</strong>
                        </Link>

                      </MDBDropdownItem>

                      <MDBDropdownItem>
                        <Link to="/favorites">
                          <strong>Favorites</strong>
                        </Link>
                      </MDBDropdownItem>

                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>
              )}








              {this.props.isAuthenticated && (
                <MDBBtn
                  onClick={this.logoutHandler}
                  className="w-60 p-2"
                  color="white"
                >
                  Logout
                </MDBBtn>
              )}


            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar >


      </div >


      <div>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/products" component={Products} />

          <Route path="/news" component={News} />
          <Route path="/profile" component={Profile} />
          <Route path="/basket" component={Basket} />
          <Route path="/favorites" component={Favorites} />
        </Switch>
      </div>
    </>);
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: !!state.userReducer.token
  };
};

export default connect(mapStateToProps, {
  logoutAction: reduxActios.logoutAction
})(Navbar);





 {/* <a
href="https://twitter.comCollection of Button Hover Effects/Dave_Conner"
class="btn btn-1"
>
<svg>
  <rect x="0" y="0" fill="none" width="100%" height="100%" />
</svg>
Hover
</a>



<a href="https://twitter.com/Dave_Conner" class="btn btn-2">
Hover
</a>
  */}


