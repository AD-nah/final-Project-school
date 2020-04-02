import React, { Component} from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import empty from './images/emptyb.png';
import paypal from './images/paypal.png';
import basket from './images/basket.png';
import master from './images/master.png';
import visa from './images/visa.png';
import {fetchBasket} from '../../Redux/Actions/basket'
import { removeFromBasketAction } from '../../Redux/Actions/basket'
import {sendFromBasketToFavoriteAction} from '../../Redux/Actions/basket'
import SuccessMessage from '../Messages/SuccessMessage'
import decode from 'jwt-decode'


class Chart extends Component {
  constructor(props) {
    super(props)
    this.state = {

      // Produczs come from Redux state and will saved here!
      products: null,

      // for removing from Basket Messages
      removedFromBasket: false,
      removedFromBasketMessage: '',

      // for sending to Favorite Messages
      addedToFavorite : false,
      addedToFavoriteMessage : '',
      alreadyInFavorite:false,
      alreadyInFavoriteMessage:'',

      // for payment
      total : 0,
      userId: null

    }
  }

  // to remove duplicated items, thats come from the redux Store, and then save it inside the Compoment's state 
  componentDidMount() {

    this.props.fetchBasket().then(() => {
      
          const filteredArr = this.props.item.reduce((acc, current) => {
            const x = acc.find(item => item._id === current._id);
            if (!x) {
              return acc.concat([current]);
            } else {
              return acc;
            }
          }, []);

          this.setState({ products: filteredArr })

          // get the prices from the items in the basket and put it insid the total input
          let FullAmount = 0;
          this.state.products.forEach((item) => {
            FullAmount += item.prices[0]
          })
          this.setState({ total: FullAmount })
     })



      if(localStorage.sCount){
        const payload = decode(localStorage.sCount)
        this.setState({userId:payload.userId})
      } 
  }

  // to take a Number and convert it to Star
  starMaker(n) {
    let stars = [];
    for (let i = 0; i < n; i++) {
      stars.push(<li key={i} className="fa fa-star"></li>);
    }
    return stars;
  }

  // remove items and its price same time
  remove(item) {

     removeFromBasketAction(item)
     .then(message => {
          this.setState(prevState => ({
              products: prevState.products.filter(el => el._id !== item._id),
              removedFromBasket: prevState.removedFromBasket = true,
              removedFromBasketMessage: prevState.removedFromBasketMessage = message
          }))
          setTimeout(()=> this.setState({removedFromBasket:false}),200)
     })
     .catch(message => {
          this.setState({removedFromBasket:true, removedFromBasketMessage: message})
          setTimeout(()=> this.setState({removedFromBasket:false}),200)
     })
  }

 
  sendToFavorite(item){

    this.props.sendFromBasketToFavoriteAction(item).then(message => {
      this.setState({addedToFavorite : true, addedToFavoriteMessage: message });
      setTimeout(() =>  this.setState({ addedToFavorite: false }), 100);

      removeFromBasketAction(item).then(message => {
           this.setState(prevState => ({
               products: prevState.products.filter(el => el._id !== item._id),
               removedFromBasket: prevState.removedFromBasket = true,
               removedFromBasketMessage: prevState.removedFromBasketMessage = message
           }))
           setTimeout(()=> this.setState({removedFromBasket:false}),200)
      })

    }).catch(message => {
      this.setState({alreadyInFavorite : true, alreadyInFavoriteMessage: message });
      setTimeout(() =>  this.setState({ alreadyInFavorite: false }), 100);
    })
  }

  render() {
    return (
      <div className = 'container-fluid'>

        {this.state.removedFromBasket && (<SuccessMessage text = {this.state.removedFromBasketMessage} />)}

        {this.state.addedToFavorite && (<SuccessMessage text = {this.state.addedToFavoriteMessage} />)}
        {this.state.alreadyInFavorite && (<SuccessMessage text = {this.state.alreadyInFavoriteMessage} />)}



        <h3 className="card-header text-center font-weight-bold text-uppercase py-4 "><img alt = 'alt1'className="float-right " src={basket}/>your Basket </h3>
        <br/>

        <div className=" row">
            {/*if the chart is empty show this code , if not then show the product*/}
              {(!this.state.products || this.state.products.length === 0) && (
                <div className="col-9 container">
                  <div>
                    <div className="mt-3 alert alert-warning" role="alert">
                      <h4 className="alert-heading">No products in your Basket!</h4>
                      <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
                      <hr/>
                      <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
                    </div>



                <div className="container row">
                  <div className="col-md-6" >
                    <img alt = 'alt2'className="img-fluid" src={empty} style={{ height: "50vh" }} />
                  </div>
                  <div className="col-md-6 text-center">
  
                      <Link to = '/products/women'>Go back to Product</Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="col-9" >
            {this.state.products && this.state.products.map((item, index) => {

              return (
                <div className="row mb-3 m-5" key={index} >


                  <div className="  row">

                    <div className=" text-center  col">
                      <img  style={{ height: '40vh', width: "15vw" }} src={item.images.protoTypes[0]} className="img alt = 'alt'-fluid img-thumbnail" alt="Sheep" />
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
                            onClick={this.remove.bind(this, item)}
                            className="btn btn-danger"
                          >Remove from Basket
                          </button>
                          <button
                            type="button"
                            onClick = {this.sendToFavorite.bind(this, item)}
                            className="btn btn-info"
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
                            
                            <option disabled defaultValue >color</option>
                            <option value="1">Red</option>
                            <option value="2">Blue</option>
                            <option value="3">White</option>
                          </select>

                          <select style={{ height: "30px", width: "100px", backgroundColor: "#FCC400" }} className=" md-form  dropdown-primary ">
                            <option disabled defaultValue>Size </option>
                            <option value="2">Small</option>
                            <option value="3">Medium</option>
                            <option value="4">Large</option>
                          </select>
                        </div>
                        <select style={{ height: "30px", width: "100px", backgroundColor: "#FCC400" }} className=" md-form  dropdown-primary ">
                          <option value=""  >Quantity</option>
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
                  <img alt = 'alt4' className="img-fluid col-sm-2" src={paypal} />
                </a>
                <a href="#">
                  <img alt = 'alt5' className="img-fluid col-sm-2" src={master} />
                </a>
                <a href="#">
                  <img alt = 'alt6' className="img-fluid col-sm-2" src={visa} />
                </a>
              </div>
              <hr />
              <hr />
              <h3 className="font-weight-bold mt-3">Total</h3>
              <h3 className="card-header text-center font-weight-bold text-uppercase py-3 ">{this.state.total}$</h3>
              <br />

              <a href={"http://localhost:3001/paypal/buy?id="+this.state.userId}>
                <button type="button" className="btn btn-info btn-rounded w-100 " >Pay</button>
              </a>

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
export default connect(mapStateToProps, { fetchBasket, sendFromBasketToFavoriteAction })(Chart)
