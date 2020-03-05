import React, { Component } from 'react'

export default class Favorites extends Component {
    render() {
        return (
            <>
   
            <div className=" col-md-12 card">
            <h3 className="card-header text-center font-weight-bold text-uppercase py-4 ">MY Favorites</h3>
            <div className="container card-body ">
              <div id="table" className="table-editable">
                <span className="table-add float-right mb-3 mr-2"><a href="#!" class="text-success"><i
                      className="fas fa-plus fa-2x" aria-hidden="true"></i></a></span>
                 <table class="table table-bordered table-responsive-md table-striped text-center">
                 <thead>
                    <tr>
                      <th className="text-center">Photo og Product</th>
                      <th className="text-center">Name</th>
                      <th className="text-center">Description</th>
                  
                      <th className="text-center">Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="pt-3-half" contenteditable="true">
                        <img className="h-50" src="https://images-na.ssl-images-amazon.com/images/I/71fC2j2UA6L._AC_UY879_.jpg"/>
                      </td>
                      <td className="pt-3-half" contenteditable="true">30</td>
                      <td className="pt-3-half" contenteditable="true">Deepends</td>
                      
                
                      <td>
                        <span className="table-remove"><button type="button"
                            className="btn btn-danger btn-rounded btn-sm my-0">Remove</button></span>
                      </td>
                    </tr>
                
                    <tr>
                      <td className="pt-3-half" contenteditable="true">
                        
                      </td>
                      <td className="pt-3-half" contenteditable="true">45</td>
                      <td className="pt-3-half" contenteditable="true">Insectus</td>
                   
                 
                      <td>
                        <span className="table-remove"><button type="button"
                            className="btn btn-danger btn-rounded btn-sm my-0">Remove</button></span>
                      </td>
                    </tr>
                   
                    <tr>
                      <td className="pt-3-half" contenteditable="true">Guadalupe House</td>
                      <td className="pt-3-half" contenteditable="true">26</td>
                      <td className="pt-3-half" contenteditable="true">Isotronic</td>
                     
                      <td>
                        <span className="table-remove"><button type="button"
                            className="btn btn-danger btn-rounded btn-sm my-0">Remove</button></span>
                      </td>
                    </tr>
           
                    <tr className="hide">
                      <td className="pt-3-half" contenteditable="true">Elisa Gallagher</td>
                      <td className="pt-3-half" contenteditable="true">31</td>
                      <td className="pt-3-half" contenteditable="true">Portica</td>
                  
                      <td>
                        <span className="table-remove"><button type="button"
                            className="btn btn-danger btn-rounded btn-sm my-0">Remove</button></span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
             </>
        )
    }
}
