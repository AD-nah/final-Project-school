import React from "react";

import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn, MDBNavItem } from 'mdbreact';

import wissam from '../../imgs/wissam.jpeg';
import nahlawi from '../../imgs/nahlawi.jpeg';
import suleman from '../../imgs/suleman.jpg'

const About = () => {
  return (
    <MDBCard className="  my-5 px-1 pb-5 text-center ">
      <MDBCardBody>


        <h2 className="h1-responsive font-weight-bold my-4">
          The Squad 
          </h2>
        <h3 className="grey-text w-responsive mx-auto mb-5">
          This Project was made with Love and Team's Unite...
          </h3>


        {/*https://github.com/AD-nah  */}
        {/*https://www.linkedin.com/in/ahmad-nahlawi/  */}

        <MDBRow>
          <MDBCol md="4" className="mb-md-0 mb-5">
            <MDBNavItem
              tag="img"
              src={nahlawi}
              style={{ width: '300px' }}
              className="rounded z-depth-1-half img-fluid"
              alt="Sample avatar"
            />
            <h4 className="font-weight-bold dark-grey-text my-4">
              AD-Alnahlawi
              </h4>
            <h6 className="text-uppercase grey-text mb-3">Web Developer</h6>

            <MDBBtn href="https://www.linkedin.com/in/ahmad-nahlawi/" tag="a" floating="true" className="mx-1 mb-0 btn-li">
              <i className="fab fa-linkedin-in"></i>
            </MDBBtn>

            <MDBBtn href="https://github.com/AD-nah" tag="a" floating="true" className="mx-1 mb-0 btn-tw">
              <MDBIcon size="lg" fab icon="github" />
            </MDBBtn>
          </MDBCol>



          {/* https://github.com/wisam450 */}
          {/* https://www.linkedin.com/in/wisam-basheir */}
          <MDBCol md="4" className="mb-md-0 mb-5">
            <MDBNavItem
              tag="img"
              src={wissam}
              style={{ width: '300px' }}
              className="rounded z-depth-1-half img-fluid"
              alt="Sample avatar"
            />
            <h4 className="font-weight-bold dark-grey-text my-4">
              Wissam-Bashir
              </h4>
            <h6 className="text-uppercase grey-text mb-3">Web Developer</h6>
            <MDBBtn tag="a" floating="true" className="mx-1 mb-0 btn-li">
              <i className="fab fa-linkedin-in"></i>
            </MDBBtn>
            <MDBBtn href='https://github.com/w' tag="a" floating="true" className="mx-1 mb-0 btn-tw">
              <MDBIcon size="lg" fab icon="github" />
            </MDBBtn>

          </MDBCol>





          <MDBCol md="4" className="mb-md-0 mb-5">
            <MDBNavItem
              tag="img"
              style={{ height: '300px', width: '325px' }}
              src={suleman}
              className="rounded z-depth-1-half img-fluid"
              alt="Sample avatar"
            />
            <h4 className="font-weight-bold dark-grey-text my-4">
              AD-Suleman
              </h4>
            <h6 className="text-uppercase grey-text mb-3">Web Developer</h6>
            <MDBBtn href="https://www.linkedin.com/in/ahmed-suleman-aba307190/" tag="a" floating="true" className="mx-1 mb-0 btn-li">
              <i className="fab fa-linkedin-in"></i>
            </MDBBtn>
            <MDBBtn href="https://github.com/adsulemann" tag="a" floating="true" className="mx-1 mb-0 btn-tw">
              <MDBIcon size="lg" fab icon="github" />
            </MDBBtn>
          </MDBCol>
        </MDBRow>


        <section className="page-section mt-5 pt-5" id="services">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">Services</h2>
                <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
              </div>
            </div>
            <div className="row text-center">
              <div className="col-md-4">
                <span className="fa-stack fa-4x">
                  <i className="fas fa-circle fa-stack-2x text-primary"></i>
                  <i className="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
                </span>
                <h4 className="service-heading">E-Commerce</h4>
                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
              </div>
              <div className="col-md-4">
                <span className="fa-stack fa-4x">
                  <i className="fas fa-circle fa-stack-2x text-primary"></i>
                  <i className="fas fa-laptop fa-stack-1x fa-inverse"></i>
                </span>
                <h4 className="service-heading">Support</h4>
                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
              </div>
              <div className="col-md-4">
                <span className="fa-stack fa-4x">
                  <i className="fas fa-circle fa-stack-2x text-primary"></i>
                  <i className="fas fa-lock fa-stack-1x fa-inverse"></i>
                </span>
                <h4 className="service-heading">Web Security</h4>
                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
              </div>
            </div>
          </div>
        </section>
      </MDBCardBody>
    </MDBCard>

  );
}

export default About;