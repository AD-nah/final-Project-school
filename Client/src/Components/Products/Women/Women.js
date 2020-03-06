import React, { useState } from "react";
import { BackTop } from "antd";
import axios from "axios";
import { connect } from "react-redux";
import { addToBasketAction } from "../../../Redux/Actions/basket";
import {
  MDBContainer,
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
      currentArrayOfImages: [],
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
        console.log(product)
        this.setState({ data: product });
      });
  }
  setCurrentProduct(item) {
    this.props.addToBasketAction(item);
    alert("Added to basket")
  }
  sendImagesToCarousel(array) {
    console.log(array[0].protoTypes);
    this.setState({ currentArrayOfImages: array[0].protoTypes });
  }
  starMaker(n) {
    let stars = [];
    for (let i = 0; i < n; i++) {
      stars.push(<li className="fa fa-star"></li>);
    }
    return stars;
  }
  render() {
    return (
      <>
        <div className="container">
          <h3 className="h3">Women's Collection</h3>
          <div className="row">
            {this.state.data
              ? this.state.data.map((item, index) => {
                  return (
                    <div key={index} className="col-md-3 col-sm-6 ">
                      <div className="product-grid7 ">
                        <div className="product-content ">
                          <h3 className="title">
                            <a href="#">{item.name}</a>
                          </h3>
                        </div>
                        <div className="product-image7">
                          <a href="#">
                          {/* <img className="pic-1" src={item.images[0]} />
                          <img className="pic-2" src={item.images[1]} /> */}
                             <img
                              className=" pic-1 " 
                              src={item.images[0].protoTypes[0] }
                            />
                            <img
                              className="pic-2"
                              src={item.images[0].protoTypes[1]}
                            />
                          </a>
                          <ul className="social">
                            <li
                              onClick={() =>
                                this.sendImagesToCarousel(item.images)
                              }
                            >
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
        {/* Back to top btn */}
        <div>
          <BackTop>
            <i
              className="fas fa-chevron-circle-up"
              style={{ color: "orange", fontSize: "40px" }}
            ></i>
          </BackTop>
        </div>
        {/* // images modal */}
        <div>
          <MDBContainer>
            <li>
              <a
                onClick={this.toggle(13)}
                className="fas fa-expand-arrows-alt"
              ></a>
            </li>
            <MDBModal isOpen={this.state.modal13} toggle={this.toggle(13)} className="w-auto p-3">
              <MDBModalBody >
                {/* modal carousel starthere */}
                <MDBContainer>
                  <MDBCarousel
                    activeItem={1}
                    length={this.state.currentArrayOfImages.length}
                    showControls={true}
                    showIndicators={true}
                    className="z-depth-1"
                  >
                    <MDBCarouselInner>
                      {this.state.currentArrayOfImages.length> 0?
                          this.state.currentArrayOfImages.map((item,index)=>{
                              return (
                                <MDBCarouselItem itemId={index+1}>
                                  <MDBView>
                                    <img
                                      className="d-block "
                                      style={{maxHeight:"550px"}}
                                      src={item}
                                      alt="First slide"
                                    />
                                    <MDBMask overlay="black-light" />
                                  </MDBView>
                                  {/* <MDBCarouselCaption>
                                    <h3 className="h3-responsive">Light mask</h3>
                                    <p>First text</p>
                                  </MDBCarouselCaption> */}
                                </MDBCarouselItem>
                              )
                          })
                          :null
                      }
                    </MDBCarouselInner>
                  </MDBCarousel>
                </MDBContainer>
                {/* modal carousel end here */}
              </MDBModalBody>
            </MDBModal>
          </MDBContainer>
        </div>
        {/*images modal end here */}
      </>
    );
  }
}
export default connect(null, { addToBasketAction })(Women);