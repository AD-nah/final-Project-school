import React, { Component } from "react";
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
  MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBBtn, MDBModal, MDBModalHeader, MDBModalBody 
} from "mdbreact";



import  Logo  from '../../src/fire.svg';
import SuccessMessage from './Messages/SuccessMessage'


import { Switch, Route, Link , Redirect} from 'react-router-dom';
import { connect } from 'react-redux'
import * as reduxActios from '../Redux/Actions/auth'

import Home from './Home/Home'
import Men from './Products/Men/Men'
import Women from './Products/Women/Women'
import News from './News/News'
import About from './About/About'
import LoginPage from './Pages/LoginPage'
import RegisterPage from './Pages/RegisterPage'


import Profile from './Profile/Profile'
import Chart from './Chart/Chart'
import Favorites from './Favorites/Favorites'




class Navbar extends Component {
  state = {
    isOpen: false,
    registerModal: false,
    loginModal: false,
    logoutSuccess: false,
    redirectSuccess:false
  }

  toggleCollapse = () => {
    this.setState({isOpen: !this.state.isOpen});
  }
  registerToggle = () => {
    this.setState({
      registerModal: !this.state.registerModal
    })
  }
  loginToggle = () => {
    this.setState({
      loginModal: !this.state.loginModal
    })
  }
  logoutHandler = () => {

    this.props.logoutAction().then(res => {
      
    this.setState({logoutSuccess: true, redirectSuccess: true})
            
    }).catch(err => {

      console.log(err)
    })
  }

  render() {
    return (
      <div >
        <MDBNavbar color="special-color" dark expand="md">

        {this.state.logoutSuccess &&  <SuccessMessage text = 'you are Logged Out'/> }
        {this.props.isAuthenticated && (<SuccessMessage text = 'successfully loggedin'/>)} 
        {this.state.redirectSuccess && <Redirect to = '/home'/>}
          
          <MDBNavbarBrand>
          <img style={{width:"40px"}} src={Logo} alt="Logo"/>
            <strong className="white-text font-weight-bold"> Scount</strong>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse} />

          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav left>

              <MDBNavItem >
                <MDBNavLink  className=" font-weight-bold" to='/home'>Home</MDBNavLink>
              </MDBNavItem>


              <MDBNavItem >
                <MDBNavLink  className=" font-weight-bold" to='/men'>Products</MDBNavLink>
              </MDBNavItem>




              <MDBNavItem>
                <MDBNavLink className=" font-weight-bold" to='/news'>News</MDBNavLink>
              </MDBNavItem>



              <MDBNavItem>
                <MDBNavLink className=" font-weight-bold" to='/about'>About</MDBNavLink>
              </MDBNavItem>
              

            </MDBNavbarNav>
            <MDBNavbarNav right>

              {!this.props.isAuthenticated && ( 
                <MDBBtn onClick={this.loginToggle} className="w-60 p-2" color="white" >Login</MDBBtn>
              )}
              <MDBModal isOpen={this.state.loginModal} toggle={this.loginToggle}>
                <MDBModalHeader toggle={this.loginToggle}>Please Login</MDBModalHeader>
                <MDBModalBody>

                  <LoginPage closeLogin = {this.loginToggle}/>

                </MDBModalBody>
              </MDBModal>
   

              {!this.props.isAuthenticated && (
                <MDBBtn onClick={this.registerToggle} className="w-60 p-2" color="white" >Register</MDBBtn>
              )}

              <MDBModal isOpen={this.state.registerModal} toggle={this.registerToggle}>
                <MDBModalHeader toggle={this.registerToggle}>Please Register</MDBModalHeader>
                <MDBModalBody>  

                  <RegisterPage closeRegister = {this.registerToggle}/>
                
                </MDBModalBody>
              </MDBModal>
         

              {this.props.isAuthenticated && (
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

                      <MDBDropdownItem>
                        <Link to="/favorites"><strong>Favorites</strong></Link>
                      </MDBDropdownItem>


                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>
              )}

              {this.props.isAuthenticated && (
                <MDBBtn onClick={this.logoutHandler} className="w-60 p-2" color="white" >Logout</MDBBtn>
              )}

            </MDBNavbarNav>
          </MDBCollapse>
        
        </MDBNavbar>



        <Switch>
          
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />

          <Route path="/men" component={Men} />
          <Route path="/women" component={Women} />
          
          <Route path="/news" component={News} />
          <Route path="/profile" component={Profile} />
          <Route path="/chart" component={Chart} />
          <Route path="/favorites" component={Favorites} />
        </Switch>

      </div>
    );
  }
}

// function Example() {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//     <>
//       <Button variant="primary" onClick={handleShow}>
//         Launch demo modal
//       </Button>

//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Modal heading</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>     
//                     <LoginPage />
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleClose}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }


const mapStateToProps = (state) =>{
  return{
    isAuthenticated:  !!state.userReducer.token
  }
}

 export default connect( mapStateToProps, { logoutAction: reduxActios.logoutAction })(Navbar)
//export default Navbar