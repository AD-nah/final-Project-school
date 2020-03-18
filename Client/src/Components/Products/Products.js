import React, { Component } from 'react';
import Men from './Men/Men';
import Women from './Women/Women';
import Reworked from './Reworked/Reworked';
import { Switch, Route } from 'react-router-dom';
import { MDBNav, MDBNavLink, MDBNavItem } from "mdbreact";


export default class Products extends Component {
    render() {
        return (<div>


            <div class="sidebar">
                <MDBNav className="nav-fill">

                    <MDBNavItem>
                        <MDBNavLink  to="/products/women">Women's</MDBNavLink>
                    </MDBNavItem>


                    <MDBNavItem>
                        <MDBNavLink to="/products/men">Men's</MDBNavLink>
                    </MDBNavItem>

                    <MDBNavItem>
                        <MDBNavLink  to="/products/reworked">Reworked</MDBNavLink>
                    </MDBNavItem>
                </MDBNav>
            </div>




            <div>
                <Switch>
                    <Route exact path="/products/reworked" component={Reworked} />
                    <Route path="/products/men" component={Men} />
                    <Route path="/products/women" component={Women} />
                </Switch>
            </div>
        </div>
        )
    }
}











// <div id="navbar-wrapper">
// <header>
//     <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
//         <div class="container-fluid">
//             <div class="navbar-header">
//                 <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse">
//                     <span class="sr-only">Toggle navigation</span>
//                     <span class="icon-bar"></span>
//                     <span class="icon-bar"></span>
//                     <span class="icon-bar"></span>
//                 </button>
//             </div>
//             <div id="navbar-collapse" class="collapse navbar-collapse">
//                 <form class="navbar-form navbar-left" role="search">
//                     <div class="input-group">
//                         <input type="text" class="form-control" placeholder="Search">
//                         <span class="input-group-btn">
//                             <button class="btn btn-default" type="submit"><span class="glyphicon glyphicon-search" aria-hidden="true"></span></button>
//                         </span>
//                     </div>
//                 </form>
//                 <ul class="nav navbar-nav navbar-right">
//                     <li class="dropdown">
//                         <a id="flag" href="#" class="dropdown-toggle" data-toggle="dropdown">
//                             <img src="http://www.country-dialing-codes.net/img/png-country-4x2-fancy-res-1280x960/gb.png" alt="English" width="28px" height="18px">
//                         </a>
//                         <ul class="dropdown-menu dropdown-menu-flag" role="menu">
//                             <li>
//                                 <a href="#">
//                                     <img src="http://www.country-dialing-codes.net/img/png-country-4x2-flat-res-640x480/gf.png" alt="Français" width="28px" height="18px">
//                                     <span>Français</span>
//                                 </a>
//                             </li>
//                         </ul>
//                     </li>
//                     <li class="dropdown">
//                         <a id="user-profile" href="#" class="dropdown-toggle" data-toggle="dropdown"><img src="http://lorempixel.com/100/100/people/9/" class="img-responsive img-thumbnail img-circle"> Username</a>
//                         <ul class="dropdown-menu dropdown-block" role="menu">
//                             <li><a href="#">Profil edition</a></li>
//                             <li><a href="#">Admin</a></li>
//                             <li><a href="#">Logout</a></li>
//                         </ul>
//                     </li>
//                 </ul>
//             </div>
//         </div>
//     </nav>
// </header>
// </div>
// <div id="wrapper">
// <div id="sidebar-wrapper">
//     <aside id="sidebar">
//         <ul id="sidemenu" class="sidebar-nav">
//             <li>
//                 <a href="#">
//                     <span class="sidebar-icon"><i class="fa fa-dashboard"></i></span>
//                     <span class="sidebar-title">Home</span>
//                 </a>
//             </li>
//             <li>
//                 <a class="accordion-toggle collapsed toggle-switch" data-toggle="collapse" href="#submenu-2">
//                     <span class="sidebar-icon"><i class="fa fa-users"></i></span>
//                     <span class="sidebar-title">Management</span>
//                     <b class="caret"></b>
//                 </a>
//                 <ul id="submenu-2" class="panel-collapse collapse panel-switch" role="menu">
//                     <li><a href="#"><i class="fa fa-caret-right"></i>Users</a></li>
//                     <li><a href="#"><i class="fa fa-caret-right"></i>Roles</a></li>
//                 </ul>
//             </li>
//             <li>
//                 <a class="accordion-toggle collapsed toggle-switch" data-toggle="collapse" href="#submenu-3">
//                     <span class="sidebar-icon"><i class="fa fa-newspaper-o"></i></span>
//                     <span class="sidebar-title">Blog</span>
//                     <b class="caret"></b>
//                 </a>
//                 <ul id="submenu-3" class="panel-collapse collapse panel-switch" role="menu">
//                     <li><a href="#"><i class="fa fa-caret-right"></i>Posts</a></li>
//                     <li><a href="#"><i class="fa fa-caret-right"></i>Comments</a></li>
//                 </ul>
//             </li>
//             <li>
//                 <a href="#">
//                     <span class="sidebar-icon"><i class="fa fa-database"></i></span>
//                     <span class="sidebar-title">Data</span>
//                 </a>
//             </li>
//         </ul>
//     </aside>            
// </div>
// <main id="page-content-wrapper" role="main">
// </main>
// </div> 