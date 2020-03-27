import React, { Component } from 'react'
import Bought from './Bought/Bought';
import Edit from './Edit/Edit';
import Sell from './Sell/Sell';

import { Switch, Route } from 'react-router-dom';
import { MDBNav, MDBNavLink, MDBNavItem } from "mdbreact";
export default class Profile extends Component {
    constructor(props) {
        super(props)


    }



    render() {
        return (
            <>
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

                                <li>   <MDBNavItem>
                                    <MDBNavLink to="/profile/bought">Bought</MDBNavLink>
                                </MDBNavItem><span className="icon"><i class="fas fa-arrows-alt-h"></i></span></li>
                            </ul>
                        
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