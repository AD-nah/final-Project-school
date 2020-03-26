import React, { Component } from 'react';
import Men from './Men/Men';
import Women from './Women/Women';
import   Reworked from './Reworked/Reworked';
import { Switch, Route } from 'react-router-dom';
import { MDBNav, MDBNavLink, MDBNavItem } from "mdbreact";



export default class Products extends Component {
    render() {
        return (< div className="container" >
            <div className="row">
                <div className='col-sm-12 col-md-4 col-lg-2' >
                    <div class="sidebar" >
                        <MDBNav className="nav-fill" >

                            <MDBNavItem >
                                <MDBNavLink to="/products/women" > Women 's</MDBNavLink>
                            </MDBNavItem >
                            <MDBNavItem >
                                <MDBNavLink to="/products/men" > Men 's </MDBNavLink> 
                            </MDBNavItem >
                            <MDBNavItem >
                                <MDBNavLink to="/products/reworked" > Reworked </MDBNavLink> </MDBNavItem >
                            </MDBNav>
                    </div>
                </div>
                <div className='col-sm-12 col-md-10 col-lg-10' >
                    <div >
                        <Switch >
                            <Route path="/products/reworked" component={Reworked} />
                            <Route path="/products/men" component={Men} />
                            <Route path="/products/women" component={Women} />
                        </Switch >
                    </div>
                </div>
            </div>
        </div>
        )
    }
}