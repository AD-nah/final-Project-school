
import React, { Component } from 'react';
import { connect } from 'react-redux';

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
    this.setState({ products: this.props.item.filter((item, index) => this.props.item.indexOf(item) === index)})
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
        <h3 className="card-header text-center font-weight-bold text-uppercase py-4 ">MY Chart</h3>
        <div className="container">
          {this.state.products && this.state.products.map((item, index) => {
            return (


              <div className="row mb-3 mt-3" style={{backgroundColor:"#F0ECDF"}}>
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
                    <hr/>
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
export default connect(mapStateToProps)(Chart)

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


// import React, { Component } from 'react'
// import { connect } from 'react-redux'
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
//       <>

//         <div className=" col-md-12 card " >
//           <h3 className="card-header text-center font-weight-bold text-uppercase py-4 ">MY Charts</h3>
//           <div className="container card-body " >
//             <div id="table" className="table-editable">
//               {/* <span className="table-add float-right mb-3 mr-2"><a href="#!" class="text-success"><i
//                 className="fas fa-plus fa-2x" aria-hidden="true"></i></a></span> */}
//               <table class="table table-responsive-md table-striped text-center">
//                 <thead>
//                   <tr>
//                     <th > Product Photo</th>
//                     <th >Name</th>
//                     <th >Description</th>

//                     <th >Charts</th>
//                     <th >Price</th>
//                     <th >Delete</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {this.state.products && this.state.products.map((item, index) => {
//                     return (
//                       <tr>
//                         <td className="pt-3-half" contenteditable="true" style={{width:"40vw"}}>
//                           <img style={{ height: '40vh', width: "15vw" }} src={item.images.protoTypes[0]} className="img-fluid img-thumbnail" alt="Sheep" />
                            
//                           <select className=" md-form colorful-select dropdown-primary bg-danger w-50 h-100">
//                             <option value="1">color 1</option>                           <option value="2">color 2</option>                          <option value="3">color 3</option>                           <option value="4">color 4</option>
//                           </select>
//                           <select className=" md-form  dropdown-primary bg-danger w-50 h-100">
//                             <option value="1">Size 1</option>
//                             <option value="2">Size 2</option>
//                             <option value="3">Size 3</option>
//                             <option value="4">Size 4</option>

//                           </select>
//                         </td>
                        

//                         <td className="pt-3-half" contenteditable="true">{item.name}</td>
//                         <td className="pt-3-half" contenteditable="true">{item.description}</td>
//                         <td className
//                           ="w-25">{this.starMaker(item.rating)}</td>
//                         <td>{item.prices}$</td>
//                         <td>
//                           <span className="table-remove"><button type="button" onClick={this.delete.bind(this, item)}
//                             className="btn btn-danger btn-rounded btn-sm my-0">Remove</button></span>
//                         </td>

//                       </tr>

//                     )
//                   })}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>

//         {/**/}
//       </>
//     )
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     item: state.basketReducer
//   }
// }
// export default connect(mapStateToProps)(Chart)

