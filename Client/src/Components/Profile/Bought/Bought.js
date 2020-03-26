import React, { Component } from 'react';
import { connect } from 'react-redux';
import empty from './images/emptyb.png';
import paypal from './images/paypal.png';
//import basket from './images/basket.png';


class Bought extends Component {
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
        {/*
        <h3 className="card-header text-center font-weight-bold text-uppercase py-4 "><img className="float-right " src={basket}/>MY Favorets </h3>
   */}

        {/*if the chart is empty show this code , if not then show the product*/}

        {console.log('products :', this.state.products)}
        {(!this.state.products || this.state.products.length === 0) &&
          (
            <div className="container">
              <div className="mt-3 alert alert-warning" role="alert">
                <h4 className="alert-heading">No products in your Favorets!</h4>
                <p>You have no items in your Shopping Bag

</p>
                <hr />


              </div>
              <hr />
              <div className="container row">
                <div className="col-md-6" >
                  <img className="img-fluid" src={empty} style={{ height: "50vh" }} />
                </div>

                <div className="col-md-6 text-center">
                  <h1>Your bought page are empty</h1>

                  <button type="button"
                    className="btn btn-info btn-rounded btn-sm my-0 ">Go back to Product</button>

                </div>

              </div>

            </div>





          )}
        {this.state.products && this.state.products.map((item, index) => {
          return (

            <div className="container col-lg-12 border border-dark">
              <h1 className="text-center">Pays</h1>
              <hr />
              <div className="row mb-3 m-5">
                <div className="col-md-4 text-center"> {/* bg-success*/}
                  <h3></h3>
                  <img style={{ height: '40vh', width: "15vw" }} src={item.images.protoTypes[0]} className="img-fluid img-thumbnail" alt="Sheep" />

                  <div>
                    <span>{this.starMaker(item.rating)}</span>
                  </div>

                </div>
                {/*des and Price*/}
                <div className="col-md-6 text-center "> {/*bg-info*/}
                  <div className="col">

                    <div className="col">
                      {/* <h1>Name</h1> */}
                      <p className="font-weight-bold">{item.name}</p>


                    </div>
                    <hr />
                    <h3 className="mt-5 ">Descreption</h3>
                    <p style={{ fontSize: "1rem" }}>{item.description}</p>

                  </div>



                  <h2>Price</h2>
                  <h3 className="text-danger font-weight-bold">{item.prices}$</h3>



                  <span className="table-remove"><button type="button"
                    onClick={this.delete.bind(this, item)}
                    className="btn btn-info btn-rounded btn-sm my-0  w-25">Delete</button></span>

                </div>

                {/*des and Price*/}



              </div>

            </div>


          )
        })}

      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    item: state.basketReducer
  }
}
export default connect(mapStateToProps)(Bought)



