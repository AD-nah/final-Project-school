// import React, { Component } from 'react'

// export default class Favorites extends Component {


//   render() {
//     return (
//       <>

//         <h3 className="card-header text-center font-weight-bold text-uppercase py-4 ">MY Favorites</h3>
//         <div className="container">
//           <div className="row">
//             <div className="col-md-2 text-center"> {/* bg-success*/}
//               <h3></h3>
//               <img className="img-fluid" style={{ height: "40vh", width: "10vw" }} src="https://images-na.ssl-images-amazon.com/images/I/71fC2j2UA6L._AC_UY879_.jpg" />


//             </div>
//             {/*des and Price*/}
//             <div className="col-md-5 text-center "> {/*bg-info*/}
//               <div className="col">

//                 <div className="col">
//                   <h1>Name</h1>
//                   <p>Onlmila Lacy L/S KNT Noos Pullover</p>


//                 </div>
//                 <h3 className="mt-5">Descreption</h3>
//                 <p style={{ fontSize: "1rem" }}>Features: Style: Light Jacket, Parka Fit: Tailored Cut Hood: Hood with drawstring, Hood with contrasting lining Zip Closure: Full front zip, Zip with logo puller pockets: Side pockets Sleeve Sleeves: Ribbed embroidered emblem waistband: Adjustable waist</p>

//               </div>
//               <span className="table-remove"><button type="button"
//                   className="btn btn-info btn-rounded btn-sm my-0 w-25">Remove</button></span>
//               {/* <div className="col">
//                 <h1>Price</h1>
//                 <span>$66</span>


//               </div> */}
//             </div>
//             {/*des and Price*/}

//             <div className="col-md-5 text-center "> {/*bg-danger*/}
//               <h1>Hallo from </h1>
//               <div className="col">

//                 {/* <span className="table-remove"><button type="button"
//                   className="btn btn-info btn-rounded btn-sm my-0 w-2">Remove</button></span> */}

//               </div>
//               <div className="col">
//                 <h1>Stars</h1>



//               </div>
//               <div className="col">
//                 <h2>Price</h2>
//                 <h3 className="text-danger ">$66</h3>
//                 <select style={{height:"30px",width:"100px",backgroundColor:"#FCC400"}}className="mr-2 md-form colorful-select dropdown-primary">
//                   <option value="1">color 1</option>                           <option value="2">color 2</option>                          <option value="3">color 3</option>                           <option value="4">color 4</option>
//                 </select>
//                 <select style={{height:"30px",width:"100px",backgroundColor:"#FCC400"}} className=" md-form  dropdown-primary ">
//                   <option value="1">Size 1</option>
//                   <option value="2">Size 2</option>
//                   <option value="3">Size 3</option>
//                   <option value="4">Size 4</option>

//                 </select>


//               </div>

//             </div>
//           </div>

//         </div>


//       </>
//     )
//   }
// }

import React, { Component } from 'react';
import { connect } from 'react-redux';

class Favorites extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // from the Redux
      products: null,
    }
  }

  // to remove duplicated items, thats come from the redux Store, and then save it inside the Compoment's state 
  componentDidMount() {
    this.setState({ products: this.props.item.filter((item, index) => this.props.item.indexOf(item) === index) })
  }

  // to take a Number and convert it to Star
  starMaker(n) {
    let stars = [];
    for (let i = 0; i < n; i++) {
      stars.push(<li className="fa fa-star"></li>);
    }
    return stars;
  }

  // remove items
  delete(item) {
    this.setState(prevState => ({
      products: prevState.products.filter(el => el != item)
    }))
  }

  render() {

    return (
      <>
        <h3 className="card-header text-center font-weight-bold text-uppercase py-4 ">MY Favorites</h3>
        <div className="container">
          {this.state.products && this.state.products.map((item, index) => {
            return (


              <div className="row">
                <div className="col-md-4 text-center"> {/* bg-success*/}
                  <h3></h3>
                  <img style={{ height: '40vh', width: "15vw" }} src={item.images.protoTypes[0]} className="img-fluid img-thumbnail" alt="Sheep" />


                </div>
                {/*des and Price*/}
                <div className="col-md-4 text-center "> {/*bg-info*/}
                  <div className="col">

                    <div className="col">
                      <h1>Name</h1>
                      <p>{item.name}</p>


                    </div>
                    <h3 className="mt-5">Descreption</h3>
                    <p style={{ fontSize: "1rem" }}>{item.description}</p>

                  </div>

                  <span className="table-remove"><button type="button"
                    onClick={this.delete.bind(this, item)}
                    className="btn btn-danger btn-rounded btn-sm my-0 bg-info w-25">Delete</button></span>
                  {/* <div className="col">
                <h1>Price</h1>
                <span>$66</span>


              </div> */}
                </div>
                {/*des and Price*/}

                <div className="col-md-4 text-center "> {/*bg-danger*/}

                  <div className="col">
                    <h2>Stars</h2>
                    <span>{this.starMaker(item.rating)}</span>


                  </div>
                  <div className="col mt-5">
                    <h2>Price</h2>
                    <h3 className="text-danger ">{item.prices}$</h3>

                    <select style={{ height: "30px", width: "100px", backgroundColor: "#FCC400" }} className="mr-2 md-form colorful-select dropdown-primary">
                      <option value="1">color 1</option>                           <option value="2">color 2</option>                          <option value="3">color 3</option>                           <option value="4">color 4</option>
                    </select>
                    <select style={{ height: "30px", width: "100px", backgroundColor: "#FCC400" }} className=" md-form  dropdown-primary ">
                      <option value="1">Size 1</option>
                      <option value="2">Size 2</option>
                      <option value="3">Size 3</option>
                      <option value="4">Size 4</option>

                    </select>


                  </div>

                </div>
              </div>



            )
          })}
        </div>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    item: state.basketReducer
  }
}
export default connect(mapStateToProps)(Favorites)

