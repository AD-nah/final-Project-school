import React, { Component} from 'react'
import Men from './Men/Men'
import Women from './Women/Women'
import Outfits from './Outfits/Outfits'
import {Switch,Route, Link} from 'react-router-dom';
import { MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";


export default class Products extends Component {
    render() {
        return (<>
      
            <div>

                <MDBNav className="nav-tabs nav-fill">

                    <MDBNavItem>
                        <MDBNavLink to="/products/Outfits">Outfits</MDBNavLink>
                    </MDBNavItem>


                    <MDBNavItem>
                        <MDBNavLink  to="/products/men">Men</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBNavLink to="/products/women">Women</MDBNavLink>
                    </MDBNavItem>
                   
                 

                    <MDBNavItem>
                    <form class="form-inline d-flex justify-content-center md-form form-sm mt-0">
                        <i class="fas fa-search" aria-hidden="true"></i>
                        <input class="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search"
                            aria-label="Search" />
                    </form>
                    </MDBNavItem>

                
                </MDBNav>

            </div>
                 

            <div>
                <Switch>
                <Route exact path="/products/outfits" component={Outfits}/>
                    <Route  path="/products/men" component={Men}/>
                    <Route  path="/products/women" component={Women}/>
                </Switch> 
            </div>         
        </>
    )
    }
}







