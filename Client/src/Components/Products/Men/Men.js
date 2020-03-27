import React from "react";
import { connect } from "react-redux";
import { fetchMenProducts } from '../../../Redux/Actions/products'
import { addToBasketAction } from "../../../Redux/Actions/basket";
import { addToFavoriteAction } from '../../../Redux/Actions/favorite'


import { BackTop } from "antd";
import { WaveLoading } from "react-loadingg";
import {
  MDBContainer,
  MDBModal,
  MDBModalBody,
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask
} from "mdbreact";
import SuccessMessage from '../../Messages/SuccessMessage'







class Men extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          data: null,
          currentProduct: [],
          currentArrayOfImages: [],
    
          // for basket Messages
          addedToBasket: false,
          addedToBasketMessage: '',
          alreadyInBasket : false,
          alreadyInBasketMessage :'',
    
          // for favorite Messages
          addedToFavorite: false,
          addedToFavoriteMessage : '',
          alreadyInFavorite: false,
          alreadyInFavoriteMessage:'',
    
          // //images modal
          modal13: false
        };
      }



    componentDidMount() {
        this.props.fetchMenProducts().then(res => {
            this.setState({ data: this.props.getMenProducts.menProducts })
        })
    }

  // for the images modal
  toggle = nr => () => {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  };

  addToBasket(item) {
    this.props.addToBasketAction(item).then(message => {
      this.setState({addedToBasket : true, addedToBasketMessage: message });
      setTimeout(() =>  this.setState({ addedToBasket: false }), 100);

    }).catch(message => {
      this.setState({alreadyInBasket : true, alreadyInBasketMessage: message });
      setTimeout(() =>  this.setState({ alreadyInBasket: false }), 100);
    })
  }
  /// add the Favorites to the basket
  addToFavorite(item) {
    this.props.addToFavoriteAction(item).then(message => {
      this.setState({addedToFavorite : true, addedToFavoriteMessage: message });
      setTimeout(() =>  this.setState({ addedToFavorite: false }), 100);

    }).catch(message => {
      this.setState({alreadyInFavorite : true, alreadyInBasketMessage: message });
      setTimeout(() =>  this.setState({ alreadyInFavorite: false }), 100);
    })
  }

  sendImagesToCarousel(array) {
    this.setState({ currentArrayOfImages: array.protoTypes });
  };

  // to take a Number and convert it to Star
    starMaker(n) {
        let stars = []
        for (let i = 0; i < n; i++) {
            stars.push(<li className="fa fa-star"></li>)
        }
        return stars
    }
    render() {
        return (
      <>

            <div className="container">

            {this.state.addedToBasket && <SuccessMessage text={this.state.addedToBasketMessage}/>}
            {this.state.alreadyInBasket && <SuccessMessage text={this.state.alreadyInBasketMessage}/>}

            {this.state.addedToFavorite && <SuccessMessage text={this.state.addedToFavoriteMessage} />}
            {this.state.alreadyInFavorite && (<SuccessMessage text = {this.state.alreadyInFavoriteMessage}/>)}

                <h3 className="h3">Men's Collection </h3>
                <div className="row">

                    {this.state.data ? this.state.data.map((item, index) => {

return (
    <>
      <div key={index} className="col-md-3 col-sm-6">
        <div className="product-grid7">
          <div className="product-content">
            <h3 className="title">
              <a href="#">{item.name}</a>
            </h3>
          </div>

          <div className="product-image7">
            <li
              onClick={() => this.sendImagesToCarousel(item.images)}
            >
              <a onClick={this.toggle(13)}>
                <img
                  className="pic-1"
                  style={{ maxHeight: "400px" }}
                  src={item.images.protoTypes[0]}
                />
                <img
                  className="pic-2"
                  src={item.images.protoTypes[1]}
                />
              </a>
            </li>
            <ul className="social">
              <li
                onClick={() =>
                  this.sendImagesToCarousel(item.images)
                }
              >
                <a
                  onClick={this.toggle(13)}
                  className="fas fa-expand-arrows-alt"
                ></a>
              </li>
              <li>
                <a href="#" className="far fa-heart"
                  role="button"
                  tabIndex={1}
                  onClick={() => this.addToFavorite(item)}
                ></a>
              </li>

              <li>
                <a
                  role="button"
                  onClick={() => this.addToBasket(item)}
                  className="fa fa-shopping-cart"
                ></a>
              </li>
            </ul>

            {/* <span className="product-new-label">New</span> */}
          </div>

          <div className="product-content">
            
          {/* <h3 className="title"><a href="#">{item.description}</a></h3> */}
            <ul className="rating">
              {this.starMaker(item.rating)}
            </ul>

            <div className="price">
              &#8364;
              {item.prices[0]}
              <span>{item.prices[1]}</span>
            </div>

            {/* <img src={ImageZoomAnim} />
             */}
          </div>
        </div>
      </div>
  
  
    </>
    )
        }) : (
            <div style={{ height: "350px", width: "200px", textAlign: "center", position: "relative", left: "40%" }}>
                <span style={{ fontSize: "20px", fontWeight: "700" }}>Loading ...
            <WaveLoading />
                </span>
            </div>
            )
        
        
        }


    </div>
</div>




        {/* Back to top btn */}
        <div>
          <BackTop>
            <i
              className="fas fa-angle-double-up"
              style={{ color: "black", fontSize: "40px" }}
            ></i>
          </BackTop>
        </div>


        {/* // images modal */}
        <div>
          <MDBContainer>
            <MDBModal
              isOpen={this.state.modal13}
              toggle={this.toggle(13)}
              className="w-auto p-3"
            >
              <MDBModalBody>
                {/* modal carousel starthere */}
                <MDBContainer>
                  <MDBCarousel
                    activeItem={1}
                    length={this.state.currentArrayOfImages.length}
                    showControls={true}
                    showIndicators={true}
                    className="z-depth-1"
                  >
                    <MDBCarouselInner>
                      {this.state.currentArrayOfImages.length > 0
                        ? this.state.currentArrayOfImages.map((item, index) => {
                          return (
                            <MDBCarouselItem itemId={index + 1}>
                              <MDBView>
                                <img
                                  className="d-block"
                                  style={{ maxHeight: "550px" }}
                                  src={item}
                                  alt="First slide"
                                />
                                <MDBMask overlay="black-light" />
                              </MDBView>

                              {/* <MDBCarouselCaption>


                                    <h3 className="h3-responsive">Light mask</h3>
                                    <p>First text</p>
                                  </MDBCarouselCaption> */}
                            </MDBCarouselItem>
                          );
                        })
                        : null}
                    </MDBCarouselInner>
                  </MDBCarousel>
                </MDBContainer>
                {/* modal carousel end here */}
              </MDBModalBody>
            </MDBModal>
          </MDBContainer>
        </div>
        {/*images modal end here */}



        </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        getMenProducts: state.productReducer
    }
}
export default connect(mapStateToProps, { fetchMenProducts ,addToBasketAction, addToFavoriteAction})(Men)