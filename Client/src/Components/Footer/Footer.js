import React from "react";
import ContactUs from "../Forms/ContactUs";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer class="site-footer">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-6">
              <h6>About</h6>
              <p class="text-justify">
                Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative
                to help the upcoming programmers with the code. Scanfcode
                focuses on providing the most efficient code or snippets as the
                code wants to be simple. We will help programmers build up
                concepts in different programming languages that include C, C++,
                Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and
                Algorithm.
              </p>
            </div>

            <div class="col-xs-6 col-md-3">
              <h6>Categories</h6>
              <ul class="footer-links">
                <li>
                  <a href="#4">C</a>
                </li>
                <li>
                  <a href="#5">UI Design</a>
                </li>
                <li>
                  <a href="#6">PHP</a>
                </li>
                <li>
                  <a href="#7">Java</a>
                </li>
                <li>
                  <a href="#8">Android</a>
                </li>
               
              </ul>
            </div>

            <div class="col-xs-6 col-md-3">
              <h6>Quick Links</h6>
              <ul class="footer-links">
                <li >
                  <a href="#">
                    <ContactUs />
                  </a>
                </li>
                <li>
                  <a href="#1">Contribute</a>
                </li>
                <li>
                  <a href="#2">Privacy Policy</a>
                </li>
                <li>
                  <a href="#3">Sitemap</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="container">
          <hr />

          <div class="row">
            <div class="col-md-8 col-sm-6 col-xs-12">
              <p class="copyright-text">
                {" "}
                &copy; {new Date().getFullYear()} Copyright:{" "}
                <a href="#"> Scount </a>
              </p>
            </div>

            <div class="col-md-4 col-sm-6 col-xs-12">
              <ul class="social-icons">
                <a class="facebook" href="#">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a class="dribbble" href="#">
                  <i class="fab fa-dribbble"></i>
                </a>
                <a class="linkedin" href="#">
                  <i class="fab fa-linkedin"></i>
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