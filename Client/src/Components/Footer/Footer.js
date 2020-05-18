import React from "react";
import ContactUs from "../Forms/ContactUs";

import { connect } from "react-redux";

import {Link} from "react-router-dom";

import "./footer.css";

class Footer extends React.Component {
  render(){

 
  return (
    <>
     
        <footer className="site-footer">

          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12 col-md-4">
                <h6>About</h6>
                
                <p className="text-justify">
                  Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative
                  to help the upcoming programmers with the code. Scanfcode
                  focuses on providing the most efficient code or snippets as the
                  code wants to be simple. We will help programmers build up
                  concepts in different programming languages that include C, C++,
                  Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and
                  Algorithm.
              </p>
              </div>

              <div className="col-xs-6 col-md-2 ">
                <h6>Quick Links</h6>
                <ul className="footer-links">
                  <li >
                    <a href="#">
                      <ContactUs />
                    </a>
                  </li>
                  <li>
                  <Link to="/home">Home</Link>
                  </li>
                  <li>
                  <Link to="/about">About</Link>
                  </li>
                  <li>
                  <Link to="/news">News</Link>
                  </li>
                </ul>
              </div>

              <div className="col-xs-6 col-md-2">
              <h6>Products</h6>
                <ul className="footer-links">
                 
                  <li>
                  <Link to="/products/men">Men's Collection</Link>
                  </li>
                  <li>
                  <Link to="/products/women">Women's Collection</Link>
                  </li>
                  <li>
                  <Link to="/products/reworked">Reworked</Link>
                  </li>
                </ul>
              </div>

              {this.props.isAuthenticated && (
                <div className="col-xs-6 col-md-2">
                  <h6>Account</h6>
                  <ul className="footer-links">
                  <li>
                    <Link to="/basket">Basket</Link>
                    </li>
                    <li>
                    <Link to="/favorites">Favorites</Link>
                    </li>
                  </ul>
                </div>
              )}
  
              {this.props.isAuthenticated && (
              <div className="col-xs-6 col-md-2">
                <h6>Profile</h6>
                <ul className="footer-links">
                <li>
                  <Link to="/profile/ordered">Ordered</Link>
                  </li>
                  <li>
                  <Link to="/profile/edit">Edit</Link>
                  </li>
                  <li>
                  <Link to="/profile/sell">Sell</Link>
                  </li>
                </ul>
              </div>
              )}
            </div>
          </div>

          <div className="container-fluid">
            <hr />
            <div className="row">
              {/* <div className="col-md-8 col-sm-6 col-xs-12">
                <p className="copyright-text">
                  {" "}
                  &copy; {new Date().getFullYear()} Copyright:{" "}
                  <a href="#"> Scount </a>
                </p>
              </div> */}

              <div className="col-md-4 col-sm-6 col-xs-12">
                <ul className="social-icons">
                  <a className="facebook" href="http://www.facebook.com">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  
                  <a className="linkedin" href="http://www.linkedin.com">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </ul>
              </div>
            </div>
          </div>

       
        </footer>
    
    </>
  );
 }
};



const mapStateToProps = state => {
  return {
        isAuthenticated: state.userReducer.token
  };
};

export default connect(mapStateToProps)(Footer);

