import React, { Component } from "react";
import {
  MDBModal,
  MDBModalHeader,
  MDBModalBody
} from "mdbreact";

// import Logo from "../../src/hot-deal.svg";
import SuccessMessage from "./Messages/SuccessMessage";
import Logo from '../imgs/hot-deal.svg'
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
import ResetPasswordPage from './Pages/ResetPasswordPage'
import Profile from "./Profile/Profile";
import Basket from "./Basket/Basket";
import Favorites from "./Favorites/Favorites";

// later!!
// import ProductProfile from "./Products/ProductProfile";


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
      <div>

        <nav className={`${this.state.NavbarClass} navbar_header navbar navbar-expand-sm`}>
          {this.state.logoutSuccess && <SuccessMessage text="Good Bey" />}

          {authMessagesHandler() === "registerdMessage" && (
            <SuccessMessage text="Welcome to your Shop" />
          )}
          {authMessagesHandler() === "loggedinMessage" && (
            <SuccessMessage text="You are logged In" />
          )}
          {this.state.redirectSuccess && <Redirect to="/" />}





          <div>
            <img className="logo " style={{ display: "flex", float: "left" }} src={Logo} alt="Logo" />
            <a className = "navbar-brand scount" href="#"> Scount</a>
          </div>

          <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon ">MU</span></button>

          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto ">
              <li className="nav-item text-center">

                <Link exact="true" to="/home" >
                  Home
                 </Link>
              </li>
              <li className="nav-item">
                <Link to="/products/women" >
                  Poducts
                </Link>
              </li>

              <li className="nav-item">

                <Link to="/news" >
                  News
                </Link>
              </li>
              <li className="nav-item">

                <Link to="/about" >
                  about
                </Link>
              </li>
            </ul>




            {/* login btn auth with modal */}
            {!this.props.isAuthenticated && (<button className="btn-5 " onClick={this.loginToggle}>Login</button>)}

            <MDBModal isOpen={this.state.loginModal}
              toggle={this.loginToggle}
            >
              <MDBModalHeader toggle={this.loginToggle}>
                {/* Please Login */}
              </MDBModalHeader>
              <MDBModalBody>
                <LoginPage closeLogin={this.loginToggle} />
              </MDBModalBody>
            </MDBModal>





            {/* Register auth and Modal */}
            {!this.props.isAuthenticated && (<button className=" btn-5  my-2 my-sm-0" onClick={this.registerToggle}>Register</button>)}
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




            {/* Acoount Dropdown Authentication */}
            {this.props.isAuthenticated && (
              <div className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Account Settings
                    </a>
                <div className="dropdown-menu flex-column" aria-labelledby="navbarDropdown">

                  <a>
                    <Link to="/profile/edit">
                      <strong> your Profile</strong>
                    </Link>

                    <Link  to="/basket">
                      <strong>your Basket</strong>
                    </Link>

                    <Link to="/favorites">
                      <strong>your Favorite</strong>
                    </Link>
                    </a>
                  </div>
                </div>
              )}


                {this.props.isAuthenticated && (<button className="btn-5 my-2 my-sm-0" onClick={this.logoutHandler}>Logout</button>)}


              </div>
        </nav>
      </div>

        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/products" component={Products} />
            <Route path="/news" component={News} />

            {this.props.isAuthenticated ? (
              <>
                <Route path="/profile" component={Profile} />
                <Route path="/basket" component={Basket} />
                <Route path="/favorites" component={Favorites} />
              </>
            ):(
               <Redirect to='/home'/>
            )}

            {/* <Route path="/product-profile/:name/:description/:photo" component={ProductProfile} /> */}
            <Route path="/reset-password-route/:token" component={ResetPasswordPage} />
          </Switch>
        </div>
    </>)
  }
}

const mapStateToProps = state => {
  return {
        isAuthenticated: state.userReducer.token
  };
};

export default connect(mapStateToProps, {
        logoutAction: reduxActios.logoutAction
})(Navbar);
