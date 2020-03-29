import React, { Component, Link } from 'react';
import ReworkedImg from './Boxes images/wailorWorkShop.jpg';
import { fetchWomenProducts } from '../../Redux/Actions/products'
import { fetchMenProducts } from '../../Redux/Actions/products'
import { connect } from "react-redux";


import './home.css';

import video from './video/GUSTFashionEditorial .mp4';
import caro1 from './imgCarousel/d-women4.jpg';
import caro2 from './imgCarousel/d-men1.jpeg';
import caro3 from './imgCarousel/d-women1.jpg';
import caro4 from './imgCarousel/d-men2.jpg';
import caro5 from './imgCarousel/d-men3.jpg';
import caro6 from './imgCarousel/d-women3.jpg';




import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';


class Home extends Component {

  constructor(props) {
    super(props)

    this.state = {
      women: [],
      men: []
    }
  }

  componentDidMount() {
    this.props.fetchWomenProducts().then(res => {
      this.setState({ women: this.props.getWomenProducts.womenProducts })
    })

    this.props.fetchMenProducts().then(res => {
      this.setState({ men: this.props.getMenProducts.menProducts })
    })
  }



  render() {

    return (
      <>




        {/*Started Carosel */}
        <div id="carousel-example-1z" className="carousel slide carousel-fade" data-ride="carousel">

          <ol className="carousel-indicators">
            <li data-target="#carousel-example-1z" data-slide-to="0" className="active"></li>
            <li data-target="#carousel-example-1z" data-slide-to="1"></li>
            <li data-target="#carousel-example-1z" data-slide-to="2"></li>
            <li data-target="#carousel-example-1z" data-slide-to="3"></li>
            <li data-target="#carousel-example-1z" data-slide-to="4"></li>
            <li data-target="#carousel-example-1z" data-slide-to="5"></li>
          </ol>

          <div className="carousel-inner mt-4" role="listbox">

            <div className="carousel-item active">
              <img className="d-block w-100 carouselimag" src={caro1}
                alt="First slide" />

            </div>

            <div className="carousel-item">
              <img className="d-block w-100 carouselimag" src={caro2}
                alt="Second slide" />

            </div>

            <div className="carousel-item">
              <img className="d-block w-100 carouselimag" src={caro3}
                alt="Third slide" />
            </div>

            <div className="carousel-item ">
              <img className="d-block w-100 carouselimag" src={caro4}
                alt="Forth slide" />
            </div>


            <div className="carousel-item ">
              <img className="d-block w-100 carouselimag" src={caro5}
                alt="Fifth slide" />
            </div>


            <div className="carousel-item ">
              <img className="d-block w-100 carouselimag" src={caro6}
                alt="Sixth slide" />
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
                  <a href="#" class="btn-join">
                    Get inspired <i class="fas fa-chevron-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section> */}




        {/* video Header */}
        <section className='section-2'>
          <div className="container col-lg-12 ">
            <div className="row align-items-center">
              <div className="col-lg-6 order-lg-2">

                <header >
                  <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
                    <source src={video} type="video/mp4" />
                  </video>

                </header>

              </div>
              <div className="col-lg-6 order-lg-1">
                <div className="p-5">
                  <h2 className="display-5">– Daily style watch Our favourite looks for you</h2>
                  <p >“Fashion is not something that exists in dresses only. Fashion is in the sky, in the street, fashion has to do with ideas, the way we live, what is happening.”</p>
                  <a href="#" class="btn-join">
                    Discover More <i class="fas fa-chevron-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>





        {/*shop women Products Carousel sta */}
        <div class="my-5 text-center container">
          <div class="womenbox" >
            <p className='heartbeat'>Women Shop</p>
          </div>

          {/*more info: https://brainhubeu.github.io/react-carousel/ */}
          <Carousel
            slidesPerPage={4}
            autoPlay={3000}
            animationSpeed={1000}
            infinite
            arrows
            dots
            arrowLeft={<i class="fas fa-arrow-left"></i>}
            arrowRight={<i class="fas fa-arrow-right"></i>}
            addArrowClickHandler

            //media  Quiries
            breakpoints={{
              640: {
                slidesPerPage: 1,
                arrows: false
              },
              900: {
                slidesPerPage: 2,
                arrows: false
              }
            }}
          >
            <div class="col-12 col-md d-flex align-items-center justify-content-center">
              {this.state.women.length > 0 ?
                <img
                  className="pic-1"
                  style={{ maxHeight: "400px" }}
                  src={this.state.women[0].images.protoTypes[0]}
                />

                :
                <h1>Loading image...</h1>
              }
            </div>
            <div class="col-12 col-md d-flex align-items-center justify-content-center">
              {this.state.women.length > 0 ?
                <img
                  className="pic-1"
                  style={{ maxHeight: "400px" }}
                  src={this.state.women[1].images.protoTypes[0]}
                />

                :
                <h1>Loading iamge...</h1>
              }
            </div>
            <div class="col-12 col-md d-flex align-items-center justify-content-center" class="col-12 col-md d-flex align-items-center justify-content-center">
              {this.state.women.length > 0 ?
                <img
                  className="pic-1"
                  style={{ maxHeight: "400px" }}
                  src={this.state.women[2].images.protoTypes[0]}
                />

                :
                <h1>Loading iamge...</h1>
              }
            </div>
            <div class="col-12 col-md d-flex align-items-center justify-content-center">
              {this.state.women.length > 0 ?
                <img
                  className="pic-1"
                  style={{ maxHeight: "400px" }}
                  src={this.state.women[3].images.protoTypes[0]}
                />

                :
                <h1>Loading iamge...</h1>
              }
            </div>



            <div class="col-12 col-md d-flex align-items-center justify-content-center">
              {this.state.women.length > 0 ?
                <img
                  className="pic-1"
                  style={{ maxHeight: "400px" }}
                  src={this.state.women[4].images.protoTypes[0]}
                />

                :
                <h1>Loading iamge...</h1>
              }
            </div>

            <div class="col-12 col-md d-flex align-items-center justify-content-center" class="col-12 col-md d-flex align-items-center justify-content-center">
              {this.state.women.length > 0 ?
                <img
                  className="pic-1"
                  style={{ maxHeight: "400px" }}
                  src={this.state.women[5].images.protoTypes[0]}
                />

                :
                <h1>Loading</h1>
              }
            </div>
          </Carousel>
        </div >
        {/* shop women Products Carousel end */}








        <div className="menBox">
          <div className="row">
            <div className="col-md-4 col-lg-6 ">

              <header className="oceanheader">
                <video autoPlay playsinline muted loop preload poster="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/oceanshot.jpg">
                  <source src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/ocean-small.webm" />
                  <source src="http://thenewcode.com/assets/videos/ocean-small.mp4" />
                </video>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 285 80" preserveAspectRatio="xMidYMid slice">
                  <defs>
                    <mask id="mask" x="0" y="0" width="100%" height="100%" >
                      <rect x="0" y="0" width="100%" height="100%" />
                      <text x="88" y="30">old Classic  but</text>
                      <text x="88" y="50">fellin fantastic</text>
                    </mask>
                  </defs>
                  <rect x="0" y="0" width="80%" height="80%" />
                </svg>
              </header>
            </div>
          </div>
        </div>



        {/*Products men Carousel  */}
        <div class="my-5 text-center container">
          <div class="womenbox" >
            <p className='heartbeat'>Men Shop</p>
          </div>

          {/*more info: https://brainhubeu.github.io/react-carousel/ */}
          <Carousel
            slidesPerPage={4}
            autoPlay={3000}
            animationSpeed={1000}
            infinite
            arrows
            dots
            arrowLeft={<i class="fas fa-arrow-left"></i>}
            arrowRight={<i class="fas fa-arrow-right"></i>}
            addArrowClickHandler

            //media  Quiries
            breakpoints={{
              640: {
                slidesPerPage: 1,
                arrows: false
              },
              900: {
                slidesPerPage: 2,
                arrows: false
              }
            }}
          >

            <div class="col-12 col-md d-flex align-items-center justify-content-center" class="col-12 col-md d-flex align-items-center justify-content-center">
              {this.state.men.length > 0 ?
                <img
                  className="pic-1"
                  style={{ maxHeight: "350px" }}
                  src={this.state.men[5].images.protoTypes[0]}
                />

                :
                <h1>Loading image...</h1>
              }
            </div>

            <div class="col-12 col-md d-flex align-items-center justify-content-center">
              {this.state.men.length > 0 ?
                <img
                  className="pic-1"
                  style={{ maxHeight: "360px" }}
                  src={this.state.men[4].images.protoTypes[0]}
                />

                :
                <h1>Loading image...</h1>
              }
            </div>




            <div class="col-12 col-md d-flex align-items-center justify-content-center">
              {this.state.men.length > 0 ?
                <img
                  className="pic-1"
                  style={{ maxHeight: "360px" }}
                  src={this.state.men[3].images.protoTypes[0]}
                />

                :
                <h1>Loading image...</h1>
              }
            </div>


            <div class="col-12 col-md d-flex align-items-center justify-content-center" class="col-12 col-md d-flex align-items-center justify-content-center">
              {this.state.men.length > 0 ?
                <img
                  className="pic-1"
                  style={{ maxHeight: "360px" }}
                  src={this.state.men[2].images.protoTypes[0]}
                />

                :
                <h1>Loading image...</h1>
              }
            </div>


            <div class="col-12 col-md d-flex align-items-center justify-content-center">
              {this.state.men.length > 0 ?
                <img
                  className="pic-1"
                  style={{ maxHeight: "360px" }}
                  src={this.state.men[1].images.protoTypes[0]}
                />

                :
                <h1>Loading image...</h1>
              }
            </div>

            <div class="col-12 col-md d-flex align-items-center justify-content-center">
              {this.state.men.length > 0 ?
                <img
                  className="pic-1"
                  style={{ maxHeight: "360px" }}
                  src={this.state.men[0].images.protoTypes[0]}
                />

                :
                <h1>Loading image...</h1>
              }
            </div>

          </Carousel>
        </div >

        {/*Products men Carousel end */}










        {/* reworked BOX */}

        < div className="container section-2" >
          <div className="row">

            <div className="col-md-6 col-lg-6 ">
              <img className="img-fluid" src={ReworkedImg} alt="Testig Photo" />
            </div>

            <div className="col-md-6 text-center mt-5">
              <h2 className="display-5">– Got talent to Rework?<br /> Scount is your right PLace to share your skills </h2>
              <p >“Fashion is not something that exists in dresses only. Fashion is in the sky, in the street, fashion has to do with ideas”</p>
              <a href="#" class="btn-join">
                Register now  <i class="fas fa-chevron-right"></i>
              </a>
            </div>
          </div>
        </div >








      



        {/*Products Second Hand Carousel  */}
        {/*Products men Carousel  */}
        <div class="my-5 text-center container">
          <div class="womenbox" >
            <p className='heartbeat'>Reworked</p>
          </div>

          {/*more info: https://brainhubeu.github.io/react-carousel/ */}
          <Carousel
            slidesPerPage={4}
            autoPlay={3000}
            animationSpeed={1000}
            infinite
            arrows
            dots
            arrowLeft={<i class="fas fa-arrow-left"></i>}
            arrowRight={<i class="fas fa-arrow-right"></i>}
            addArrowClickHandler

            //media  Quiries
            breakpoints={{
              640: {
                slidesPerPage: 1,
                arrows: false
              },
              900: {
                slidesPerPage: 2,
                arrows: false
              }
            }}
          >

            <div class="col-12 col-md d-flex align-items-center justify-content-center" class="col-12 col-md d-flex align-items-center justify-content-center">
              {this.state.men.length > 0 ?
                <img
                  className="pic-1"
                  style={{ maxHeight: "350px" }}
                  src={this.state.men[5].images.protoTypes[0]}
                />

                :
                <h1>Loading image...</h1>
              }
            </div>

            <div class="col-12 col-md d-flex align-items-center justify-content-center">
              {this.state.men.length > 0 ?
                <img
                  className="pic-1"
                  style={{ maxHeight: "360px" }}
                  src={this.state.men[4].images.protoTypes[0]}
                />

                :
                <h1>Loading image...</h1>
              }
            </div>




            <div class="col-12 col-md d-flex align-items-center justify-content-center">
              {this.state.men.length > 0 ?
                <img
                  className="pic-1"
                  style={{ maxHeight: "360px" }}
                  src={this.state.men[3].images.protoTypes[0]}
                />

                :
                <h1>Loading image...</h1>
              }
            </div>


            <div class="col-12 col-md d-flex align-items-center justify-content-center" class="col-12 col-md d-flex align-items-center justify-content-center">
              {this.state.men.length > 0 ?
                <img
                  className="pic-1"
                  style={{ maxHeight: "360px" }}
                  src={this.state.men[2].images.protoTypes[0]}
                />

                :
                <h1>Loading image...</h1>
              }
            </div>


            <div class="col-12 col-md d-flex align-items-center justify-content-center">
              {this.state.men.length > 0 ?
                <img
                  className="pic-1"
                  style={{ maxHeight: "360px" }}
                  src={this.state.men[1].images.protoTypes[0]}
                />

                :
                <h1>Loading image...</h1>
              }
            </div>

            <div class="col-12 col-md d-flex align-items-center justify-content-center">
              {this.state.men.length > 0 ?
                <img
                  className="pic-1"
                  style={{ maxHeight: "360px" }}
                  src={this.state.men[0].images.protoTypes[0]}
                />

                :
                <h1>Loading image...</h1>
              }
            </div>

          </Carousel>
        </div >
        {/*Products SecondHand Carousel end */}




        <br />
        <br />

        {/* payment cards */}
        <div class="credit-cards" style={{ textAlign: "center", width: "100%", padding: "5px", margin: "5px" }} >
          <img style={{ height: "40px", padding: "5px", margin: "5px" }} src="https://shoplineimg.com/assets/footer/card_visa.png" />
          <img style={{ height: "40px", padding: "5px", margin: "5px" }} src="https://shoplineimg.com/assets/footer/card_master.png" />
          <img style={{ height: "40px", padding: "5px", margin: "5px" }} src="https://shoplineimg.com/assets/footer/card_paypal.png" />
          <img style={{ height: "40px", padding: "5px", margin: "5px" }} src="https://shoplineimg.com/assets/footer/card_unionpay.png" />
          <img style={{ height: "40px", padding: "5px", margin: "5px" }} src="https://shoplineimg.com/assets/footer/card_linepay.png" />
          <img style={{ height: "40px", padding: "5px", margin: "5px" }} src="https://shoplineimg.com/assets/footer/card_tw_711_pay.png" />
          <img style={{ height: "40px", padding: "5px", margin: "5px" }} src="https://shoplineimg.com/assets/footer/card_tw_fm_pay.png" />
          <img style={{ height: "40px", padding: "5px", margin: "5px" }} src="https://shoplineimg.com/assets/footer/card_taishin.png" />
          <img style={{ height: "40px", padding: "5px", margin: "5px" }} src="https://shoplineimg.com/assets/footer/card_amex.png" />
          <img style={{ height: "40px", padding: "5px", margin: "5px" }} src="https://shoplineimg.com/assets/footer/card_ecpay.png" />
          <img style={{ height: "40px", padding: "5px", margin: "5px" }} src="https://shoplineimg.com/assets/footer/card_jcb.png" />
        </div>

        <br />
      </>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    getWomenProducts: state.productReducer,
    getMenProducts: state.productReducer

  }
}

export default connect(mapStateToProps, { fetchMenProducts, fetchWomenProducts })(Home);
