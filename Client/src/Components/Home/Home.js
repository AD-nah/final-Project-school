import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <div id="carousel-example-1z" class="carousel slide carousel-fade" data-ride="carousel">

                    <ol class="carousel-indicators">
                        <li data-target="#carousel-example-1z" data-slide-to="0" class="active"></li>
                        <li data-target="#carousel-example-1z" data-slide-to="1"></li>
                        <li data-target="#carousel-example-1z" data-slide-to="2"></li>
                    </ol>

                    <div class="carousel-inner" role="listbox">

                        <div class="carousel-item active">
                            <img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg"
                                alt="First slide" />
                        </div>

                        <div class="carousel-item">
                            <img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(129).jpg"
                                alt="Second slide" />
                        </div>

                        <div class="carousel-item">
                            <img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg"
                                alt="Third slide" />
                        </div>

                    </div>

                    <a class="carousel-control-prev" href="#carousel-example-1z" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carousel-example-1z" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>

                </div>
                <br />
                <br />
                {/* Cards Code start 20,02,2020*/}
                <div class="container">
                    <div class="row">
                        
                        <div class="col-sm">
                            <div class="card card-cascade wider reverse">

                                <div class="view view-cascade overlay" >
                                    <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg" alt="Card image cap" />
                                    <a href="#!">
                                        <div class="mask rgba-white-slight"></div>
                                    </a>
                                </div>

                                <div class="card-body card-body-cascade text-center">
                                    <h4 class="card-title"><strong>My adventure</strong></h4>
                                    <h6 class="font-weight-bold indigo-text py-2">Photography</h6>
                                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem perspiciatis
                                      voluptatum a, quo nobis, non commodi quia repellendus sequi nulla voluptatem dicta reprehenderit, placeat
                                      laborum ut beatae ullam suscipit veniam.
                                     </p>
                                </div>

                            </div>
                        </div>
                        <div class="col-sm">
                            <div class="card card-cascade wider reverse">

                                <div class="view view-cascade overlay">
                                    <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg"
                                        alt="Card image cap" />
                                    <a href="#!">
                                        <div class="mask rgba-white-slight"></div>
                                    </a>
                                </div>

                                <div class="card-body card-body-cascade text-center">


                                    <h4 class="card-title"><strong>My adventure</strong></h4>

                                    <h6 class="font-weight-bold indigo-text py-2">Photography</h6>

                                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem perspiciatis
                                      voluptatum a, quo nobis, non commodi quia repellendus sequi nulla voluptatem dicta reprehenderit, placeat
                                      laborum ut beatae ullam suscipit veniam.
   </p>



                                </div>

                            </div>    </div>
                        <div class="col-sm">
                            <div class="card card-cascade wider reverse">

                                <div class="view view-cascade overlay">
                                    <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg"
                                        alt="Card image cap" />
                                    <a href="#!">
                                        <div class="mask rgba-white-slight"></div>
                                    </a>
                                </div>

                                <div class="card-body card-body-cascade text-center wider reverse">


                                    <h4 class="card-title"><strong>My adventure</strong></h4>

                                    <h6 class="font-weight-bold indigo-text py-2">Photography</h6>

                                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem perspiciatis
                                      voluptatum a, quo nobis, non commodi quia repellendus sequi nulla voluptatem dicta reprehenderit, placeat
                                      laborum ut beatae ullam suscipit veniam.
   </p>



                                </div>

                            </div>    </div>
                    </div>
                </div>
                <br />
                <br />
                {/* Cards Code ende 20,02,2020*/}
            </React.Fragment>
        )
    }
}
