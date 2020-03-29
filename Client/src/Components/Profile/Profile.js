import React, { Component } from 'react'
import Bought from './Bought/Bought';
import Edit from './Edit/Edit';
import Sell from './Sell/Sell';
import './profile.css'

import { Switch, Route } from 'react-router-dom';
import { MDBNavLink, MDBNavItem } from "mdbreact";
import './profile.css'




export default class Profile extends Component {

    render() {
        return (
            <>

                <div className="containe ">
                    <div className="row">
                     
                            <div className="col-md-8 ">
                                <img className="img-fluid" src="http://placehold.it/550x300" alt="" />
                            </div>

                            <div className="col-md-4">
                                <h3 className="my-3">Project Description</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae. Sed dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris ultricies, justo eu convallis placerat, felis enim.</p>
                                <h3 className="my-3">Project Details</h3>
                                <ul>
                                    <li>Lorem Ipsum</li>
                                    <li>Dolor Sit Amet</li>
                                    <li>Consectetur</li>
                                    <li>Adipiscing Elit</li>
                                </ul>
                            </div>
                       
                    </div>



                    <h3 class="my-4">You may like </h3>

                    <div class="row">

                        <div class="col-md-3 col-sm-6 mb-4">
                            <a href="#">
                                <img class="img-fluid" src="http://placehold.it/300x200" alt="" />
                            </a>
                        </div>

                        <div class="col-md-3 col-sm-6 mb-4">
                            <a href="#">
                                <img class="img-fluid" src="http://placehold.it/300x200" alt="" />
                            </a>
                        </div>

                        <div class="col-md-3 col-sm-6 mb-4">
                            <a href="#">
                                <img class="img-fluid" src="http://placehold.it/300x200" alt="" />
                            </a>
                        </div>

                        <div class="col-md-3 col-sm-6 mb-4">
                            <a href="#">
                                <img class="img-fluid" src="http://placehold.it/300x200" alt="" />
                            </a>
                        </div>

                    </div>

                </div>








                <div className="primary-nav">
                    <nav role="navigation" className="menu">
                        <ul className="menu-dropdown">

                            <li className="menu-hasdropdown">
                                <MDBNavItem>
                                    <MDBNavLink to="/profile/edit">Edit your Profile</MDBNavLink>

                                    <span className="icon"><i class="fas fa-arrows-alt-h"></i></span>
                                </MDBNavItem>

                            </li>

                            <li>
                                <MDBNavItem>
                                    <MDBNavLink to="/profile/sell">Sell</MDBNavLink>
                                </MDBNavItem>
                                <span className="icon"><i class="fas fa-arrows-alt-h"></i></span>
                            </li>

                            <li>
                                <MDBNavItem>
                                    <MDBNavLink to="/profile/bought">Bought</MDBNavLink>
                                </MDBNavItem><span className="icon"><i class="fas fa-arrows-alt-h"></i></span></li>
                        </ul>


                    </nav>

                </div>






                <div>
                    <Switch>
                        <Route path="/profile/edit" component={Edit} />
                        <Route path="/profile/sell" component={Sell} />
                        <Route path="/profile/bought" component={Bought} />
                    </Switch>
                </div>
            </>

        )
    }
}