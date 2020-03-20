import React from "react";
import ContactUs from '../Forms/ContactUs'
import './footer.css'

const Footer = () => {
    return (<div>
        <footer class="site-footer">


            <div class="container">
                <div class="row">
                    <div class="col-sm-12 col-md-6">
                        <h6>About</h6>
                        <p class="text-justify">Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative to help the upcoming programmers with the code. Scanfcode focuses on providing the most efficient code or snippets as the code wants to be simple. We will help programmers build up concepts in different programming languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.</p>
                    </div>

                    <div class="col-xs-6 col-md-3">
                        <h6>Categories</h6>
                        <ul class="footer-links">
                            <li><a href="http://scanfcode.com/category/c-language/">C</a></li>
                            <li><a href="http://scanfcode.com/category/front-end-development/">UI Design</a></li>
                            <li><a href="http://scanfcode.com/category/back-end-development/">PHP</a></li>
                            <li><a href="http://scanfcode.com/category/java-programming-language/">Java</a></li>
                            <li><a href="http://scanfcode.com/category/android/">Android</a></li>
                            <li><a href="http://scanfcode.com/category/templates/">Templates</a></li>
                        </ul>
                    </div>

                    <div class="col-xs-6 col-md-3">
                        <h6>Quick Links</h6>
                        <ul class="footer-links">
                            <li><a href="http://scanfcode.com/about/">About Us</a></li>
                            <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
                            <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li>
                            <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
                            <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
                        </ul>
                    </div>

                </div>
            </div>




                <div class="container">
                    <div class="row">
                        <div class="col-md-8 col-sm-6 col-xs-12">
                            <p class="copyright-text"> &copy; {new Date().getFullYear()} Copyright: <a href="#"> Scount </a>
                            </p>
                        </div>

                        <div class="col-md-4 col-sm-6 col-xs-12">
                            <ul class="social-icons">
                                <a class="facebook" href="#"><i class="fa fa-facebook"></i></a>
                                <a class="twitter" href="#"><i class="fa fa-twitter"></i></a>
                                <a class="dribbble" href="#"><i class="fa fa-dribbble"></i></a>
                                <a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a>
                            </ul>
                        </div>
                    </div>
                </div>
        </footer>
       </div> );
}
export default Footer;






















// import React from "react";
// import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
// import ContactUs from '../Forms/ContactUs'
// import './footer.css'

// const Footer = () => {
//     return (
//         <MDBFooter className="page-footer stylish-color-dark pt-4">{/*fixed-bottom*/}
//             <MDBContainer fluid className="container text-center text-md-left ">
//                 <MDBRow>
//                     <MDBCol className="col-md-4 mx-auto text-center">
//                         <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Footer Content</h5>
//                         <p>
//                             use rows and columns here to organize your footer
//                             content.
//                         </p>

//                     </MDBCol>
//                     <MDBCol className="col-md-4  mx-auto text-center">
//                             <ContactUs/>
//                     </MDBCol>
//                     <MDBCol md="2" className="col-md-2 mx-auto text-center">
//                         <h5 className="font-weight-bold text-uppercase mt-2 mb-4">Links</h5>
//                         <ul>
//                             <li className="list-unstyled">
//                                 <a href="#!">Policies</a>
//                             </li>
//                             <li className="list-unstyled">
//                                 <a href="#!">Products</a>
//                             </li>
//                             <li className="list-unstyled">
//                                 <a href="#!">News</a>
//                             </li>

//                         </ul>
//                     </MDBCol>

//                 </MDBRow>

//                 {/* Social buttons */}
//                 <ul className="list-unstyled list-inline text-center">

//                 <li className="list-inline-item">
//                         <a className="btn-floating btn-li mx-1">
//                             <i className="fab fa-linkedin-in"> </i>
//                         </a>
//                     </li>


//                     <li className="list-inline-item">
//                         <a className="btn-floating btn-li mx-1">
//                                 <i className="fab fa-github"></i></a>
//                     </li>
//                 </ul>
//                 {/* Social buttons  */}

//             </MDBContainer>
//             <div className="footer-copyright text-center py-3">
//                 <MDBContainer fluid>
//                     &copy; {new Date().getFullYear()} Copyright: <a href="#"> Scount </a>
//                 </MDBContainer>
//             </div>
//         </MDBFooter>
//     );
// }

// export default Footer;