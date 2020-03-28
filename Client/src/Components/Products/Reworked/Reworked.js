
import Tailor from '../img/Tailor.jpg'
import Recycled1 from '../img/Recycling.jpg'
import Recycled2 from '../img/Recycling2.jpg'
import Recycled3 from '../img/Recycling3.jpg'



import React from "react";
import { BackTop } from "antd";

import { WaveLoading } from "react-loadingg";

import { fetchWomenProducts } from '../../../Redux/Actions/products'
import { connect } from "react-redux";
import { addToBasketAction } from "../../../Redux/Actions/basket";
import { addToFavoriteAction } from '../../../Redux/Actions/favorite'
import {
  MDBContainer,
  MDBModal,
  MDBModalBody,
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask
} from "mdbreact";
import SuccessMessage from '../../Messages/SuccessMessage'

// ----------------------------------

{
  /* DON'T DELETE IT PLEASE */
}

//  {/* <h3 class="cost">
//  <span class="glyphicon glyphicon-usd"></span> 15.00{" "}
//  <small class="pre-cost">
//      <span class="glyphicon glyphicon-usd"></span> 20.00
//  </small>
//  </h3> */}

// ----------------------------------------------------------------------

class Women extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: null,
      currentProduct: [],
      currentArrayOfImages: [],
      addedToBasketMessage: false,
      addedToFavoriteMessage: false,
      // alreadyInBasket : false,
      // alreadyInBasketMessage :'',
      // //images modal
      modal13: false
    };
  }

  componentDidMount() {
    this.props.fetchWomenProducts().then(res => {
      this.setState({ data: this.props.getWomenProducts.womenProducts })
    })
  }

  // for the images modal
  toggle = nr => () => {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  };

  addToBasket(item) {


    this.props.addToBasketAction(item).then(res => {

      this.setState({ addedToBasketMessage: true });
      setTimeout(() => {
        this.setState({ addedToBasketMessage: false });
      }, 100);

    })

  }
  /// add the Favorites to the basket
  addToFavorite(item) {

    this.props.addToFavoriteAction(item).then(res => {
      this.setState({ addedToFavoriteMessage: true });
      setTimeout(() => {
        this.setState({ addedToFavoriteMessage: false });
      }, 100);
    });
  }

  sendImagesToCarousel(array) {
    this.setState({ currentArrayOfImages: array.protoTypes });
  };
  // to take a Number and convert it to Star
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

        {this.state.addedToBasketMessage && <SuccessMessage text='added to Basket' />}
        {this.state.addedToFavoriteMessage && <SuccessMessage text='added to Favorite' />}
        {/* {this.state.alreadyInBasket && (<SuccessMessage text = {this.state.alreadyInBasketMessage}/>)} */}

        <div className="container" >
          <div className="row">


            {/*Started Carosel */}
            <div id="carousel-example-1z" className="carousel slide carousel-fade" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#carousel-example-1z" data-slide-to="0" className="active"></li>
                <li data-target="#carousel-example-1z" data-slide-to="1"></li>
                <li data-target="#carousel-example-1z" data-slide-to="2"></li>
                <li data-target="#carousel-example-1z" data-slide-to="3"></li>

              </ol>

              <div className="carousel-inner mt-4" role="listbox">



                <div className="carousel-item  active">
                  <img className="d-block w-100 carouselimag" style={{ maxWidth: "100%", maxHeight: "100%" }} src={Tailor}
                    alt="Second slide" />
                </div>




                <div className="carousel-item">
                  <img className="d-block w-100 carouselimag" style={{ maxWidth: "100%", maxHeight: "80%" }} src={Recycled1}
                    alt="Second slide" />
                </div>




                <div className="carousel-item ">
                  <img className="d-block w-100 carouselimag" style={{ maxWidth: "100%", maxHeight: "80%" }} src={Recycled2}
                    alt="Third slide" />
                </div>




                <div className="carousel-item ">
                  <img className="d-block w-100 carouselimag" style={{ maxWidth: "100%", maxHeight: "70%" }} src={Recycled3}
                    alt="Forth slide" />
                </div>

              </div>



              <a className="carousel-control-prev" href="#carousel-example-1z" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only"></span>
              </a>
              <a className="carousel-control-next" href="#carousel-example-1z" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only"></span>
              </a>
            </div>
            {/*end Carosel*/}


            
            {this.state.data ? (
              this.state.data.map((item, index) => {
                return (<>

                  <div key={index} className="col-md-3 col-sm-6">
                    <div className="product-grid7">
                      <div className="product-content">
                        <h3 className="title">
                          <a href="#">{item.name}</a>
                        </h3>
                      </div>

                      <div className="product-image7">
                        <li
                          onClick={() => this.sendImagesToCarousel(item.images)}
                        >
                          <a onClick={this.toggle(13)}>
                            <img
                              className="pic-1"
                              style={{ maxHeight: "400px" }}
                              src={item.images.protoTypes[0]}
                            />
                            <img
                              className="pic-2"
                              src={item.images.protoTypes[1]}
                            />
                          </a>
                        </li>
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
                            <a href="#" className="far fa-heart"
                              role="button"
                              tabIndex={1}
                              onClick={() => this.addToFavorite(item)}
                            ></a>
                          </li>

                          <li>
                            <a
                              role="button"
                              onClick={() => this.addToBasket(item)}
                              className="fa fa-shopping-cart"
                            ></a>
                          </li>
                        </ul>

                        {/* <span className="product-new-label">New</span> */}
                      </div>

                      <div className="product-content">
                        <ul className="rating">
                          {this.starMaker(item.rating)}
                        </ul>

                        <div className="price">
                          &#8364;
                                    {item.prices[0]}
                          <span>{item.prices[1]}</span>
                        </div>

                        {/* <img src={ImageZoomAnim} />
                                   */}
                      </div>
                    </div>
                  </div>
                </>);
              })
            ) : (
                <div style={{ height: "350px", width: "200px", textAlign: "center", position: "relative", left: "40%" }}>
                  <span style={{ fontSize: "20px", fontWeight: "700" }}>Loading ...
                          <WaveLoading />
                  </span>
                </div>
              )}

          </div>
        </div>





        {/* Back to top btn */}
        <div>
          <BackTop>
            <i
              className="fas fa-angle-double-up"
              style={{ color: "black", fontSize: "40px" }}
            ></i>
          </BackTop>
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
                      {this.state.currentArrayOfImages.length > 0
                        ? this.state.currentArrayOfImages.map((item, index) => {
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

                              {/* <MDBCarouselCaption>
          
          
                                              <h3 className="h3-responsive">Light mask</h3>
                                              <p>First text</p>
                                            </MDBCarouselCaption> */}
                            </MDBCarouselItem>
                          );
                        })
                        : null}
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

const mapStateToProps = (state) => {
  return {
    getWomenProducts: state.productReducer
  }
}


export default connect(mapStateToProps, { addToBasketAction, addToFavoriteAction, fetchWomenProducts })(Women);

