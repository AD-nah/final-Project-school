import React, { Component } from 'react';
import img from "../../../imgs/wissam.jpeg";

import './ordered.css'

export default class Ordered extends Component {

  render() {

    return (

      <div className="container ">
                                <h2 className="h1-responsive font-weight-bold my-4">
        still not finished ...
          </h2>
      <div className="table-responsive">
          <table className="table" >
            <thead className="thead-grey" >
              <tr >
                <th scope="col"> </th>
                <th scope="col">Image</th>
                <th scope="col">Id</th>
                <th scope="col">Discription</th>
                <th scope="col">Color</th>
                <th scope="col">Size</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td><img src={{img}} alt="" style={{width:'80px',height:'60px'}}/></td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@alis</td>
                <td>@ali</td>
                <td>@jenny</td>
              </tr>

            </tbody>
          </table>
          <div style={{height:"263px"}}>
          </div>
          </div>
        </div>
       
    )
  }
}