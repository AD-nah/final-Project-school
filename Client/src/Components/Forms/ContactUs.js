










import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter,MDBRow, MDBCol, MDBIcon, MDBInput } from 'mdbreact';



class ContactUs extends Component {
  state = {
    modal: false
  }
  
  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }
  
  render() {
    return (
      <MDBContainer>
        <MDBBtn className=" btn btn-warning" onClick={this.toggle}>Write us</MDBBtn>
        <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
          <MDBModalHeader toggle={this.toggle}>Write Us..</MDBModalHeader>
          <MDBModalBody>
            
              {/* start the modal body */}
              <MDBRow>
                <MDBCol md="10">
                  <form>
                    <p className="h5 text-center mb-4">Write to us</p>
                    <div className="grey-text">
                      <MDBInput label="Your name"  group type="text" validate error="wrong"
                        success="right" />
                      <MDBInput label="Your email"  group type="email" validate error="wrong"
                        success="right" />
                      <MDBInput label="Subject" group type="text" validate error="wrong" success="right" />
                      <MDBInput type="textarea" rows="2" label="Your message"  />
                    </div>
                    
                  </form>
                </MDBCol>
              </MDBRow>


          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={this.toggle}>Close</MDBBtn>
            <div className="text-center">
                      <MDBBtn outline color="secondary">
                        Send
                        <MDBIcon far icon="paper-plane" className="ml-1" />
                      </MDBBtn>
             </div>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
      );
    }
  }
  


export default ContactUs;