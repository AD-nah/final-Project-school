import React, { Component } from 'react';

import Bought from './Bought/Bought'
import Edit from './Edit/Edit'
import {Switch,Route} from 'react-router-dom';
import {MDBNav, MDBNavLink, MDBNavItem} from "mdbreact";


export default class Profile extends Component {

    render() {
        return (<>
      
            <div style={{padding:"75px",fontSize:"20px" , backgroundColor:"#ebebeb"}} >

                <MDBNav className="nav-fill " >

                    <MDBNavItem>
                        <MDBNavLink className="text-dark  btn-3_custom" to="/profile/edit">Edit</MDBNavLink>
                    </MDBNavItem>
                   

                    <MDBNavItem>
                        <MDBNavLink className="text-dark btn-3_custom" to="/profile/bought">Bought</MDBNavLink>
                    </MDBNavItem>

                </MDBNav>

            </div>

            <div>
                <Switch>
                    <Route  path="/profile/edit" component={Edit}/>
                    <Route  path="/profile/bought" component={Bought}/>
                </Switch> 
            </div>         
        </>
    )
    }
}