{/*
import React, { Component } from 'react'
import { connect } from 'react-redux'
class Favorites extends Component {

  constructor(props) {
    super(props)
    this.state = {
      // from the Redux
      products: null,
    }
  }

  // to remove duplicated items, thats come from the redux Store, and then save it inside the Compoment's state
  componentDidMount() {
    this.setState({ products: this.props.item.filter((item, index) => this.props.item.indexOf(item) === index) })
  }

  // to take a Number and convert it to Star
  starMaker(n) {
    let stars = [];
    for (let i = 0; i < n; i++) {
      stars.push(<li className="fa fa-star"></li>);
    }
    return stars;
  }

  // remove items
  delete(item) {
    this.setState(prevState => ({
      products: prevState.products.filter(el => el != item)
    }))
  }
    render() {

        return (
            <>

            <div className=" col-md-12 card" >
            <h3 className="card-header text-center font-weight-bold text-uppercase py-4 ">MY Favorites</h3>
            <div className="container card-body ">
              <div id="table" className="table-editable">
                <span className="table-add float-right mb-3 mr-2"><a href="#!" class="text-success"><i
                      className="fas fa-plus fa-2x" aria-hidden="true"></i></a></span>
                 <table class="table table-bordered table-responsive-md table-striped text-center">
                 <thead>
                    <tr>
                      <th >Photo og Product</th>
                      <th >Name</th>
                      <th >Description</th>

                      <th >Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                  {this.state.products && this.state.products.map((item, index) => {
                    return (
                    <tr>
                      <td className="pt-3-half" contenteditable="true">
                      <img style={{ height: '180px', width: "180px" }} src={item.images.protoTypes[0]} className="img-fluid img-thumbnail" alt="Sheep" />
                      </td>
                    <td className="pt-3-half" contenteditable="true">{item.name}</td>
                    <td className="pt-3-half" contenteditable="true">{item.description}</td>
                      <td>{this.starMaker(item.rating)}</td>
                      <td>{item.prices}$</td>
                      <td>
                        <span className="table-remove"><button type="button" onClick={this.delete.bind(this, item)}
                            className="btn btn-danger btn-rounded btn-sm my-0">Remove</button></span>
                      </td>
                    </tr>

                )
              })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
             </>
        )
    }
}

const mapStateToProps = (state) => {
  return {
    item: state.basketReducer
  }
}
export default connect(mapStateToProps)(Favorites)
*/}


// my Favoret agen start from here


// import React, { Component } from 'react'

// export default class Favorites extends Component {
//     render() {
//         return (
//             <>

//             <div className=" col-md-12 card">
//             <h3 className="card-header text-center font-weight-bold text-uppercase py-4 ">MY Favorites</h3>
//             <div className="container card-body ">
//               <div id="table" className="table-editable">
//                 <span className="table-add float-right mb-3 mr-2"><a href="#!" class="text-success"><i
//                       className="fas fa-plus fa-2x" aria-hidden="true"></i></a></span>
//                  <table class="table table-bordered table-responsive-md table-striped text-center">
//                  <thead>
//                     <tr>
//                       <th className="text-center">Photo og Product</th>
//                       <th className="text-center">Name</th>
//                       <th className="text-center">Description</th>

//                       <th className="text-center">Remove</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     <tr>
//                       <td className="pt-3-half" contenteditable="true">
//                         <img className="h-50" src="https://images-na.ssl-images-amazon.com/images/I/71fC2j2UA6L._AC_UY879_.jpg"/>
//                       </td>
//                       <td className="pt-3-half" contenteditable="true">30</td>
//                       <td className="pt-3-half" contenteditable="true">Deepends</td>


//                       <td>
//                         <span className="table-remove"><button type="button"
//                             className="btn btn-danger btn-rounded btn-sm my-0">Remove</button></span>
//                       </td>
//                     </tr>

//                     <tr>
//                       <td className="pt-3-half" contenteditable="true">

//                       </td>
//                       <td className="pt-3-half" contenteditable="true">45</td>
//                       <td className="pt-3-half" contenteditable="true">Insectus</td>


//                       <td>
//                         <span className="table-remove"><button type="button"
//                             className="btn btn-danger btn-rounded btn-sm my-0">Remove</button></span>
//                       </td>
//                     </tr>

//                     <tr>
//                       <td className="pt-3-half" contenteditable="true">Guadalupe House</td>
//                       <td className="pt-3-half" contenteditable="true">26</td>
//                       <td className="pt-3-half" contenteditable="true">Isotronic</td>

//                       <td>
//                         <span className="table-remove"><button type="button"
//                             className="btn btn-danger btn-rounded btn-sm my-0">Remove</button></span>
//                       </td>
//                     </tr>

//                     <tr className="hide">
//                       <td className="pt-3-half" contenteditable="true">Elisa Gallagher</td>
//                       <td className="pt-3-half" contenteditable="true">31</td>
//                       <td className="pt-3-half" contenteditable="true">Portica</td>

//                       <td>
//                         <span className="table-remove"><button type="button"
//                             className="btn btn-danger btn-rounded btn-sm my-0">Remove</button></span>
//                       </td>
//                     </tr>
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>
//              </>
//         )
//     }
// }