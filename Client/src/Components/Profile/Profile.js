// import React, { Component } from 'react';

// import Bought from './Bought/Bought';
// import Edit from './Edit/Edit';
// import Sell from './Sell/Sell';

// import { Switch, Route } from 'react-router-dom';
// import { MDBNav, MDBNavLink, MDBNavItem } from "mdbreact";


// export default class Profile extends Component {

//     render() {
//         return (<>

//             <div className="sidebar m-0" >

//                 <MDBNav className="nav-fill " >

//                     <MDBNavItem>
//                         <MDBNavLink className="text-dark  btn-3_custom" to="/profile/edit">Edit your Profile</MDBNavLink>
//                     </MDBNavItem>

//                     <MDBNavItem>
//                         <MDBNavLink className="text-dark  btn-3_custom" to="/profile/sell">Sell</MDBNavLink>
//                     </MDBNavItem>


//                     <MDBNavItem>
//                         <MDBNavLink className="text-dark btn-3_custom" to="/profile/bought">Bought</MDBNavLink>
//                     </MDBNavItem>

//                 </MDBNav>

//             </div>

//             <div>
//                 <Switch>
//                     <Route path="/profile/edit" component={Edit} />
//                     <Route path="/profile/sell" component={Sell} />
//                     <Route path="/profile/bought" component={Bought} />
//                 </Switch>
//             </div>
//         </>
//         )
//     }
// }

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

                    <button href="#" className="hamburger open-panel nav-toggle">
                        <span className="screen-reader-text">Menu</span>
                       
                    </button>
                   

                    <nav role="navigation" className="menu">

                        <a href="#" className="logotype">My<span>Profile</span></a>

                        <div className="overflow-container">

                            <ul className="menu-dropdown">

                                {/* <li><a href="#">Dashboard</a><span class="icon"><i class="fa fa-dashboard"></i></span></li> */}

                                <li className="menu-hasdropdown">
                                    <MDBNavItem>
                                        <MDBNavLink to="/profile/edit">Edit your Profile</MDBNavLink>
                                    </MDBNavItem>
                                    {/* <span><i className="fa fa-gear"></i></span> */}


                                </li>

                                <li>       <MDBNavItem>
                                    <MDBNavLink  to="/profile/sell">Sell</MDBNavLink>
                                </MDBNavItem><span className="icon"><i class="fas fa-dollar-sign"></i></span></li>

                                <li>   <MDBNavItem>
                                    <MDBNavLink  to="/profile/bought">Bought</MDBNavLink>
                                </MDBNavItem><span className="icon"><i class="fas fa-euro-sign"></i></span></li>

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