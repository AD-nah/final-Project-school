import React, { Component, Link } from 'react';
import img from '../../imgs/test.jpg';

import dressbox from './Boxes images/women with dressbox.jpg';
import './home.css';

import video from './video/Bread&ButterRecap.mp4';
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



export default class Home extends Component {
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
        <section className='section-1'>
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
        </section>




        {/*shop women Products Carousel end */}
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

          <div className="col-md-6 text-center mt-5">
            <h1>This the Show</h1>
            <h3>Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus. .</h3>
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







        {/* video Header */}

        <section className='section-2'>
          <div className="container col-lg-12 ">
            <div className="row align-items-center">
              <div className="col-lg-6 order-lg-2">
                <div className="p-5">
                  <header >
                    <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
                      <source src={video} type="video/mp4" />
                    </video>

                  </header>
                </div>
              </div>
              <div className="col-lg-6 order-lg-1">
                <div className="p-5">
                  <h2 className="display-5">– Daily style watchOur favourite looks for you</h2>
                  <p >“ Three unique women. One collection of simple, easy wardrobe basics that fits their (life)styles.”</p>
                  <a href="#" class="btn-join">
                    Discover More <i class="fas fa-chevron-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>







        <div className="container-fluid">
          <div className="row mt-2">
            <div className="col-md-6 col-lg-6 ">
              <img className="img-fluid" src={img} alt="Testig Photo" />
            </div>



            <div className="col-md-6 text-center mt-5">
              <h1>This the Show</h1>
              <h3>Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus. .</h3>
            </div>
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






          {/* Back to top btn */}
          <div>
            <BackTop>
              <i className="fas fa-angle-double-up" style={{ color: "orange", fontSize: "40px" }}></i>
            </BackTop>
          </div>
        </div>


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