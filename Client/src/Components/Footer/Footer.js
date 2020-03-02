import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import './footer.css'

const Footer = () => {
    return (
        <MDBFooter className="page-footer stylish-color-dark pt-4">
            <MDBContainer fluid className="container text-center text-md-left">
                <MDBRow>
                    <MDBCol className="col-md-4 mx-auto text-center">
                        <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Footer Content</h5>
                        <p>
                            use rows and columns here to organize your footer
                            content.
                        </p>
                        
                    </MDBCol>
                    <MDBCol className="col-md-4  mx-auto text-center">
                        <h5 className="font-weight-bold text-uppercase mt-3 mb-4 ">Contact Us</h5>
                        <button className="btn btn-lg-5">Click Here to Cintact</button>
                        
                    </MDBCol>
                    <MDBCol md="2" className="col-md-2 mx-auto text-center">
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
                                <i className="fab fa-github"></i>                        </a>
                    </li>
                </ul>
                {/* Social buttons  */}

            </MDBContainer>
            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                    &copy; {new Date().getFullYear()} Copyright: <a href="#"> Scount </a>
                </MDBContainer>
            </div>
        </MDBFooter>
    );
}

export default Footer;