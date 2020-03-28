import React, { Component } from 'react'
import Bought from './Bought/Bought';
import Edit from './Edit/Edit';
import Sell from './Sell/Sell';
import './profile.css'

import { Switch, Route } from 'react-router-dom';
import { MDBNav, MDBNavLink, MDBNavItem } from "mdbreact";
export default class Profile extends Component {
    constructor(props) {
        super(props)


    }

    render() {
        return (
            <>
                <div className="primary-nav ">
                    <nav role="navigation" className="menu ">

                        <a href="#" className="logotype">My<span>Profile</span></a>

                        <div className="overflow-container">


                            <ul className="menu-dropdown">
                              
                                <li className="menu-hasdropdown">
                                    
                                        <MDBNavLink to="/profile/edit">Edit your Profile</MDBNavLink>
                                    
                                    {/* <span><i className="fa fa-gear"></i></span> */}


                                </li>

                                <li>      
                                    <MDBNavLink to="/profile/sell">Sell</MDBNavLink>
                                <span className="icon"><i className="fas fa-dollar-sign"></i></span>
                                
                                </li>

                                <li>   
                                    <MDBNavLink to="/profile/bought">Bought</MDBNavLink>
                                <span className="icon"><i className="fas fa-euro-sign"></i></span>
                                
                                </li>

                            </ul>
                </div>

                    </nav>

                </div>
           

                <Switch>
                    <Route path="/profile/edit" component={Edit} />
                    <Route path="/profile/sell" component={Sell} />
                    <Route path="/profile/bought" component={Bought} />
                </Switch>


            </>
        )
    }
}