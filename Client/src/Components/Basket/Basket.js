import React, { Component } from 'react';
import { connect } from 'react-redux';
import empty from './images/emptyb.png';
import paypal from './images/paypal.png';
import basket from './images/basket.png';
import master from './images/master.png';
import visa from './images/visa.png';
import {fetchBasket} from '../../Redux/Actions/basket'




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
    this.props.fetchBasket().then(res => {
      this.setState({ products: this.props.item.filter((item, index) => this.props.item.indexOf(item) === index) })
    })
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
      
        <h3 className="card-header text-center font-weight-bold text-uppercase py-4 "><img className="float-right " src={basket}/>MY Chart </h3>
  
        
        {/*if the chart is empty show this code , if not then show the product*/}
        <div className="container">
          {(!this.state.products || this.state.products.length === 0) && (

              <div>
                <div className="mt-3 alert alert-warning" role="alert">
                  <h4 className="alert-heading">No products in your Basket!</h4>
                  <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
                  <hr />
                  <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>

                </div>
                <hr />
                <div className="container row">
                  <div className="col-md-6" >
                    <img className="img-fluid" src={empty} style={{ height: "50vh" }} />
                  </div>
                  <div className="col-md-6 text-center">
                    <h1>Your Basket is empty </h1>
    
                    <button  type="button"
                      className="btn btn-info btn-rounded btn-sm my-0 ">Go back to Product</button>
                  </div>
                </div>
              </div>
          )}

          {this.state.products && this.state.products.map((item, index) => {

            return ( 

              <div className="container-fluid col-lg-12 border border-dark">
              <div className="row mb-3 m-5">
                <div className="col-md-3 text-center"> {/* bg-success*/}
                  <h3></h3>
                  <img style={{ height: '40vh', width: "15vw" }} src={item.images.protoTypes[0]} className="img-fluid img-thumbnail" alt="Sheep" />
                </div>
                {/*des and Price*/}
                <div className="col-md-3 text-center "> {/*bg-info*/}
                  <div className="col">
                    <div className="col">
                      {/* <h1>Name</h1> */}
                      <p className="font-weight-bold">{item.name}</p>
                    </div>
                    <hr />
                    <h3 className="mt-5">Descreption</h3>
                    <p style={{ fontSize: "1rem" }}>{item.description}</p>
                  </div>
                  <span className="table-remove"><button type="button"
                    onClick={this.delete.bind(this, item)}
                    className="btn btn-info btn-rounded btn-sm my-0  w-25">Delete</button></span>
                  {/* <div className="col">
                <h1>Price</h1>
                <span>$66</span>


              </div> */}
                </div>
                {/*des and Price*/}

                <div className="col-md-3 text-center"> {/*bg-danger*/}

                  <div className="col">
                    <h2>Stars</h2>
                    <span>{this.starMaker(item.rating)}</span>


                  </div>

                  <div className="col mt-5">
                    <h2>Price</h2>
                    <h3 className="text-danger font-weight-bold">{item.prices[0]}$</h3>

                    <select style={{ height: "30px", width: "100px", backgroundColor: "#FCC400" }} className="mr-2 md-form colorful-select dropdown-primary">
                        <option value="1">color 1</option>
                        <option value="2">color 2</option>
                        <option value="3">color 3</option>
                        <option value="4">color 4</option>
                    </select>

                    <select style={{ height: "30px", width: "100px", backgroundColor: "#FCC400" }} className=" md-form  dropdown-primary ">
                      <option value="1">Size 1</option>
                      <option value="2">Size 2</option>
                      <option value="3">Size 3</option>
                      <option value="4">Size 4</option>
                    </select>

                 
                  </div>
                
                </div>
{/*total start*/}
                <div className="col-md-2 m-2" style={{backgroundColor: "#DADADA", height:"40vh"}}>
                <h3 className="font-weight-bold mt-3">Total</h3>

             

                <h5 className="font-weight-bold mt-5">Subtotal<h5 className="float-right">34$</h5></h5>

                
                    <h2 className="mt-3">Payment</h2>
                    <div className="row mt-3">
                    <a href="#">
                    <img className="img-fluid col-sm-2" src={paypal} />
                    </a>
                    <a href="#">
                    <img className="img-fluid col-sm-2" src={master} />
                    </a>
                    <a href="#">
                    <img className="img-fluid col-sm-2" src={visa} />
                    </a>
                  </div>
        

                </div>
                {/*total end*/}
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
export default connect(mapStateToProps, {fetchBasket})(Chart)
