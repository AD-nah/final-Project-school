import React, { Component } from 'react'

export default class ProductProfile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    componentDidMount(){

    }
    render() {
        return (

            <div className=" mb-3 m-5" >
                <br/>
                <br/>
                <br/>
              <div className="  row">

                <div className=" text-center  col">
                  <img  style={{ height: '40vh', width: "15vw" }} src={this.props.match.params.photo} className="img alt = 'alt'-fluid img-thumbnail" alt="Sheep" />
                </div>

                <div className="  col-5">
                  <div className=" text-center ">
                    <div className="col">
                      <div className="col">
                        <p className="font-weight-bold">{this.props.match.params.name}</p>
                      </div>
                      <hr />
                      <h3 className="mt-2">Descreption</h3>
                      <p style={{ fontSize: "1rem" }}>{this.props.match.params.description}</p>
                      <hr />
           
                    </div>
                    <hr />
                    <span className="table-remove">
                      <button
                        type="button"
                        //onClick={this.remove.bind(this, item)}
                        className="btn btn-danger"
                        >Add to Basket
                      </button>
                      <button
                        type="button"
                        // onClick = {this.sendToFavorite.bind(this, item)}
                        className="btn btn-info"
                        >Add To Favorite
                      </button>
                    </span>
                  </div>
                </div>

                <div className="  col">
                  <div className=" text-center">

                    <div className="col">
                      <h2>Price</h2>
                      {/* <h3 className="text-primary font-weight-bold">{this.props.match.params.price}$</h3> */}
                      {/* <h5 className="text-danger font-weight-bold"><s>{this.props.match.params.price2}$</s></h5> */}

                      <hr />

                      {/* <select style={{ height: "30px", width: "100px", backgroundColor: "#FCC400" }} className="mr-2 md-form colorful-select dropdown-primary">
                        
                        <option disabled defaultValue >color</option>
                        <option value="1">Red</option>
                        <option value="2">Blue</option>
                        <option value="3">White</option>
                    </select> */}

                      {/* <select style={{ height: "30px", width: "100px", backgroundColor: "#FCC400" }} className=" md-form  dropdown-primary ">
                        <option disabled defaultValue>Size </option>
                        <option value="2">Small</option>
                        <option value="3">Medium</option>
                        <option value="4">Large</option>
                    </select> */}
                    </div>
  
                  </div>
                </div>
              </div>
            </div>
          )
    }
}
