import React, { Component } from 'react';
import img from '../../imgs/test.jpg';
import img1 from '../../imgs/test1.jpg';
// import img2 from '../../imgs/test2.jpg';
// import img3 from '../../imgs/test3.jpg';
import black from '../../imgs/black.jpg';
import grau from '../../imgs/grau.jpg';
import './home.css'
import video1 from './video/almosa.mp4';
import caro1 from './video/1.jpg';
import caro2 from './video/2.jpg';
import caro3 from './video/3.jpg';
import paypal from './icons/paypal1.png';
import visa from './icons/visa1.png';
import master from './icons/master.png'



import { BackTop } from 'antd';



export default class Home extends Component {
  render() {
    return (
       <>
        <header >
          <div className="overlay"></div>
          <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">

            <source src={video1} type="video/mp4" />
          </video>
          <div className="container h-100">
            <div className="d-flex h-100 text-center align-items-center">
              <div className="w-100 text-white">
                <h1 className="display-3 text-muted">Our Shop</h1>
                <p className="lead mb-0">Hallo Web Shop</p>
              </div>
            </div>
          </div>
        </header>

        <br />
        <br />
        {/* Cards Code start 24,02,2020*/}

        {/*Section start*/}
        <section>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 order-lg-2">
                <div className="p-5">
                  <img className="img-fluid rounded-circle" src={black} alt="" />
                </div>
              </div>
              <div className="col-lg-6 order-lg-1">
                <div className="p-5">
                  <h2 className="display-4">Our product is the best in the market</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="p-5">
                  <img className="img-fluid rounded-circle" src={grau} alt="" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="p-5">
                  <h2 className="display-4">Our product is the best in the market</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*Section end*/}

        
        {/*Bar start*/}
        <section className="bg-dark row page1-section text-white">
          <div className="col-md-6 container text-center">
            <h2 className="mb-5 ">hallo </h2>
            <a className="btn btn-light btn-xl" href="#">Download</a>
          </div>



         
          <div className="col-md-5 text-center">
            <iframe title = 'title' width="560" height="315" src="//www.youtube.com/embed/_jmC9gOjLkI" frameborder="2" allowfullscreen></iframe>
          </div>

        </section>
        {/*Bar end*/}

        <div className="container-fluid">
          <div className="row mt-2">
            <div className="col-md-6 col-lg-6 ">


              <img className="img-fluid" src={img} alt="Testig Photo" />
            </div>

            <div className="col-md-6 text-center mt-5">
              <h1>This the Show</h1>
              <h3>Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, sitientis piros Afros. Petierunt uti sibi concilium totius Galliae in diem certam indicere. Cras mattis iudicium purus sit amet fermentum.</h3>
            </div>
          </div>


          <div className="row mt-2 text-center">
            <div className="col-md-7 mt-5">
              <h1>Hallo form me</h1>
              <h3>Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, sitientis piros Afros. Petierunt uti sibi concilium totius Galliae in diem certam indicere. Cras mattis iudicium purus sit amet fermentum.</h3>

            </div>

            <div className="col-md-5">
              <img className="rounded-circle img-fluid" src={img1} alt="Testig Photo" />

            </div>
          </div>





         {/* Back to top btn */}
         <div>
                <BackTop>
                
                <i className="fas fa-chevron-circle-up" style={{color:"orange",fontSize:"40px"}}></i>
                </BackTop>
         </div>


          {/*Started Carosel */}
            <div id="carousel-example-1z" className="carousel slide carousel-fade" data-ride="carousel">

              <ol className="carousel-indicators">
                <li data-target="#carousel-example-1z" data-slide-to="0" className="active"></li>
                <li data-target="#carousel-example-1z" data-slide-to="1"></li>
                <li data-target="#carousel-example-1z" data-slide-to="2"></li>
              </ol>

              <div className="carousel-inner mt-4" role="listbox" style={{ height: "50vh" }}>

                <div className="carousel-item active">
                  <img className="d-block w-100" src={caro1}
                    alt="First slide" />
                </div>

                <div className="carousel-item">
                  <img className="d-block w-100" src={caro2}
                    alt="Second slide" />
                </div>

                <div className="carousel-item">
                  <img className="d-block w-100" src={caro3}
                    alt="Third slide" />
                </div>

              </div>

              <a className="carousel-control-prev" href="#carousel-example-1z" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carousel-example-1z" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>

            </div>
            {/*end Carosel*/}
          </div>


          <br />
          <br />



          <section className="page-section" id="services">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <h2 className="section-heading text-uppercase">Services</h2>
                  <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
              </div>
              <div className="row text-center">
                <div className="col-md-4">
                  <span className="fa-stack fa-4x">
                    <i className="fas fa-circle fa-stack-2x text-primary"></i>
                    <i className="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
                  </span>
                  <h4 className="service-heading">E-Commerce</h4>
                  <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                </div>
                <div className="col-md-4">
                  <span className="fa-stack fa-4x">
                    <i className="fas fa-circle fa-stack-2x text-primary"></i>
                    <i className="fas fa-laptop fa-stack-1x fa-inverse"></i>
                  </span>
                  <h4 className="service-heading">Design</h4>
                  <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                </div>
                <div className="col-md-4">
                  <span className="fa-stack fa-4x">
                    <i className="fas fa-circle fa-stack-2x text-primary"></i>
                    <i className="fas fa-lock fa-stack-1x fa-inverse"></i>
                  </span>
                  <h4 className="service-heading">Web Security</h4>
                  <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                </div>
              </div>
            </div>
          </section>
{/*Bayment start*/}
        <div className="container row-md-12 mt-5">
          <div className="col-md-12 text-center"><h1>Here You Can Bay</h1></div>
          <div className="row text-center"><div className="col-md-4">
            <a  href="http://www.paypal.com">
            <img className="mt-3" src={paypal}/>
            </a>
          </div>

          <div className="col-md-4">
            <a   href="#">
              <img src={master}/>
            </a>
          </div>

          <div className="col-md-4">
            <a  href="#">
              <img src={visa}/>
             </a>
          </div>
          
          </div>

          
        </div>


        {/*Befor Footer start*/}

        {/*Befor Footer end*/}
     </>
    )
  }
}