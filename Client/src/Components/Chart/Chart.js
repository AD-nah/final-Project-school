// import React, { Component } from 'react';
// import { connect } from 'react-redux'
// // import { Prev } from 'react-bootstrap/PageItem';

// class Chart extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       // from the Redux
//       products: null,
//     }
//   }

//   // to remove duplicated items, thats come from the redux Store, and then save it inside the Compoment's state 
//   componentDidMount() {
//     this.setState({ products: this.props.item.filter((item, index) => this.props.item.indexOf(item) === index) })
//   }

//   // to take a Number and convert it to Star
//   starMaker(n) {
//     let stars = [];
//     for (let i = 0; i < n; i++) {
//       stars.push(<li className="fa fa-star"></li>);
//     }
//     return stars;
//   }

//   // remove items
//   delete(item) {
//     this.setState(prevState => ({
//       products: prevState.products.filter(el => el != item)
//     }))
//   }

//   render() {
//     return (
//       <div className="container " >
//         <div className="row" >
//           <div className="col-12 " >
//             <table className="table table-image" >
//               <thead >
//                 <tr>
//                   <th scope="col"></th>
//                   <th scope="col" >Article Name</th>
//                   <th scope="col">description</th>
//                   <th scope="col">Stars</th>
//                   <th scope="col">Price</th>
//                 </tr>
//               </thead>
//               <tbody style={{ fontSize: "20rem" }}>
//                 {this.state.products && this.state.products.map((item, index) => {
//                   return (
//                     <tr>
//                       <td className="w-25" >
//                         <img style={{ height: '180px', width: "180px" }} src={item.images.protoTypes[0]} className="img-fluid img-thumbnail" alt="Sheep" />
//                         <select className=" md-form colorful-select dropdown-primary bg-danger w-50 h-100">
//                           <option value="1">color 1</option>
//                           <option value="2">color 2</option>
//                           <option value="3">color 3</option>
//                           <option value="4">color 4</option>

//                         </select>
//                         <select className=" md-form  dropdown-primary bg-danger w-50 h-100">
//                           <option value="1">Size 1</option>
//                           <option value="2">Size 2</option>
//                           <option value="3">Size 3</option>
//                           <option value="4">Size 4</option>

//                         </select>

//                       </td>

//                       <td >{item.name}</td>
//                       <td>{item.description}</td>
//                       <td style={{ width: "10vw" }}>{this.starMaker(item.rating)}</td>
//                       <td>{item.prices}$</td>

//                       <td>
//                         <span >
//                           <button onClick={this.delete.bind(this, item)} type="button" className="btn btn-danger btn-rounded btn-sm my-0">Remove</button>
//                         </span>

//                       </td>
//                     </tr>
//                   )
//                 })}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }
// const mapStateToProps = (state) => {
//   return {
//     item: state.basketReducer
//   }
// }
// export default connect(mapStateToProps)(Chart)


import React, { Component } from 'react'
import { connect } from 'react-redux'
import Axios from 'axios'
class Chart extends Component {

  constructor(props) {
    super(props)
    this.state = {
      // from the Redux
      products: null,
    }
  }

  // to remove duplicated items, thats come from the redux Store, and then save it inside the Compoment's state 
  componentDidMount() {
    setTimeout(()=> {
      this.setState({ products: this.props.item.filter((item, index) => this.props.item.indexOf(item) === index) })
    },100)
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

        <div className=" col-md-12 card " >
          <h3 className="card-header text-center font-weight-bold text-uppercase py-4 ">MY Favorites</h3>
          <div className="container card-body " >
            <div id="table" className="table-editable">
              {/* <span className="table-add float-right mb-3 mr-2"><a href="#!" class="text-success"><i
                className="fas fa-plus fa-2x" aria-hidden="true"></i></a></span> */}
              <table class="table table-bordered table-responsive-md table-striped text-center">
                <thead>
                  <tr>
                    <th >Photo Product</th>
                    <th >Name</th>
                    <th >Description</th>
                    <th >Charts</th>
                    <th >Price</th>
                    <th >Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.products && this.state.products.map((item, index) => {
                    return (
                      <tr>
                        <td className="pt-6-half" contenteditable="true">
                          <img style={{ height: '180px', width: "180px" }} src={item.images.protoTypes[0]} className="img-fluid img-thumbnail" alt="Sheep" />

                          <select className=" md-form colorful-select dropdown-primary bg-danger w-50 h-100">
                            <option value="1">color 1</option>
                            <option value="2">color 2</option>
                            <option value="3">color 3</option>
                            <option value="4">color 4</option>
                          </select>
                          <select className=" md-form  dropdown-primary bg-danger w-50 h-100">
                            <option value="1">Size 1</option>
                            <option value="2">Size 2</option>
                            <option value="3">Size 3</option>
                            <option value="4">Size 4</option>

                          </select>
                        </td>


                        <td className="pt-3-half" contenteditable="true">{item.name}</td>
                        <td className="pt-3-half" contenteditable="true">{item.description}</td>
                        <td className="w-25">{this.starMaker(item.rating)}</td>
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
export default connect(mapStateToProps)(Chart)