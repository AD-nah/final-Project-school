import React from "react";
import axios from 'axios'

// ----------------------------------------------------------------------

// Import Antd  library
// import "antd/dist/antd.css";
// import { Popconfirm , message } from "antd";

// confirm on click or error on cancel
// function confirm(e) {
//   console.log(e);
//   message.success("Added successfuly..");
// }
// function cancel(e) {
//   console.log(e);
//   message.error("Item deleted..");
// }
// ----------------------------------------------------------------------





export default class Men extends React.Component {
  constructor(props) {
      super(props)
  
      this.state = {
           data: null
      }
  }
  


  componentDidMount(){
  
    axios.get('/product/mens').then(res => res.data.mens).then(product => {
        this.setState({data : product})
    })
  }

  starMaker(n){
    let stars =[]
    for(let i = 0 ; i < n ;i++){
        stars.push(<li className="fa fa-star"></li>)
    }
    return stars
}
  render() {
    return (
       
       <div className="container">
            <h3 className="h3">Women's Collection </h3>
            <div className="row">
            
            {this.state.data ? this.state.data.map((item, index) => {

                 
                    return (

                        <div key = {index} className="col-md-3 col-sm-6">
                        <div className="product-grid7">

                            <div className="product-content">
                                <h3 className="title"><a href="#">{item.name}</a></h3>
                            </div>

                            <div className="product-image7">
                                <a href="#">
                                    <img className="pic-1" src= {item.images[0]}/>
                                    <img className="pic-2" src= {item.images[1]}/>
                                </a>
                                <ul className="social">
                                    <li><a href="#" className="fa fa-search"></a></li>
                                    <li><a href="#" className="fa fa-shopping-bag"></a></li>
                                    <li><a href="#" className="fa fa-shopping-cart"></a></li>
                                </ul>
                                <span className="product-new-label">New</span>
                            </div>
                            
                            <div className="product-content">
                                <h3 className="title"><a href="#">{item.description}</a></h3>
                                <ul className="rating">

                                   {this.starMaker(item.rating)}

                                </ul>
                                <div className="price">{item.prices[0]}
                                <span>{item.prices[1]}</span>

                                </div>
                            </div>
                        </div>
                    </div>
                    )
                }) : 'Please wait ...' }


            </div>
        </div>              
                      
    );
  }
}
