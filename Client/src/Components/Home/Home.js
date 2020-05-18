import React, { Component } from "react";
import ReworkedImg from "./Boxes images/wailorWorkShop.jpg";
import menBox from "./Boxes images/menBox.jpg";
import { fetchWomenProducts } from "../../Redux/Actions/products";
import { fetchMenProducts } from "../../Redux/Actions/products";
import { connect } from "react-redux";
import ModalRouter from "./ModalRouter";
// import ProductProfile from "../Products/ProductProfile";
// import {Redirect} from 'react-router-dom'

import "./home.css";

//import video from "./video/GUSTFashionEditorial .mp4";
import caro1 from "./imgCarousel/d-women4.jpg";
import caro2 from "./imgCarousel/d-men1.jpeg";
import caro3 from "./imgCarousel/d-women1.jpg";
import caro4 from "./imgCarousel/d-men2.jpg";
import caro5 from "./imgCarousel/d-men3.jpg";
import caro6 from "./imgCarousel/d-women3.jpg";
import {Link} from 'react-router-dom'

import Carousel /* , { Dots }  */ from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      women: [],
      men: [],
      // productRouter: null
      // currentArrayOfImages: [],

      currentProduct: null,
      show: false,
    };
  }

  componentDidMount() {
    this.props.fetchWomenProducts().then((res) => {
      this.setState({ women: this.props.getWomenProducts.womenProducts });
    });

    this.props.fetchMenProducts().then((res) => {
      this.setState({ men: this.props.getMenProducts.menProducts });
    });
  }

  sendProductToModal(product) {
    this.setState({
      currentProduct: product,
      show: true,
    });
  }

  handleClose() {
    this.setState({ show: false });
  }

  // reviewer(item){
  //   console.log(item)
  //   this.setState({productRouter:item})
  // }

  render() {
    return (
      <>
      
        {/*Started Carosel */}
        <div
          id="carousel-example-1z"
          className="carousel slide carousel-fade"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carousel-example-1z"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carousel-example-1z" data-slide-to="1"></li>
            <li data-target="#carousel-example-1z" data-slide-to="2"></li>
            <li data-target="#carousel-example-1z" data-slide-to="3"></li>
            <li data-target="#carousel-example-1z" data-slide-to="4"></li>
            <li data-target="#carousel-example-1z" data-slide-to="5"></li>
          </ol>

          <div className="carousel-inner mt-4" role="listbox">
            <div className="carousel-item active">
              <img
                className="d-block w-100 carouselimag"
                src={caro1}
                alt="First slide"
              />
            </div>

            <div className="carousel-item">
              <img
                className="d-block w-100 carouselimag"
                src={caro2}
                alt="Second slide"
              />
            </div>

            <div className="carousel-item">
              <img
                className="d-block w-100 carouselimag"
                src={caro3}
                alt="Third slide"
              />
            </div>

            <div className="carousel-item ">
              <img
                className="d-block w-100 carouselimag"
                src={caro4}
                alt="Forth slide"
              />
            </div>

            <div className="carousel-item ">
              <img
                className="d-block w-100 carouselimag"
                src={caro5}
                alt="Fifth slide"
              />
            </div>

            <div className="carousel-item ">
              <img
                className="d-block w-100 carouselimag"
                src={caro6}
                alt="Sixth slide"
              />
            </div>
          </div>

          <a
            className="carousel-control-prev"
            href="#carousel-example-1z"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only"></span>
          </a>
          <a
            className="carousel-control-next"
            href="#carousel-example-1z"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only"></span>
          </a>
        </div>
        {/*end Carosel*/}

        <br />
        <br />

        {/*PLEASE DON'T DELETE IT   */}
        {/*Section start*/}
        {/* <section className='section-1'>
          <div className="container col-lg-12 ">
            <div className="row align-items-center">
              <div className="col-lg-6 order-lg-2">
                <div className="p-5">
                  <img className="img-fluid" src={BoxIMmage} alt="" />
                </div>
              </div>
              <div className="col-lg-6 order-lg-1">
                <div className="p-5">
                  <h2 className="display-5">– Coco Chanel</h2>
                  <p >“Fashion is not something that exists in dresses only. Fashion is in the sky, in the street, fashion has to do with ideas, the way we live, what is happening.”</p>
                  <a href="#" className="btn-join">
                    Get inspired <i className="fas fa-chevron-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* video Header */}
        <section className="section-2 womens">
          <div className="container col-lg-12 ">
            <div className="row align-items-center">
              <div className="col-lg-6 order-lg-2">
                {/* <header>
                  <video
                    playsInline="playsinline"
                    autoPlay="autoplay"
                    muted="muted"
                    loop="loop"
                  >
                    <source src={video} type="video/mp4" />
                  </video>
                </header> */}
                <img src='https://cdn.digitalmenta.com/wp-content/uploads/2019/04/potenciar-campanas-shopping.jpg'/>
              </div>
              <div className="col-lg-6 order-lg-1">
                <div className="p-5">
                  <h2 className="display-5">
                    – Daily style watch Our favourite looks for you
                  </h2>
                  <p>
                    “Fashion is not something that exists in dresses only.
                    Fashion is in the sky, in the street, fashion has to do with
                    ideas, the way we live, what is happening.”
                  </p>
                  <Link to="/products/women" className="btn-join">
                    Discover More <i className="fas fa-chevron-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*shop women Products Carousel sta */}
        <div className="my-5 womens text-center container">
          <div className="womenbox">
            <p className="heartbeat">Women's Collection </p>
          </div>

          <Carousel
            slidesPerPage={4}
            autoPlay={3000}
            animationSpeed={1000}
            infinite
            arrows
            arrowLeft={<i className="fas fa-arrow-left"></i>}
            arrowRight={<i className="fas fa-arrow-right"></i>}
            addArrowClickHandler
            //media  Quiries
            breakpoints={{
              640: {
                slidesPerPage: 1,
                arrows: false,
              },
              900: {
                slidesPerPage: 2,
                arrows: false,
              },
            }}
          >
            {this.state.women.length > 0 ? (
              this.state.women.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="col-12 col-md d-flex align-items-center justify-content-center"
                  >
                    <div>
                      <div className="product-grid7" style={{ width: "300px" }}>
                        <div className="product-image7">
                          <li onClick={() => this.sendProductToModal(item)}>
                            <a>
                              <img
                                alt="alt"
                                className="pic-1"
                                style={{ maxHeight: "400px" }}
                                src={item.images.protoTypes[0]}
                              />
                              <img
                                alt="alt2"
                                className="pic-2"
                                src={item.images.protoTypes[1]}
                              />
                            </a>
                          </li>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <h1>...</h1>
            )}
          </Carousel>
        </div>
        {/* shop women Products Carousel end */}

        <div className="mens container section-2 menBox mens">
          <div className="row">
            <div className="col-md-6 col-lg-6 ">
              <img className="img-fluid" src={menBox} alt="Testig Photo" />
            </div>

            <div className="col-md-6 text-center mt-5">
              <h2 className="display-5">
                – Got talent to men's fashion!
                <br />
              </h2>
              <p>
                “Fashion is not something that exists in dresses only. Fashion
                is in the sky, in the street, fashion has to do with ideas”
              </p>
              <Link to="/products/men" className="btn-join">
                    Discover More <i className="fas fa-chevron-right"></i>
                  </Link>
            </div>
          </div>
        </div>

        {/*Products men Carousel  */}
        <div className="my-5 mens text-center container">
          <div className="womenbox">
            <p className="heartbeat">Men's Collection </p>
          </div>

          {/*more info: https://brainhubeu.github.io/react-carousel/ */}
          <Carousel
            slidesPerPage={4}
            autoPlay={3000}
            animationSpeed={1000}
            infinite
            arrows
            arrowLeft={<i className="fas fa-arrow-left"></i>}
            arrowRight={<i className="fas fa-arrow-right"></i>}
            addArrowClickHandler
            //media  Quiries
            breakpoints={{
              640: {
                slidesPerPage: 1,
                arrows: false,
              },
              900: {
                slidesPerPage: 2,
                arrows: false,
              },
            }}
          >
            {this.state.men.length > 0 ? (
              this.state.men.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="col-12 col-md d-flex align-items-center justify-content-center"
                  >
                    <div>
                      <div className="product-grid7" style={{ width: "300px" }}>
                        <div className="product-image7">
                          <li onClick={() => this.sendProductToModal(item)}>
                            <a>
                              <img
                                alt="alt"
                                className="pic-1"
                                style={{ maxHeight: "400px" }}
                                src={item.images.protoTypes[0]}
                              />
                              <img
                                alt="alt2"
                                className="pic-2"
                                src={item.images.protoTypes[1]}
                              />
                            </a>
                          </li>
                          <ul className="social">
                            <li onClick={() => this.sendProductToModal(item)}>
                              <a className="fas fa-expand-arrows-alt"></a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <h1>...</h1>
            )}
          </Carousel>
        </div>

        {/*Products men Carousel end */}
        {/* reworked BOX */}

        <div className="reworked container section-2">
          <div className="row">
            <div className="col-md-6 col-lg-6 ">
              <img className="img-fluid" src={ReworkedImg} alt="Testig Photo" />
            </div>

            <div className="col-md-6 text-center mt-5">
              <h2 className="display-5">
                – Got talent to Rework?
                <br /> Scount is your right PLace to share your skills{" "}
              </h2>
              <p>
                “Fashion is not something that exists in dresses only. Fashion
                is in the sky, in the street, fashion has to do with ideas”
              </p>
              {/* <a href="#" className="btn-join">
                Register now  <i className="fas fa-chevron-right"></i>
              </a> */}
            </div>
          </div>
        </div>

        {/*Products Second Hand Carousel  */}
        {/*Products men Carousel  */}
        <div className="my-5 reworked text-center container">
          <div className="womenbox">
            <p className="heartbeat">Reworked Collection </p>
          </div>
          <h2 className="h1-responsive font-weight-bold my-4">
            still not finished ...
          </h2>
          {/*more info: https://brainhubeu.github.io/react-carousel/ */}
          <Carousel
            slidesPerPage={4}
            autoPlay={3000}
            animationSpeed={1000}
            infinite
            arrows
            arrowLeft={<i className="fas fa-arrow-left"></i>}
            arrowRight={<i className="fas fa-arrow-right"></i>}
            addArrowClickHandler
            //media  Quiries
            breakpoints={{
              640: {
                slidesPerPage: 1,
                arrows: false,
              },
              900: {
                slidesPerPage: 2,
                arrows: false,
              },
            }}
          >
            {this.state.men.length > 0 ? (
              this.state.men.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="col-12 col-md d-flex align-items-center justify-content-center"
                  >
                    <img
                      className="pic-1"
                      style={{ maxHeight: "350px" }}
                      src={item.images.protoTypes[0]}
                    />
                  </div>
                );
              })
            ) : (
              <h1>...</h1>
            )}
          </Carousel>
        </div>

        <br />

        <br />
        {/* {this.state.productRouter && (
          <>
          <Redirect
            to = {`/product-profile/${this.state.productRouter.name}/${this.state.productRouter.description}/${this.state.productRouter.images.protoTypes[0]}`}
          />
          </>
        )} */}

        {this.state.currentProduct && (
          <ModalRouter
            show={this.state.show}
            handleClose={this.handleClose.bind(this)}
            product={this.state.currentProduct}
          />
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    getWomenProducts: state.productReducer,
    getMenProducts: state.productReducer,
  };
};

export default connect(mapStateToProps, {
  fetchMenProducts,
  fetchWomenProducts,
})(Home);
