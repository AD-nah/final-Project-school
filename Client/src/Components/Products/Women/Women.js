import React, {useState} from "react";
import axios from "axios";
import { connect } from "react-redux";
import { addToBasketAction } from "../../../Redux/Actions/basket";
import {Button, Modal} from 'react-bootstrap'
// ----------------------------------------------------------------------

// Import Antd  library
// import "antd/dist/antd.css";
// import {  Popconfirm, message} from "antd";

// // confirm on click or error on cancel
// function confirm(e) {
//   console.log(e);
//   message.success("Added successfuly..");
// }
// function cancel(e) {
//   console.log(e);
//   message.error("Item deleted..");
// }

// --------------------------------------------------------------

class Women extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      currentProduct: [],
      currentArrayOfImages : null

    };
  }

  componentDidMount() {
    axios
      .get("/product/womens")
      .then(res => res.data.women)
      .then(product => {
        this.setState({ data: product });
      });
  }
  setCurrentProduct(item) {
    this.props.addToBasketAction(item);
  }

  sendImagesToCarousel(array){
    console.log(array)
    this.setState({currentArrayOfImages: array})
  }

  starMaker(n) {
    let stars = [];
    for (let i = 0; i < n; i++) {
      stars.push(<li className="fa fa-star"></li>);
    }
    return stars;
  }
  render() {
    return (
      <div className="container">
{/*     
       {this.state.currentArrayOfImages && (<ImagesModal img= {this.state.currentArrayOfImages[0]} />)} */}

       <Example/>

        <h3 className="h3">Women's Collection</h3>
        <div className="row">
          {this.state.data
            ? this.state.data.map((item, index) => {
                return (
                  <div key={index} className="col-md-3 col-sm-6">
                    <div className="product-grid7">
                      <div className="product-content">
                        <h3 className="title">
                          <a href="#">{item.name}</a>
                        </h3>
                      </div>

                      <div className="product-image7">
                        <a href="#">
                          <img className="pic-1" src={item.images[0]} />
                          <img className="pic-2" src={item.images[1]} />
                        </a>


                        <ul className="social">
                        <li>
                                <a
                                  onClick={() => this.sendImagesToCarousel(item.images)}
                                  className="fas fa-expand-arrows-alt" 
                                  >
                                </a>
                          </li>

                            <li><a href="#" className="far fa-heart"></a></li>

                            <li>
                                <a
                                  role="button"
                                  tabIndex={0}
                                  onClick={() => this.setCurrentProduct(item)}
                                  className="fa fa-shopping-cart"
                                >
                                </a>
                          </li>


                        </ul>


                        <span className="product-new-label">New</span>
                      </div>
                      <div className="product-content">
                        <h3 className="title">
                          <a href="#">{item.description}</a>
                        </h3>
                        <ul className="rating">
                          {this.starMaker(item.rating)}
                        </ul>
                        <div className="price">
                          {item.prices[0]}
                          <span>{item.prices[1]}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            : "Please wait ..."}
        </div>
      </div>
    );
  }
}






function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}> show </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          Woohoo, you're reading this text in a modal!
        </Modal.Body>
      </Modal>
    </>
  );
}



class ImagesModal extends React.Component {
  render() {
    return (
      <div>


        <li>
          <a href="#" className="fas fa-expand-arrows-alt" data-toggle="modal" data-target="#product_view">Modal</a>
        </li>



        <div class="modal fade product_view" id="product_view">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-body">
                <div class="row">
                 


                    <div class="col-md-12 product_img">
                        <div id="demo" class="carousel slide" data-ride="carousel">
                            <ul class="carousel-indicators" >
                                <li
                                data-target="#demo"
                                data-slide-to="0"
                                class="active"
                                ></li>
                                <li data-target="#demo" data-slide-to="1"></li>
                                <li data-target="#demo" data-slide-to="2"></li>
                            </ul>

                            <div
                                class="carousel-inner"
                                
                            >
                                <div class="carousel-item active">

                                <img
                                    src= {this.props.img}
                                    alt="Los Angeles"
                                    width="1100"
                                    height="500"
                                />
                                </div>
{/* 
                                <div class="carousel-item">
                                <img
                                    src=
                                    alt="Chicago"
                                    width="1100"
                                    height="500"
                                />
                               
                                </div>
                                <div class="carousel-item">
                                <img
                                    src=
                                    alt="New York"
                                    width="1100"
                                    height="500"
                                />
                                
                                </div> */}
                            </div>


                            <a
                                class="carousel-control-prev"
                                href="#demo"
                                data-slide="prev">
                                    
                                <i class="fas fa-backward" style={{fontSize:"40px",color:"white"}}></i>

                            </a>
                            <a
                                class="carousel-control-next"
                                href="#demo"
                                data-slide="next"
                            >
                            <i class="fas fa-forward" style={{fontSize:"40px",color:"white"}}></i>
                            </a>
                        </div>
                    </div>
                    {/* DONT DELETE IT PLEASE */}
                        {/* <h3 class="cost">
                        <span class="glyphicon glyphicon-usd"></span> 15.00{" "}
                        <small class="pre-cost">
                            <span class="glyphicon glyphicon-usd"></span> 20.00
                        </small>
                     </h3> */}

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}












export default connect(null, { addToBasketAction })(Women);
