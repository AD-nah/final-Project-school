import React, { Component } from 'react'
import './home.css'

import img from '../../imgs/test.jpg';
import img1 from '../../imgs/test1.jpg';
import img2 from '../../imgs/test2.jpg';
import img3 from '../../imgs/test3.jpg';








export default class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <div id="carousel-example-1z" className="carousel slide carousel-fade" data-ride="carousel">

                    <ol className="carousel-indicators">
                        <li data-target="#carousel-example-1z" data-slide-to="0" className="active"></li>
                        <li data-target="#carousel-example-1z" data-slide-to="1"></li>
                        <li data-target="#carousel-example-1z" data-slide-to="2"></li>
                    </ol>

                    <div className="carousel-inner" role="listbox">

                        <div className="carousel-item active">
                            <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg"
                                alt="First slide" />
                        </div>

                        <div className="carousel-item">
                            <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(129).jpg"
                                alt="Second slide" />
                        </div>

                        <div className="carousel-item">
                            <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg"
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
                <br />
                <br />




                    {/* Cards Code start 24,02,2020*/}
              
                <div className="row">
                    <div className="col">
                       
                       
                        <img src={img} alt="Testig Photo"/>
                    </div>

                    <div className="col">
                    <h2>Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, sitientis piros Afros. Petierunt uti sibi concilium totius Galliae in diem certam indicere. Cras mattis iudicium purus sit amet fermentum.</h2>
                    </div>

                 

                </div>
                <div className="row">
                    <div className="col mt-4">
                       
                    <h2>Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, sitientis piros Afros. Petierunt uti sibi concilium totius Galliae in diem certam indicere. Cras mattis iudicium purus sit amet fermentum.</h2>
                        
                    </div>

                    <div className="col">
                    <img src={img1} alt="Testig Photo"/>
                    
                    </div>
                    </div>

                {/*Third Div 3*/}
                <div className="row mt-3">
                    <div className="col">
                        <img src={img2}/>
                    </div>
                    <div className="col">
                        <img src={img3}/>
                    </div>

                </div>

                {/*SECUND DEV*/}

                    {/*grid  system */}
                    {/* <!-- Stack the columns on mobile by making one full-width and the other half-width --> */}
 
                    {/* <div class="row">
                {/* Cards Code start 20,02,2020*/}
                <div className="container">
                    <div className="row">

                        
                        <div className="col-sm">
                            <div className="card card-cascade wider reverse">

                                <div className="view view-cascade overlay" >
                                    <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg" alt="Card image cap" />
                                    <a href="#!">
                                        <div className="mask rgba-white-slight"></div>
                                    </a>
                                </div>

                                <div className="card-body card-body-cascade text-center">
                                    <h4 className="card-title"><strong>My adventure</strong></h4>
                                    <h6 className="font-weight-bold indigo-text py-2">Photography</h6>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem perspiciatis
                                      voluptatum a, quo nobis, non commodi quia repellendus sequi nulla voluptatem dicta reprehenderit, placeat
                                      laborum ut beatae ullam suscipit veniam.
                                     </p>
                                </div>

                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="card card-cascade wider reverse">

                                <div className="view view-cascade overlay">
                                    <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg"
                                        alt="Card image cap" />
                                    <a href="#!">
                                        <div className="mask rgba-white-slight"></div>
                                    </a>
                                </div>

                                <div className="card-body card-body-cascade text-center">


                                    <h4 className="card-title"><strong>My adventure</strong></h4>

                                    <h6 className="font-weight-bold indigo-text py-2">Photography</h6>

                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem perspiciatis
                                      voluptatum a, quo nobis, non commodi quia repellendus sequi nulla voluptatem dicta reprehenderit, placeat
                                      laborum ut beatae ullam suscipit veniam.
                                      </p>



                                </div>

                            </div>    </div>
                        <div className="col-sm">
                            <div className="card card-cascade wider reverse">

                                <div className="view view-cascade overlay">
                                    <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg"
                                        alt="Card image cap" />
                                    <a href="#!">
                                        <div className="mask rgba-white-slight"></div>
                                    </a>
                                </div>

                                <div className="card-body card-body-cascade text-center wider reverse">


                                    <h4 className="card-title"><strong>My adventure</strong></h4>

                                    <h6 className="font-weight-bold indigo-text py-2">Photography</h6>

                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem perspiciatis
                                      voluptatum a, quo nobis, non commodi quia repellendus sequi nulla voluptatem dicta reprehenderit, placeat
                                      laborum ut beatae ullam suscipit veniam.
                                    </p>
                                </div>
                            </div>    
                        </div>
                        </div>
                    </div> 
                
                <br />
                <br />
                {/* Cards Code ende 20,02,2020*/}
            </React.Fragment>
        )
    }
}
