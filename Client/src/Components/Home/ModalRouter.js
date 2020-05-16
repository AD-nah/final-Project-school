import React from "react";
import {
  MDBContainer,
  MDBModal,
  MDBModalBody,
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
} from "mdbreact";
import { Modal, Button } from "react-bootstrap";
import { addToBasketAction } from "../../Redux/Actions/basket";
import { addToFavoriteAction } from "../../Redux/Actions/favorite";
import { connect } from "react-redux";
import SuccessMessage from "../Messages/SuccessMessage";

export class ModalRouter extends React.Component {
  constructor(props, context) {
    super(props, context);

    // this.handleShow = this.handleShow.bind(this);
    // this.handleClose = this.handleClose.bind(this);

    this.state = {
      // for basket Messages
      addedToBasket: false,
      addedToBasketMessage: "",
      alreadyInBasket: false,
      alreadyInBasketMessage: "",

      // for favorite Messages
      addedToFavorite: false,
      addedToFavoriteMessage: "",
      alreadyInFavorite: false,
      alreadyInFavoriteMessage: "",

      // show: this.props.show
      currentArrayOfImages: [],
      modal13: false,
    };
  }
  addToBasket(item) {
    this.props
      .addToBasketAction(item)
      .then((message) => {
        this.setState({ addedToBasket: true, addedToBasketMessage: message });
        setTimeout(() => this.setState({ addedToBasket: false }), 200);
      })
      .catch((message) => {
        this.setState({
          alreadyInBasket: true,
          alreadyInBasketMessage: message,
        });
        setTimeout(() => this.setState({ alreadyInBasket: false }), 200);
      });
  }
  /// add the Favorites to the basket
  addToFavorite(item) {
    this.props
      .addToFavoriteAction(item)
      .then((message) => {
        this.setState({
          addedToFavorite: true,
          addedToFavoriteMessage: message,
        });
        setTimeout(() => this.setState({ addedToFavorite: false }), 100);
      })
      .catch((message) => {
        this.setState({
          alreadyInFavorite: true,
          alreadyInBasketMessage: message,
        });
        setTimeout(() => this.setState({ alreadyInFavorite: false }), 100);
      });
  }

