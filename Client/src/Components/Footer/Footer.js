import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import './footer.css'
import fb_icon from './icons/facebook.svg'
const Footer = () => {
    return (
        <MDBFooter className="page-footer font-small stylish-color-dark pt-4">
            <MDBContainer fluid className="container text-center text-md-left">
                <MDBRow>
                    <MDBCol className="col-md-8 mx-auto">
                        <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Footer Content</h5>
                        <p>
                            use rows and columns here to organize your footer
                            content.
                        </p>
                        
                    </MDBCol>
                    <MDBCol md="2" className="col-md-2 mx-auto">
                        <h5 className="font-weight-bold text-uppercase mt-2 mb-4">Links</h5>
                        <ul>
                            <li className="list-unstyled">
                                <a href="#!">Home</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!">Products</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!">News</a>
                            </li>
                           
                        </ul>
                    </MDBCol>
       
                </MDBRow>
        
                {/* Social buttons */}
                <ul className="list-unstyled list-inline text-center">

                <li className="list-inline-item">
                        <a className="btn-floating btn-li mx-1">
                            <i className="fab fa-linkedin-in"> </i>
                        </a>
                    </li>
                 
               
                    <li className="list-inline-item">
                        <a className="btn-floating btn-li mx-1">
                                <i class="fab fa-github"></i>                        </a>
                    </li>
                
                </ul>
                {/* Social buttons  */}

            </MDBContainer>
            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                    &copy; {new Date().getFullYear()} Copyright: <a href="#"> MDBootstrap.com </a>
                </MDBContainer>
            </div>
        </MDBFooter>
    );
}

export default Footer;