import React, { Component } from 'react';
import ReworkedImg from './Boxes images/wailorWorkShop.jpg';
import menBox from './Boxes images/menBox.jpg';
import { fetchWomenProducts } from '../../Redux/Actions/products'
import { fetchMenProducts } from '../../Redux/Actions/products'
import { connect } from "react-redux";
// import ProductProfile from "../Products/ProductProfile";
// import {Redirect} from 'react-router-dom'
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
import './home.css';

import video from './video/GUSTFashionEditorial .mp4';
import caro1 from './imgCarousel/d-women4.jpg';
import caro2 from './imgCarousel/d-men1.jpeg';
import caro3 from './imgCarousel/d-women1.jpg';
import caro4 from './imgCarousel/d-men2.jpg';
import caro5 from './imgCarousel/d-men3.jpg';
import caro6 from './imgCarousel/d-women3.jpg';




import Carousel/* , { Dots }  */from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';


class Home extends Component {

  constructor(props) {
    super(props)

    this.state = {
      women: [],
      men: [],
      // productRouter: null
      currentArrayOfImages: [],
      modal13: false


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
  toggle = nr => () => {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  };
  sendImagesToCarousel(array) {
    this.setState({ currentArrayOfImages: array.protoTypes });
  };

  // reviewer(item){
  //   console.log(item)
  //   this.setState({productRouter:item})
  // }

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
                  <a href="#" className="btn-join">
                    Get inspired <i className="fas fa-chevron-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section> */}




        {/* video Header */}
        <section className='section-2 womens'>
          <div className="container col-lg-12 ">
            <div className="row align-items-center">
              <div className="col-lg-6 order-lg-2">

                 <header>
                  <video playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
                    <source src={video} type="video/mp4" />
                  </video>

                </header> 

              </div>
              <div className="col-lg-6 order-lg-1">
                <div className="p-5">
                  <h2 className="display-5">– Daily style watch Our favourite looks for you</h2>
                  <p >“Fashion is not something that exists in dresses only. Fashion is in the sky, in the street, fashion has to do with ideas, the way we live, what is happening.”</p>
                  <a href="#" className="btn-join">
                    Discover More <i className="fas fa-chevron-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>





        {/*shop women Products Carousel sta */}
        <div className="my-5 womens text-center container">
          <div className="womenbox" >
            <p className='heartbeat'>Women's Collection </p>
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
                arrows: false
              },
              900: {
                slidesPerPage: 2,
                arrows: false
              }
            }}
          >
            

              {this.state.women.length > 0 ? this.state.women.map((item, index) => {
               return (
                <div key = {index} className="col-12 col-md d-flex align-items-center justify-content-center">
                 {/* <img
                   className="pic-1"
                   style={{ maxHeight: "350px" }}
                   src={item.images.protoTypes[0]}
                 /> */}

                  <div  >
                      <div className="product-grid7">
        

                        <div className="product-image7">
                          <li
                             onClick={() => this.sendImagesToCarousel(item.images)}
                          >
                            <a 
                            onClick={this.toggle(13)}
                            >
                              <img
                                alt='alt'
                                className="pic-1"
                                style={{ maxHeight: "400px" }}
                                src={item.images.protoTypes[0]}
                              />
                              <img
                                alt='alt2'
                                className="pic-2"
                                src={item.images.protoTypes[1]}
                              />
                            </a>
                          </li>
                          <ul className="social">
                            <li
                              onClick={() =>  this.sendImagesToCarousel(item.images)}
                            >
                              <a
                                onClick={this.toggle(13)}
                                className="fas fa-expand-arrows-alt"
                              ></a>
                            </li>

                            {/* {this.props.isAuthenticated && (
                              <li>
                                <a href="#" className="far fa-heart"
                                  role="button"
                                  tabIndex={1}
                                 // onClick={() => this.addToFavorite(item)}
                                ></a>
                              </li>
                            )} */}
{/* 
                            {this.props.isAuthenticated && (
                            <li>
                              <a
                                role="button"
                              //  onClick={() => this.addToBasket(item)}
                                className="fa fa-shopping-cart"
                              ></a>
                            </li>
                            )} */}
                          </ul>

                          {/* <span className="product-new-label">New</span> */}
                        </div>

                        <div className="product-content">

                          {/* <h3 className="title"><a href="#">{item.description}</a></h3> */}
                          <ul className="rating">
                            {/* {this.starMaker(item.rating)} */}
                          </ul>

                          {/* <img src={ImageZoomAnim} />
                         */}
                        </div>
                      </div>
                    </div>
                 
                 </div>
               )
             }) 
              :
               <h1>...</h1>
             }
          </Carousel>
        </div >
        {/* shop women Products Carousel end */}




        < div className="mens container section-2 menBox mens" >

          <div className="row">

            <div className="col-md-6 col-lg-6 ">
              <img className="img-fluid" src={menBox} alt="Testig Photo" />
            </div>

            <div className="col-md-6 text-center mt-5">
              <h2 className="display-5">– Got talent to men's fashion!<br /></h2>
              <p >“Fashion is not something that exists in dresses only. Fashion is in the sky, in the street, fashion has to do with ideas”</p>
              {/* <a href="#" className="btn-join">
                Register now  <i className="fas fa-chevron-right"></i>
              </a> */}
            </div>
          </div>
        </div >



        {/*Products men Carousel  */}
        <div className="my-5 mens text-center container">
          <div className="womenbox" >
            <p className='heartbeat'>Men's Collection </p>
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
                arrows: false
              },
              900: {
                slidesPerPage: 2,
                arrows: false
              }
            }}
          >

            {this.state.men.length > 0 ? this.state.men.map((item, index) => {
               return (
                <div key={index} className="col-12 col-md d-flex align-items-center justify-content-center">
                 {/* <img
                   className="pic-1"
                   style={{ maxHeight: "350px" }}
                   src={item.images.protoTypes[0]}
                 /> */}
                   <div >
        <div className="product-grid7">


          <div className="product-image7">
            <li
              onClick={() => this.sendImagesToCarousel(item.images)}
            >
              <a 
              onClick={this.toggle(13)}
              >
                <img
                alt = 'alt'
                  className="pic-1"
                  style={{ maxHeight: "400px" }}
                  src={item.images.protoTypes[0]}
                />
                <img
                alt = 'alt2'
                  className="pic-2"
                  src={item.images.protoTypes[1]}
                />
              </a>
            </li>
            <ul className="social">
              <li
                onClick={() => this.sendImagesToCarousel(item.images)}
              >
                <a
                  onClick={this.toggle(13)}
                  className="fas fa-expand-arrows-alt"
                ></a>
              </li>
              {/* {this.props.isAuthenticated && (
              <li>
                <a href="#" className="far fa-heart"
                  role="button"
                  tabIndex={1}
                //  onClick={() => this.addToFavorite(item)}
                ></a>
              </li>
              )} */}

              {/* {this.props.isAuthenticated && (
              <li>
                <a
                  role="button"
                 // onClick={() => this.addToBasket(item)}
                  className="fa fa-shopping-cart"
                ></a>
              </li>
              )} */}
            </ul>

            {/* <span className="product-new-label">New</span> */}
          </div>

          <div className="product-content">
            
          {/* <h3 className="title"><a href="#">{item.description}</a></h3> */}
            <ul className="rating">
              {/* {this.starMaker(item.rating)} */}
            </ul>

      

            {/* <img src={ImageZoomAnim} />
             */}
          </div>
        </div>
      </div>
                 </div>
               )
             }) 
              :
               <h1>...</h1>
             }

          </Carousel>
        </div >

        {/*Products men Carousel end */}
        {/* reworked BOX */}

        < div className="reworked container section-2" >
          <div className="row">

            <div className="col-md-6 col-lg-6 ">
              <img className="img-fluid" src={ReworkedImg} alt="Testig Photo" />
            </div>

            <div className="col-md-6 text-center mt-5">
              <h2 className="display-5">– Got talent to Rework?<br /> Scount is your right PLace to share your skills </h2>
              <p >“Fashion is not something that exists in dresses only. Fashion is in the sky, in the street, fashion has to do with ideas”</p>
              {/* <a href="#" className="btn-join">
                Register now  <i className="fas fa-chevron-right"></i>
              </a> */}
            </div>
          </div>
        </div >


        {/*Products Second Hand Carousel  */}
        {/*Products men Carousel  */}
        <div className="my-5 reworked text-center container">
          <div className="womenbox" >
            <p className='heartbeat'>Reworked Collection </p>
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
                arrows: false
              },
              900: {
                slidesPerPage: 2,
                arrows: false
              }
            }}
          >

             
             {this.state.men.length > 0 ? this.state.men.map((item, index) => {
               return (
                <div key={index} className="col-12 col-md d-flex align-items-center justify-content-center">
                 <img
                   className="pic-1"
                   style={{ maxHeight: "350px" }}
                   src={item.images.protoTypes[0]}
                 />
                 </div>
               )
             }) 
              :
               <h1>...</h1>
             }

             

          </Carousel>
        </div >

        {/*Products SecondHand Carousel end */}

        <br />
        <br />

        {/* payment cards
        <div className="credit-cards" style={{ textAlign: "center", width: "100%", padding: "5px", margin: "5px" }} >
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
        </div> */}

        <br />
        {/* {this.state.productRouter && (
          <>
          <Redirect
            to = {`/product-profile/${this.state.productRouter.name}/${this.state.productRouter.description}/${this.state.productRouter.images.protoTypes[0]}`}
          />
          </>
        )} */}
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
