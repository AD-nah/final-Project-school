import React, { Component } from 'react';
import Men from './Men/Men';
import Women from './Women/Women';
import Reworked from './Reworked/Reworked';
import { Switch, Route, Link } from 'react-router-dom';

import '../Products/Products.css'


export default class Products extends Component {
    render() {
        return (


            <div className="container-fluid ">
                <div className="row">
                <div className="wordCarousel">
              <span className="whyScount">Why Scount ? </span>
              <div>
                <ul className="flip4">
                  <li>Best Quality</li>
                  <li>New Trends</li>
                  <li>Free Shipping</li>
                  <li>Satisfiction </li>
                </ul>
              </div>
            </div>
                    <div className="products-sidebar">
                        <Link to="/products/women" className="fa fa-venus "> Women </Link>
                        <Link to="/products/men" className="fa fa-mars"> Men</Link>
                        <Link to="/products/reworked" className="fa fa-cut">Rework</Link>

                        <li >
                            <a className="collapsed  fa fa-caret-down" href="#submenu1" data-toggle="collapse" data-target="#submenu1">More
                            </a>
                            <div className="collapse" id="submenu1" aria-expanded="false">
                                <ul className="flex-column nav">
                                    <li ><a  href="#"><span>Orders</span></a></li>
                                    <li >
                                        <a className="collapsed fa fa-caret-down" href="#submenu1sub1" data-toggle="collapse" data-target="#submenu1sub1"><span>Profile</span></a>
                                        <div className="collapse" id="submenu1sub1" aria-expanded="false">
                                            <ul className="flex-column nav ">
                                               
                                                    <Link>
                                                        <i className="fa fa-fw fa-clock-o"></i>Activity
                                                    </Link>
                                                
                                                
                                                    <Link>
                                                        <i className="far fa-address-card"></i> Dashboard
                                                    </Link>
                                               
                                               

                                                    <Link>
                                                        <i className="fa fa-fw fa-bar-chart"></i> Charts
                                                    </Link>
                                                
                                                
                                                    <Link>
                                                        <i className="fa fa-fw fa-compass"></i>Areas
                                                    </Link>

                                               
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </li>

                    </div>




                    <div className='col-sm-12 col-md-10 col-lg-10' >
                        <Switch >
                            <Route path="/products/reworked" component={Reworked} />
                            <Route path="/products/men" component={Men} />
                            <Route path="/products/women" component={Women} />
                        </Switch >

                    </div>



                </div>
            </div>
        )
    }
}