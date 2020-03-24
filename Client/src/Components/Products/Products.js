import { CommunicationRssFeed } from "material-ui/svg-icons";

// import React, { Component } from 'react';
// import Men from './Men/Men';
// import Women from './Women/Women';
// import Reworked from './Reworked/Reworked';
// import { Switch, Route } from 'react-router-dom';
// import { MDBNav, MDBNavLink, MDBNavItem } from "mdbreact";

// export default class Products extends Component {
//     render() {
//         return (
//             <div className="container">
//                 <div className="row">

//                     <div className='col-sm-12 col-md-4 col-lg-2'>
//                         <div class="sidebar"> 
//                             <MDBNav className="nav-fill">

//                                 <MDBNavItem>
//                                     <MDBNavLink to="/products/women">Women's</MDBNavLink>
//                                 </MDBNavItem>


//                                 <MDBNavItem>
//                                     <MDBNavLink to="/products/men">Men's</MDBNavLink>
//                                 </MDBNavItem>

//                                 <MDBNavItem>
//                                     <MDBNavLink to="/products/reworked">Reworked</MDBNavLink>
//                                 </MDBNavItem>
//                             </MDBNav>
//                         </div>
//                     </div>


//                 <div className='col-sm-12 col-md-10 col-lg-10'>
//                     <div>
//                         <Switch>
//                             <Route exact path="/products/reworked" component={Reworked} />
//                             <Route path="/products/men" component={Men} />
//                             <Route path="/products/women" component={Women} />
//                         </Switch>
//                     </div>
//                 </div>
//                 </div>

//             </div>
//         )
//     }
// }




import React, { Component } from 'react';
import Men from './Men/Men';
import Women from './Women/Women';
import Reworked from './Reworked/Reworked';
import { Switch, Route } from 'react-router-dom';
import { MDBNav, MDBNavLink, MDBNavItem } from "mdbreact";


class Products extends Component {
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

                                <li>
                                    <MDBNavItem>
                                        <MDBNavLink to="/products/women">Women's</MDBNavLink>
                                    </MDBNavItem>
                                    <span><i className="fa fa-gear"></i></span>


                                </li>

                                <li>
                                    <MDBNavItem>
                                        <MDBNavLink to="/products/men">Men's</MDBNavLink>
                                    </MDBNavItem><span className="icon"><i class="fas fa-dollar-sign"></i></span>
                                </li>

                                <li>
                                    <MDBNavItem>
                                        <MDBNavLink to="/products/reworked">Reworked</MDBNavLink>
                                    </MDBNavItem><span className="icon"><i class="fas fa-euro-sign"></i></span>
                                </li>

                            </ul>

                        </div>

                    </nav>

                </div>
                <Switch>
                    <Route exact path="/products/reworked" component={Reworked} />
                    <Route path="/products/men" component={Men} />
                    <Route path="/products/women" component={Women} />
                </Switch>
            </>
        )
    }
}

export default Products;


