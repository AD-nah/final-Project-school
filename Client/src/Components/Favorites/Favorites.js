import React, { Component } from 'react';
import { connect } from 'react-redux';
import empty from './images/emptyb.png';
import basket from './images/basket.png';
import { fetchFavorite } from '../../Redux/Actions/favorite' 

class Favorits extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // from the Redux
      products: null,
    }
  }

  // to remove duplicated items, thats come from the redux Store, and then save it inside the Compoment's state 
  componentDidMount() {
    this.props.fetchFavorite().then(res => {
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
      
        <h3 className="card-header text-center font-weight-bold text-uppercase py-4 "><img className="float-right " src={basket}/>your Favorite </h3>
  
        
        {/*if the chart is empty show this code , if not then show the product*/}
       
          {(!this.state.products || this.state.products.length === 0) &&
            (
              <div className="container">
                <div className="mt-3 alert alert-warning" role="alert">
                  <h4 className="alert-heading">No products in your Favorets!</h4>
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
                    <h1>Your Favorites is empty </h1>
               
                    <button  type="button"
                      className="btn btn-info btn-rounded btn-sm my-0 ">Go back to Product</button>

                  </div>

                </div>

              </div>
            )}

            {this.state.products && this.state.products.map((item, index) => {

                return ( 
                  <div className="container">

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
                              <hr/>
                              <div className="col">
                                  <span>{this.starMaker(item.rating)}</span>
                              </div>
                            </div>

                          </div>
                      </div>
                      
                  <div className="  col">
                      <div className=" text-center"> 
                          <div className="col">
                            <h2>Price</h2>  
                            <h3 className="text-primary font-weight-bold">{item.prices[0]}$</h3>
                            <h5 className="text-danger font-weight-bold"><s>{item.prices[1]}$</s></h5>
                            <hr/>
                            <span className="table-remove">
                              <button
                                type="button"
                                onClick={this.delete.bind(this, item)}  
                                className="btn btn-danger btn-rounded btn-sm "
                                >Remove from Favorite
                              </button>
                              <button 
                                type="button" 
                                className="btn btn-info btn-rounded btn-sm "
                                >Send To Basket
                              </button>
                              </span>
                          </div>
                      </div> 
                   </div>
                  </div>
                  </div>
                  </div>

                )})}
    
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    item: state.favoriteReducer
  }
}
export default connect(mapStateToProps, {fetchFavorite})(Favorits)



