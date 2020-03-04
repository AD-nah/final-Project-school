import React, { Component} from 'react'
import Men from './Men/Men'
import Women from './Women/Women'
import {Switch,Route, Link} from 'react-router-dom';

// import "antd/dist/antd.css";
// import { Menu} from "antd";
// const { SubMenu } = Menu


export default class Products extends Component {
    render() {
        return (<>

        <Link  to="/products/men">Men</Link>
        <Link  to="/products/women" >Women</Link>
                    


                 

            <div>
                <Switch>
                    <Route exact path="/products/men" component={Men}/>
                    <Route  path="/products/women" component={Women}/>
                </Switch> 
            </div>         
        </>
    )
    }
}
