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
import BoxIMmage from './Boxes images/128143675--624x394.jpg';




import paypal from './icons/paypal1.png';
import visa from './icons/visa1.png';
import master from './icons/master.png'



import { BackTop } from 'antd';



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
              <div class="carousel-caption">
                <h3>Slide 2</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia vel in placeat corrupti. Velit quidem eos, accusantium vitae nostrum reiciendis ratione libero? Aperiam, recusandae culpa.</p>
              </div>
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
          <div class="row d-flex align-items-center">
            <div class="col-1 d-flex align-items-center justify-content-center">

              <a href="#carouselExampleIndicators" role="button" data-slide="prev">
                <div class="carousel-nav-icon">
                  <i class="far fa-arrow-alt-circle-left" style={{ fontSize: '50px', color: "black", opacity: '0.5' }}></i>
                </div>
              </a>
            </div>
            <div class="col-10">

              <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">

                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <div class="row">

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
                    </div>
                  </div>

                  <div class="carousel-item">
                    <div class="row">

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

                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div class="col-1 d-flex align-items-center justify-content-center"><a href="#carouselExampleIndicators" data-slide="next">
              <div class="carousel-nav-icon">
                <i class="far fa-arrow-alt-circle-right" style={{ fontSize: '50px', color: "black", opacity: '0.5' }}></i>
              </div>
            </a>
            </div>
          </div>
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
          <div class="menbox" >
            <p className='heartbeat'>Men Shop</p>
          </div>
          <div class="row d-flex align-items-center">
            <div class="col-1 d-flex align-items-center justify-content-center">
              <a href="#carouselExampleIndicators2" role="button" data-slide="prev">
                <div class="carousel-nav-icon">
                  <i class="far fa-arrow-alt-circle-left" style={{ fontSize: '50px', color: "black", opacity: '0.5' }}></i>
                </div>
              </a>
            </div>

            <div class="col-10">
              <div id="carouselExampleIndicators2" class="carousel slide" data-ride="carousel">

                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <div class="row">

                      <div class="col-12 col-md d-flex align-items-center justify-content-center">
                        First Pic
                    </div>

                      <div class="col-12 col-md d-flex align-items-center justify-content-center">
                        Second Pic
                    </div>

                      <div class="col-12 col-md d-flex align-items-center justify-content-center" class="col-12 col-md d-flex align-items-center justify-content-center">
                        Third Pic
                    </div>
                    </div>
                  </div>

                  <div class="carousel-item">
                    <div class="row">

                      <div class="col-12 col-md d-flex align-items-center justify-content-center">
                        Forth Pic
                      </div>

                      <div class="col-12 col-md d-flex align-items-center justify-content-center">
                        Fifth Pic
                      </div>

                      <div class="col-12 col-md d-flex align-items-center justify-content-center" class="col-12 col-md d-flex align-items-center justify-content-center">
                        Sixth Pic
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-1 d-flex align-items-center justify-content-center"><a href="#carouselExampleIndicators2" data-slide="next">
              <div class="carousel-nav-icon">
                <i class="far fa-arrow-alt-circle-right" style={{ fontSize: '50px', color: "black", opacity: '0.5' }}></i>
              </div>
            </a>
            </div>

          </div>
        </div >
        {/*Products men Carousel end */}












        <div className="container section-2">
          <div className="row">

            <div className="col-md-6 col-lg-6 ">
              <img className="img-fluid" src={ReworkedImg} alt="Testig Photo" />
            </div>

            <div className="col-md-6 text-center mt-5">
            <h2 className="display-5">– Got talent to Rework?<br/> Scount is your right PLace to share your skills </h2>
                  <p >“Fashion is not something that exists in dresses only. Fashion is in the sky, in the street, fashion has to do with ideas”</p>
                  <a href="#" class="btn-join">
                    Register now  <i class="fas fa-chevron-right"></i>
                  </a>
            </div>
          </div>
        </div>








        {/* Back to top btn */}
        <div>
          <BackTop>
            <i className="fas fa-angle-double-up" style={{ color: "orange", fontSize: "40px" }}></i>
          </BackTop>
        </div>



        {/*Products Second Hand Carousel  */}
        <div class="my-5 text-center container">
          <div class="Secondhandbox" >
            <p className='heartbeat'> Reworked</p>
          </div>
          <div class="row d-flex align-items-center">
            <div class="col-1 d-flex align-items-center justify-content-center">
              <a href="#carouselExampleIndicators3" role="button" data-slide="prev">
                <div class="carousel-nav-icon">
                  <i class="far fa-arrow-alt-circle-left" style={{ fontSize: '50px', color: "black", opacity: '0.5' }}></i>
                </div>
              </a>
            </div>

            <div class="col-10">
              <div id="carouselExampleIndicators3" class="carousel slide" data-ride="carousel">

                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <div class="row">

                      <div class="col-12 col-md d-flex align-items-center justify-content-center">
                        First Pic
                    </div>

                      <div class="col-12 col-md d-flex align-items-center justify-content-center">
                        Second Pic
                    </div>

                      <div class="col-12 col-md d-flex align-items-center justify-content-center" class="col-12 col-md d-flex align-items-center justify-content-center">
                        Third Pic
                    </div>
                    </div>
                  </div>

                  <div class="carousel-item">
                    <div class="row">

                      <div class="col-12 col-md d-flex align-items-center justify-content-center">
                        Forth Pic
                      </div>

                      <div class="col-12 col-md d-flex align-items-center justify-content-center">
                        Fifth Pic
                      </div>

                      <div class="col-12 col-md d-flex align-items-center justify-content-center" class="col-12 col-md d-flex align-items-center justify-content-center">
                        Sixth Pic
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-1 d-flex align-items-center justify-content-center"><a href="#carouselExampleIndicators3" data-slide="next">
              <div class="carousel-nav-icon">
                <i class="far fa-arrow-alt-circle-right" style={{ fontSize: '50px', color: "black", opacity: '0.5' }}></i>
              </div>
            </a>
            </div>

          </div>
        </div >
        {/*Products SecondHand Carousel end */}




        <br />
        <br />





        {/*Payment start*/}
        <div className="container row-md-12 mt-5">
          <div className="col-md-12 text-center"><h1>Here You Can Bay</h1></div>
          <div className="row text-center"><div className="col-md-4">
            <a href="http://www.paypal.com">
              <img className="mt-3" src={paypal} />
            </a>
          </div>

            <div className="col-md-4">
              <a href="#">
                <img src={master} />
              </a>
            </div>

            <div className="col-md-4">
              <a href="#">
                <img src={visa} />
              </a>
            </div>

          </div>


        </div>



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
