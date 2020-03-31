import React, { Component } from 'react'
import Ordered from './Ordered/Ordered';
import Edit from './Edit/Edit';
import Sell from './Sell/Sell';
import './profile.css'


import { Switch, Route } from 'react-router-dom';
import { MDBNavLink, MDBNavItem } from "mdbreact";





export default class Profile extends Component {

    render() {
        return (
            <>
                {/* please dont delete it */}

                <div className="container">
                    <div className="row">

                        {/*
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


                    <h3 className="my-4">You may like </h3>

                    <div className="row">

                        <div className="col-md-3 col-sm-6 mb-4">
                            <a href="#">
                                <img className="img-fluid" src="http://placehold.it/300x200" alt="" />
                            </a>
                        </div>

                        <div className="col-md-3 col-sm-6 mb-4">
                            <a href="#">
                                <img className="img-fluid" src="http://placehold.it/300x200" alt="" />
                            </a>
                        </div>

                        <div className="col-md-3 col-sm-6 mb-4">
                            <a href="#">
                                <img className="img-fluid" src="http://placehold.it/300x200" alt="" />
                            </a>
                        </div>

                        <div className="col-md-3 col-sm-6 mb-4">
                            <a href="#">
                                <img className="img-fluid" src="http://placehold.it/300x200" alt="" />
                            </a>
                        </div>

                    </div>

                </div>
                */}



                        <div className="primary-nav">
                            <nav role="navigation" className="menu">
                                <ul className="menu-dropdown">

                                    <li className="menu-hasdropdown">

                                        <MDBNavLink to="/profile/edit">Edit your Profile</MDBNavLink>

                                        <span className="icon"><i className="fas fa-arrows-alt-h"></i></span></li>



                                    <li>
                                        <MDBNavLink to="/profile/sell">Sell</MDBNavLink>
                                        <span className="icon"><i className="fas fa-arrows-alt-h"></i></span></li>



                                    <li>
                                        <MDBNavItem>
                                            <MDBNavLink to="/profile/ordered">Ordered</MDBNavLink>
                                        </MDBNavItem><span className="icon"><i className="fas fa-arrows-alt-h"></i></span></li>
                                </ul>


                            </nav>

                        </div >

                    </div>
                </div>





                <div>
                    <Switch>
                        <Route path="/profile/edit" component={Edit} />
                        <Route path="/profile/sell" component={Sell} />
                        <Route path="/profile/ordered" component={Ordered} />
                    </Switch>
                </div>
            </>
        )
    }
}
