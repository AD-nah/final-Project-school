import React from "react";
import ContactUs from "../Forms/ContactUs";

import Home from '../Home/Home';
import About from '../About/About';
import News from '../News/News';

// import Product from '../Products/Products';
import Man from '../Products/Men/Men';
import Women from '../Products/Women/Women';
import Reworked from '../Products/Reworked/Reworked';

// import Profile from '../Profile/Profile';
import Ordered from '../Profile/Ordered/Ordered';
import Edit from '../Profile/Edit/Edit';
import Sell from '../Profile/Sell/Sell';

import Basket from '../Basket/Basket';
import Favorits from '../Favorites/Favorites';

// import LoginPage from "../Pages/LoginPage";
// import RegisterPage from "./Pages/RegisterPage";



import {

  Switch,
  Route,
  Link,

} from "react-router-dom";







// import Newa from '../News/News';


import "./footer.css";



const Footer = () => {
  return (
    <>

      <footer className="site-footer">

        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 col-md-4">
              <h6>WHAT IS SCOUNT?</h6>

              <p className="text-justify">
                Marketplace launched in 2019 with just 10 sellers and since then we've become the leading online platform for independent brands and vintage boutiques. Having scoured the globe for hot new labels.
                <br></br>
                We think our unique product range is what sets us apart. Vintage 90s sportswear from brands like Tommy Hilfiger and Champion sit alongside new designs from international boutiques hand-made jewellery, culminating in a product range unlike any other. Working with small brands enables us to react to new trends often before larger high-street names, and so we attract customers who are early adopters; looking for something authentic they can't find elsewhere.
              </p>
            </div>

            <div className="col-xs-6 col-md-2">
              <h6>Products</h6>
              <ul className="footer-links">

                <li>
                  <Link to="/products/men">Man</Link>
                </li>
                <li>
                  <Link to="/products/women">Women</Link>
                </li>
                <li>
                  <Link to="/products/reworked">Reworked</Link>
                </li>
              </ul>
            </div>

            <div className="col-xs-6 col-md-2">
              <h6>Account</h6>
              <ul className="footer-links">
                <li>
                  <Link to="/basket">Basket</Link>
                </li>
                <li>
                  <Link to="/favorites">Edit</Link>
                </li>


              </ul>
            </div>

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
          </div>
        </div>

        <div className="container-fluid">
          <hr />

          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">
                {" "}
                &copy; {new Date().getFullYear()} Copyright:{" "}
                <a href="#"> Scount </a>
              </p>
            </div>

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
};
export default Footer;