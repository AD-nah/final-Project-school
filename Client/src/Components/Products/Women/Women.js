import React, { useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { addToBasketAction } from "../../../Redux/Actions/basket";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask
} from "mdbreact";

// ----------------------------------

{
  /* DON'T DELETE IT PLEASE */
}

//                         {/* <h3 class="cost">
//                         <span class="glyphicon glyphicon-usd"></span> 15.00{" "}
//                         <small class="pre-cost">
//                             <span class="glyphicon glyphicon-usd"></span> 20.00
//                         </small>
//                      </h3> */}

// ----------------------------------------------------------------------
{
  /* DON'T DELETE IT PLEASE */
}

// Import Antd  library
// import "antd/dist/antd.css";
// import {  Popconfirm, message} from "antd";

// // confirm on click or error on cancel
// function confirm(e) {
//   console.log(e);
//   message.success("Added successfuly..");
// }
// function cancel(e) {
//   console.log(e);
//   message.error("Item deleted..");
// }

// --------------------------------------------------------------

class Women extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      currentProduct: [],
      currentArrayOfImages: null,

      //images modal
      modal13: false
    };
  }

  // for the images modal
  toggle = nr => () => {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  };

  componentDidMount() {
    axios
      .get("/product/womens")
      .then(res => res.data.women)
      .then(product => {
        this.setState({ data: product });
      });
  }

  setCurrentProduct(item) {
    this.props.addToBasketAction(item);
  }

  sendImagesToCarousel(array) {
    console.log(array);
    this.setState({ currentArrayOfImages: array });
  }

  starMaker(n) {
    let stars = [];
    for (let i = 0; i < n; i++) {
      stars.push(<li className="fa fa-star"></li>);
    }
    return stars;
  }

  render() {
    return (<>
      <div className="container">
      

        <h3 className="h3">Women's Collection</h3>
        <div className="row">
          {this.state.data
            ? this.state.data.map((item, index) => {
                return (
                  <div key={index} className="col-md-3 col-sm-6">
                    <div className="product-grid7">
                      <div className="product-content">
                        <h3 className="title">
                          <a href="#">{item.name}</a>
                        </h3>
                      </div>

                      <div className="product-image7">
                        <a href="#">
                          <img className="pic-1" src={item.images[0]} />
                          <img className="pic-2" src={item.images[1]} />
                        </a>

                        <ul className="social">
                          {/* <li>
                            <a
                              onClick={() =>
                                this.sendImagesToCarousel(item.images)
                              }
                              className="fas fa-expand-arrows-alt"
                            ></a>
                          </li> */}

                          <li>
                            <a
                              onClick={this.toggle(13)}
                              className="fas fa-expand-arrows-alt"
                            ></a>
                          </li>

                          <li>
                            <a href="#" className="far fa-heart"></a>
                          </li>

                          <li>
                            <a
                              role="button"
                              tabIndex={0}
                              onClick={() => this.setCurrentProduct(item)}
                              className="fa fa-shopping-cart"
                            ></a>
                          </li>
                        </ul>

                        <span className="product-new-label">New</span>
                      </div>
                      <div className="product-content">
                        <h3 className="title">
                          <a href="#">{item.description}</a>
                        </h3>
                        <ul className="rating">
                          {this.starMaker(item.rating)}
                        </ul>
                        <div className="price">
                          {item.prices[0]}
                          <span>{item.prices[1]}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            : "Please wait ..."}
        </div>
      </div>





      // images nmodal
      <div>
      <MDBContainer>
        <li>
          <a
            onClick={this.toggle(13)}
            className="fas fa-expand-arrows-alt"
          ></a>
        </li>

        <MDBModal isOpen={this.state.modal13} toggle={this.toggle(13)}>
          <MDBModalBody>
            {/* modal carousel starthere */}
            <MDBContainer>
              <MDBCarousel
                activeItem={1}
                length={3}
                showControls={true}
                showIndicators={true}
                className="z-depth-1"
              >
                <MDBCarouselInner>
                  <MDBCarouselItem itemId="1">
                    <MDBView>
                      <img
                        className="d-block w-100"
                        src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
                        alt="First slide"
                      />
                      <MDBMask overlay="black-light" />
                    </MDBView>
                    <MDBCarouselCaption>
                      <h3 className="h3-responsive">Light mask</h3>
                      <p>First text</p>
                    </MDBCarouselCaption>
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId="2">
                    <MDBView>
                      <img
                        className="d-block w-100"
                        src="https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg"
                        alt="Second slide"
                      />
                      <MDBMask overlay="black-strong" />
                    </MDBView>
                    <MDBCarouselCaption>
                      <h3 className="h3-responsive">Strong mask</h3>
                      <p>Second text</p>
                    </MDBCarouselCaption>
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId="3">
                    <MDBView>
                      <img
                        className="d-block w-100"
                        src="https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg"
                        alt="Third slide"
                      />
                      <MDBMask overlay="black-slight" />
                    </MDBView>
                    <MDBCarouselCaption>
                      <h3 className="h3-responsive">Slight Mast</h3>
                      <p>Third text</p>
                    </MDBCarouselCaption>
                  </MDBCarouselItem>
                </MDBCarouselInner>
              </MDBCarousel>
            </MDBContainer>
            {/* modal carousel end here */}
          </MDBModalBody>
        </MDBModal>
      </MDBContainer>
      {/* images modal end here */}
    </div>


    </>);
  }
}

export default connect(null, { addToBasketAction })(Women);

