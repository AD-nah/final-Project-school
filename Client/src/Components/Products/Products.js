import React, { Component} from 'react'
import Men from './Men/Men'
import Women from './Women/Women'
import Outfits from './Outfits/Outfits'
import {Switch,Route} from 'react-router-dom';
import {MDBNav, MDBNavLink, MDBNavItem} from "mdbreact"




export default class Products extends Component {
    render() {
        return (<>
      
            <div style={{fontSize:"20px"}} >

                <MDBNav className="nav-fill ">

                    <MDBNavItem>
                        <MDBNavLink className="text-dark  btn-3_custom" to="/products/women">Women's</MDBNavLink>
                    </MDBNavItem>
                   

                    <MDBNavItem>
                        <MDBNavLink className="text-dark" to="/products/men">Men's</MDBNavLink>
                    </MDBNavItem>
                 
                    <MDBNavItem>
                        <MDBNavLink className="text-dark" to="/products/Outfits">Outfits</MDBNavLink>
                    </MDBNavItem>

                    <MDBNavItem>
                    <form class="form-inline d-flex justify-content-center md-form form-sm mt-0">
                        <i class="fas fa-search" aria-hidden="true"></i>
                        <input class="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search"
                            aria-label="Search" />
                    </form>
                    </MDBNavItem>
                </MDBNav>

<ul class="nav flex-column">
  <li class="nav-item">
    <a class="nav-link active" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#">Disabled</a>
  </li>
</ul>

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







