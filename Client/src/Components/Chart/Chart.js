
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Prev } from 'react-bootstrap/PageItem';

class Chart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // from the Redux
       products: null,      
    }
  }

  // to remove duplicated items, thats come from the redux Store, and then save it inside the Compoment's state 
  componentDidMount(){
   this.setState({products: this.props.item.filter((item, index) => this.props.item.indexOf(item) === index)})
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
  delete(item){
    this.setState(prevState => ({
      products: prevState.products.filter(el => el != item)
    }))
  }
  
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
          <table className="table table-image">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Article Name</th>
                <th scope="col">description</th>
                <th scope="col">Stars</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody>
              {this.state.products && this.state.products.map((item, index) => {
                return (
                  <tr>
                    <td className="w-25">
                      <img style= {{height:'180px', width:"180px"}} src={item.images.protoTypes[0]} className="img-fluid img-thumbnail" alt="Sheep"/>
                    </td>
                    <td>{item.name}</td>
                    <td>{item.description}</td>
                    <td>{this.starMaker(item.rating)}</td>
                    <td>{item.prices}$</td>
                    <td>
                      <span className="table-remove">
                      <button onClick={this.delete.bind(this, item)} type="button" className="btn btn-danger btn-rounded btn-sm my-0">X</button>
                      </span>
                    </td>
                  </tr> 
                )
              })}
            </tbody>
          </table>   
          </div>
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
export default connect(mapStateToProps)(Chart)
