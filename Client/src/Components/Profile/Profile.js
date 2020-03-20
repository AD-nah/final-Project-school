import React, { Component } from 'react';

import Bought from './Bought/Bought';
import Edit from './Edit/Edit';
import Sell from './Sell/Sell';

import {Switch,Route} from 'react-router-dom';
import {MDBNav, MDBNavLink, MDBNavItem} from "mdbreact";


export default class Profile extends Component {

    render() {
        return (<> 
      
            <div className="sidebar" >

                <MDBNav className="nav-fill " >

                    <MDBNavItem>
                        <MDBNavLink className="text-dark  btn-3_custom" to="/profile/edit">Edit your Profile</MDBNavLink>
                    </MDBNavItem>

                    <MDBNavItem>
                        <MDBNavLink className="text-dark  btn-3_custom" to="/profile/sell">Sell</MDBNavLink>
                    </MDBNavItem>
                   

                    <MDBNavItem>
                        <MDBNavLink className="text-dark btn-3_custom" to="/profile/bought">Bought</MDBNavLink>
                    </MDBNavItem>

                </MDBNav>

            </div>

            <div>
                <Switch>
                    <Route  path="/profile/edit"   component={Edit}/>
                    <Route  path="/profile/sell"   component={Sell}/>
                    <Route  path="/profile/bought" component={Bought}/>
                </Switch> 
            </div>         
        </>
    )
    }
}
