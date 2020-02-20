import React from "react";

import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn,MDBNavItem,MDBNavbarBrand } from 'mdbreact';



const About = () => {
  return (
    <MDBCard className="  my-5 px-1 pb-5 text-center ">
        <MDBCardBody>


          <h2 className="h1-responsive font-weight-bold my-5">
            Our amazing team
          </h2>
          <h3 className="grey-text w-responsive mx-auto mb-5">
            This Project was made with Patience and Team's Unite...
          </h3>


            {/*https://github.com/AD-nah  */}
            {/*https://www.linkedin.com/in/ahmad-nahlawi/  */}

          <MDBRow>
          <MDBCol md="4" className="mb-md-0 mb-5">
              <MDBNavItem
                tag="img"
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg"
                className="rounded z-depth-1-half img-fluid"
                alt="Sample avatar"
              />
              <h4 className="font-weight-bold dark-grey-text my-4">
                AD-Alnahlawi
              </h4>
              <h6 className="text-uppercase grey-text mb-3">Web Developer</h6>

              <MDBBtn href="https://www.linkedin.com/in/ahmad-nahlawi/" tag="a" floating size="lg" className="mx-1 mb-0 btn-li">
                    <i class="fab fa-linkedin-in"></i>
              </MDBBtn>

              <MDBBtn href="https://github.com/AD-nah" tag="a" floating size="lg" className="mx-1 mb-0 btn-tw">
                <MDBIcon fab icon="github" />
              </MDBBtn>
            </MDBCol>
           


            {/* https://github.com/wisam450 */}
            {/* https://www.linkedin.com/in/wisam-basheir */}
            <MDBCol md="4" className="mb-md-0 mb-5">
              <MDBNavItem
                tag="img"
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg"
                className="rounded z-depth-1-half img-fluid"
                alt="Sample avatar"
              />
              <h4 className="font-weight-bold dark-grey-text my-4">
                Wissam-Bashir
              </h4>
              <h6 className="text-uppercase grey-text mb-3">Web Developer</h6>
              <MDBBtn tag="a" floating size="lg" className="mx-1 mb-0 btn-li">
                <i class="fab fa-linkedin-in"></i>
              </MDBBtn>
              <MDBBtn  href='https://github.com/wisam450' tag="a" floating size="lg" className="mx-1 mb-0 btn-tw">
                <MDBIcon fab icon="github" />
              </MDBBtn>
              
            </MDBCol>
           




            <MDBCol md="4" className="mb-md-0 mb-5">
              <MDBNavItem
                tag="img"
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg"
                className="rounded z-depth-1-half img-fluid"
                alt="Sample avatar"
              />
              <h4 className="font-weight-bold dark-grey-text my-4">
                AD-Suleman
              </h4>
              <h6 className="text-uppercase grey-text mb-3">Web Developer</h6>
              <MDBBtn href="https://www.linkedin.com/in/ahmed-suleman-aba307190/" tag="a" floating size="lg" className="mx-1 mb-0 btn-li">
              <i  class="fab fa-linkedin-in"></i>
              </MDBBtn>
              <MDBBtn  href="https://github.com/adsulemann"  tag="a" floating size="lg" className="mx-1 mb-0 btn-tw">
                <MDBIcon fab icon="github" />
              </MDBBtn>
            </MDBCol>



          </MDBRow>
        </MDBCardBody>
      </MDBCard>
  );
}

export default About;