import React, { Component,Link } from 'react';
import { connect } from 'react-redux';
import empty from './images/emptyb.png';
import paypal from './images/paypal.png';
import basket from './images/basket.png';
import master from './images/master.png';
import visa from './images/visa.png';
import { fetchBasket } from '../../Redux/Actions/basket'


class Chart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // from the Redux
      products: null,
      total: 0
    }
  }

  // to remove duplicated items, thats come from the redux Store, and then save it inside the Compoment's state 
  componentDidMount() {
    this.props.fetchBasket().then(res => {
      this.setState({ products: this.props.item.filter((item, index) => this.props.item.indexOf(item) === index) })

      
      // get the prices from the items in the basket and put it insid the total input
      let FullAmount=0;

       this.state.products.forEach((item) => {
          FullAmount +=item.prices[0]
      }
      )
      this.setState({total:FullAmount})
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

  // remove items and its price same time
  delete(item) {
    this.setState(prevState => ({
      products: prevState.products.filter(el => el != item),
      total:prevState.total - item.prices[0]
    }))
  }

  render() {
    return (
      <div className='container-fluid' >
        <h3 className="card-header text-center font-weight-bold text-uppercase py-4 "><img className="float-right " src={basket} />MY Basket </h3>
        <br />

        <div className=" row" style={{marginBottom:'300px'}}>
          {/*if the chart is empty show this code , if not then show the product*/}
          {(!this.state.products || this.state.products.length === 0) && (
            <div className="col-9 container" >

              <div>
                <div className="mt-3 alert alert-warning" role="alert">
                  <h4 className="alert-heading">No products in your Basket!</h4>
                 
                 
                </div>

                <div className="container row">
                  <div className="col-md-6" >
                    <img className="img-fluid" src={empty} style={{ height: "50vh" }} />
                  </div>
                  <div className="col-md-6 text-center">
                    <button type="button"
                      className="btn btn-info btn-rounded btn-sm my-0 ">Go back to Product</button>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className=" col-9">
            {this.state.products && this.state.products.map((item, index) => {

              return (
                <div className="row mb-3 m-5">


                  <div className="  row">

                    <div className=" text-center  col">
                      <img style={{ height: '40vh', width: "15vw" }} src={item.images.protoTypes[0]} className="img-fluid img-thumbnail" alt="Sheep" />
                    </div>

                    <div className="  col-5">
                      <div className=" text-center ">
                        <div className="col">
                          <div className="col">
                            <p className="font-weight-bold">{item.name}</p>
                          </div>
                          <hr />
                          <h3 className="mt-2">Descreption</h3>
                          <p style={{ fontSize: "1rem" }}>{item.description}</p>
                          <hr />
                          <div className="col">
                            <span>{this.starMaker(item.rating)}</span>
                          </div>
                        </div>
                        <hr />
                        <span className="table-remove">
                          <button
                            type="button"
                            onClick={this.delete.bind(this, item)}
                            className="btn btn-danger btn-rounded btn-sm "
                          >Remove from Basket
                              </button>
                          <button
                            type="button"
                            className="btn btn-info btn-rounded btn-sm "
                          >Send To Favorite
                              </button>
                        </span>

                      </div>
                    </div>

                    <div className="  col">
                      <div className=" text-center">


                        <div className="col">
                          <h2>Price</h2>
                          <h3 className="text-primary font-weight-bold">{item.prices[0]}$</h3>
                          <h5 className="text-danger font-weight-bold"><s>{item.prices[1]}$</s></h5>

                          <hr />

                          <select style={{ height: "30px", width: "100px", backgroundColor: "#FCC400" }} className="mr-2 md-form colorful-select dropdown-primary">
                            <label>color</label>
                            <option disabled selected='selected'>color</option>
                            <option value="1">Red</option>
                            <option value="2">Blue</option>
                            <option value="3">White</option>
                          </select>

                          <select style={{ height: "30px", width: "100px", backgroundColor: "#FCC400" }} className=" md-form  dropdown-primary ">
                            <option  disabled selected='selected'>Size </option>
                            <option value="2">Small</option>
                            <option value="3">Medium</option>
                            <option value="4">Large</option>
                          </select>
                        </div>
                        <select style={{ height: "30px", width: "100px", backgroundColor: "#FCC400" }} className=" md-form  dropdown-primary ">
                          <option disabled selected='selected'>Quantity</option>
                          <option value="1">1 pi's</option>
                          <option value="2">2 p's</option>
                          <option value="3">3 p's</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {this.state.products && this.state.products.length > 0 ? (
            <div className=" text-center  col">
              <h2 className=" card-header text-center font-weight-bold text-uppercase py-4">Payment</h2>
              <hr />
              <div className="text-center row mt-1">
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
              <hr />
              <hr />
              <h3 className="font-weight-bold mt-3">Total</h3>
              <h3 className="card-header text-center font-weight-bold text-uppercase py-3 ">{this.state.total}$</h3>
              <br />
              <button
                type="button"
                className="btn btn-info btn-rounded w-100 "
              >Pay
                    </button>
            </div>
          ) : null}

        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    item: state.basketReducer
  }
}
export default connect(mapStateToProps, { fetchBasket })(Chart)
