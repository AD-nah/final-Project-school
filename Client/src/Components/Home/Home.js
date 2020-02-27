import React, { Component } from 'react';
import img from '../../imgs/test.jpg';
import img1 from '../../imgs/test1.jpg';
import img2 from '../../imgs/test2.jpg';
import img3 from '../../imgs/test3.jpg';
import black from '../../imgs/black.jpg';
import grau from '../../imgs/grau.jpg';
import './home.css'
import video1 from './video/almosa.mp4';
import caro1 from './video/1.jpg';
import caro2 from './video/2.jpg';
import caro3 from './video/3.jpg';




export default class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <header>
  <div class="overlay"></div>
  <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
    {/* <source src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4" type="video/mp4"/> */}
    <source src={video1} type="video/mp4"/>
  </video>
  <div class="container h-100">
    <div class="d-flex h-100 text-center align-items-center">
      <div class="w-100 text-white">
        <h1 class="display-3">Our Shop</h1>
        <p class="lead mb-0">Hallo Web Shop</p>
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
            <img className="img-fluid rounded-circle" src={black} alt=""/>
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
            <img className="img-fluid rounded-circle" src={grau} alt=""/>
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
    <section class="page-section bg-dark text-white">
    <div className="container text-center">
      <h2 className="mb-4">hallo </h2>
      <a className="btn btn-light btn-xl" href="#">Download</a>
    </div>
  </section>
                {/*Bar end*/}
                
         <div className="container-fluid">
                <div className="row mt-2">
                    <div className="col-md-6 col-lg-6 ">
                       
                       
                        <img className="img-fluid"  src={img} alt="Testig Photo"/>
                    </div>

                    <div className="col-md-6 text-center">
                        <h1>This the Show</h1>
                    <h3>Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, sitientis piros Afros. Petierunt uti sibi concilium totius Galliae in diem certam indicere. Cras mattis iudicium purus sit amet fermentum.</h3>
                    </div>

                 

                </div>
                <div className="row mt-2 text-center">
                    <div className="col-md-7 mt-3">
                       <h1>Hallo form me</h1>
                    <h3>Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, sitientis piros Afros. Petierunt uti sibi concilium totius Galliae in diem certam indicere. Cras mattis iudicium purus sit amet fermentum.</h3>
                        
                    </div>

                    <div className="col-md-5">
                    <img className="rounded-circle img-fluid" src={img1} alt="Testig Photo"/>
                    
                    </div>
                </div>
{/*Started Carosel */}
                <div id="carousel-example-1z" className="carousel slide carousel-fade" data-ride="carousel">

                    <ol className="carousel-indicators">
                        <li data-target="#carousel-example-1z" data-slide-to="0" className="active"></li>
                        <li data-target="#carousel-example-1z" data-slide-to="1"></li>
                        <li data-target="#carousel-example-1z" data-slide-to="2"></li>
                    </ol>

                    <div className="carousel-inner mt-4" role="listbox" style={{height: "50vh"}}>

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

                {/*Third Div 3*/}
     
                {/* <div className="row mt-2">
                    <div className=" col md-6 mt-2">
                        <img className="img-fluid" src={img2}/>
                    </div>
                    <div className="col md-6 mt-2">
                        <img className="img-fluid" src={img3}/>
                    </div>

                </div> */}
                </div>
                <br />
                <br />

                <section class="page-section" id="services">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 class="section-heading text-uppercase">Services</h2>
          <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
        </div>
      </div>
      <div class="row text-center">
        <div class="col-md-4">
          <span class="fa-stack fa-4x">
            <i class="fas fa-circle fa-stack-2x text-primary"></i>
            <i class="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
          </span>
          <h4 class="service-heading">E-Commerce</h4>
          <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
        </div>
        <div class="col-md-4">
          <span class="fa-stack fa-4x">
            <i class="fas fa-circle fa-stack-2x text-primary"></i>
            <i class="fas fa-laptop fa-stack-1x fa-inverse"></i>
          </span>
          <h4 class="service-heading">Design</h4>
          <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
        </div>
        <div class="col-md-4">
          <span class="fa-stack fa-4x">
            <i class="fas fa-circle fa-stack-2x text-primary"></i>
            <i class="fas fa-lock fa-stack-1x fa-inverse"></i>
          </span>
          <h4 class="service-heading">Web Security</h4>
          <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
        </div>
      </div>
    </div>
  </section>
                {/*Befor Footer start*/}

                {/*Befor Footer end*/}
                {/* Cards Code ende 20,02,2020*/}
            </React.Fragment>
        )
    }
}