  sendImagesToCarousel(array) {
    this.setState({ currentArrayOfImages: array.protoTypes });
  }
  toggle = (nr) => () => {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber],
    });
  };
  starMaker(n) {
    let stars = [];
    for (let i = 0; i < n; i++) {
      stars.push(<li key={i} className="fa fa-star"></li>);
    }
    return stars;
  }

  render() {
    return (
      <>
        <Modal
          size="xl"
          centered
          show={this.props.show}
          onHide={this.props.handleClose}
        >
          {this.state.addedToBasket && (
            <SuccessMessage text={this.state.addedToBasketMessage} />
          )}
          {this.state.alreadyInBasket && (
            <SuccessMessage text={this.state.alreadyInBasketMessage} />
          )}

          {this.state.addedToFavorite && (
            <SuccessMessage text={this.state.addedToFavoriteMessage} />
          )}
          {this.state.alreadyInFavorite && (
            <SuccessMessage text={this.state.alreadyInFavoriteMessage} />
          )}

          <Modal.Body>
            <div className=" mb-3 m-5">
              <div className="  row">
                <div className=" text-center  col">
                  {/* <img  style={{ height: '40vh', width: "15vw" }} src={this.props.product.images.protoTypes[0]} className="img alt = 'alt'-fluid img-thumbnail" alt="Sheep" /> */}
                  <div className="product-grid7">
                    <div className="product-image7">
                      <li
                        onClick={() =>
                          this.sendImagesToCarousel(this.props.product.images)
                        }
                      >
                        <a onClick={this.toggle(13)}>
                          <img
                            alt="alt"
                            className="pic-1"
                            style={{ maxHeight: "300px" }}
                            src={this.props.product.images.protoTypes[0]}
                          />
                          <img
                            style={{ maxHeight: "300px" }}
                            alt="alt2"
                            className="pic-2"
                            src={this.props.product.images.protoTypes[1]}
                          />
                        </a>
                      </li>
                      <ul className="social">
                        <li
                          onClick={() =>
                            this.sendImagesToCarousel(this.props.product.images)
                          }
                        >
                          <a
                            onClick={this.toggle(13)}
                            className="fas fa-expand-arrows-alt"
                          ></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="  col-5">
                  <div className=" text-center ">
                    <div className="col">
                      <div className="col">
                        <p className="font-weight-bold">
                          {this.props.product.name}
                        </p>
                      </div>
                      <hr />
                      <h3 className="mt-2">Descreption</h3>
                      <p style={{ fontSize: "1rem" }}>
                        {this.props.product.description}
                      </p>
                      <hr />
                      <div className="col">
                        <span>{this.starMaker(this.props.product.rating)}</span>
                      </div>
                    </div>
                    <hr />
                    {this.props.isAuthenticated ? (
                      <span className="table-remove">
                        <button
                          type="button"
                          onClick={() => this.addToBasket(this.props.product)}
                          className="btn btn-danger"
                        >
                          Add to Basket
                        </button>
                        <button
                          type="button"
                          onClick={() => this.addToFavorite(this.props.product)}
                          className="btn btn-info"
                        >
                          Add To Favorite
                        </button>
                      </span>
                    ) : (
                      "Please signin/up to add this Product to your Basket/Favorite"
                    )}
                  </div>
                </div>

                <div className="  col">
                  <div className=" text-center">
                    <div className="col">
                      <h2>Price</h2>
                      <h3 className="text-primary font-weight-bold">
                        {this.props.product.prices[1]}$
                      </h3>
                      <h5 className="text-danger font-weight-bold">
                        <s>{this.props.product.prices[0]}$</s>
                      </h5>
                      <hr />
                      <Button
                        variant="secondary"
                        onClick={this.props.handleClose}
                      >
                        Continue Shopping
                      </Button>
                      {/* <select style={{ height: "30px", width: "100px", backgroundColor: "#FCC400" }} className="mr-2 md-form colorful-select dropdown-primary">
                        
                        <option disabled defaultValue >color</option>
                        <option value="1">Red</option>
                        <option value="2">Blue</option>
                        <option value="3">White</option>
                    </select> */}

                      {/* <select style={{ height: "30px", width: "100px", backgroundColor: "#FCC400" }} className=" md-form  dropdown-primary ">
                        <option disabled defaultValue>Size </option>
                        <option value="2">Small</option>
                        <option value="3">Medium</option>
                        <option value="4">Large</option>
                    </select> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* // images modal */}
            <div>
              <MDBContainer>
                <MDBModal
                  isOpen={this.state.modal13}
                  toggle={this.toggle(13)}
                  className="w-auto p-3"
                >
                  <MDBModalBody>
                    <MDBContainer>
                      <MDBCarousel
                        activeItem={1}
                        length={this.state.currentArrayOfImages.length}
                        showControls={true}
                        showIndicators={true}
                        className="z-depth-1"
                      >
                        <MDBCarouselInner>
                          {this.state.currentArrayOfImages.length > 0
                            ? this.state.currentArrayOfImages.map(
                                (item, index) => {
                                  return (
                                    <MDBCarouselItem itemId={index + 1}>
                                      <MDBView>
                                        <img
                                          className="d-block"
                                          style={{ maxHeight: "550px" }}
                                          src={item}
                                          alt="First slide"
                                        />
                                        <MDBMask overlay="black-light" />
                                      </MDBView>
                                    </MDBCarouselItem>
                                  );
                                }
                              )
                            : null}
                        </MDBCarouselInner>
                      </MDBCarousel>
                    </MDBContainer>
                  </MDBModalBody>
                </MDBModal>
              </MDBContainer>
            </div>
            {/*images modal end here */}
          </Modal.Body>
        </Modal>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.userReducer.token,
  };
};

export default connect(mapStateToProps, {
  addToBasketAction,
  addToFavoriteAction,
})(ModalRouter);

// <div className="product-image7">
// <li
//   // onClick={() => this.sendImagesToCarousel(item.images)}
//   onClick={() => this.sendProductToModal(item)}
//   >
//   <a
//   // onClick={this.toggle(13)}
//   >
//     <img
//     alt = 'alt'
//       className="pic-1"
//       style={{ maxHeight: "400px" }}
//       src={item.images.protoTypes[0]}
//     />
//     <img
//     alt = 'alt2'
//       className="pic-2"
//       src={item.images.protoTypes[1]}
//     />
//   </a>
// </li>
// <ul className="social">
//   <li
//     // onClick={() => this.sendImagesToCarousel(item.images)}
//     onClick={() => this.sendProductToModal(item)}
//   >
//     <a
//       // onClick={this.toggle(13)}
//       className="fas fa-expand-arrows-alt"
//     ></a>
//   </li>
//   {/* {this.props.isAuthenticated && (
//   <li>
//     <a href="#" className="far fa-heart"
//       role="button"
//       tabIndex={1}
//     //  onClick={() => this.addToFavorite(item)}
//     ></a>
//   </li>
//   )} */}

//   {/* {this.props.isAuthenticated && (
//   <li>
//     <a
//       role="button"
//      // onClick={() => this.addToBasket(item)}
//       className="fa fa-shopping-cart"
//     ></a>
//   </li>
//   )} */}
// </ul>

// {/* <span className="product-new-label">New</span> */}
// </div>
