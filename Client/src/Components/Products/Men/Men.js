import React from "react";
import { connect } from "react-redux";
import { fetchMenProducts } from "../../../Redux/Actions/products";
import { addToBasketAction } from "../../../Redux/Actions/basket";
import { addToFavoriteAction } from "../../../Redux/Actions/favorite";
import ModalRouter from "../../Home/ModalRouter";

import { WaveLoading } from "react-loadingg";

import SuccessMessage from "../../Messages/SuccessMessage";

class Men extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      currentProduct: null,
      show: false,

      // for basket Messages
      addedToBasket: false,
      addedToBasketMessage: "",
      alreadyInBasket: false,
      alreadyInBasketMessage: "",

      // for favorite Messages
      addedToFavorite: false,
      addedToFavoriteMessage: "",
      alreadyInFavorite: false,
      alreadyInFavoriteMessage: "",
    };
  }
  sendProductToModal(product) {
    this.setState({
      currentProduct: product,
      show: true,
    });
  }

  handleClose() {
    this.setState({ show: false });
  }

  componentDidMount() {
    this.props.fetchMenProducts().then((res) => {
      this.setState({ data: this.props.getMenProducts.menProducts });
    });
  }

  // for the images modal
  toggle = (nr) => () => {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber],
    });
  };

  addToBasket(item) {
    this.props
      .addToBasketAction(item)
      .then((message) => {
        this.setState({ addedToBasket: true, addedToBasketMessage: message });
        setTimeout(() => this.setState({ addedToBasket: false }), 100);
      })
      .catch((message) => {
        this.setState({
          alreadyInBasket: true,
          alreadyInBasketMessage: message,
        });
        setTimeout(() => this.setState({ alreadyInBasket: false }), 100);
      });
  }
  /// add the Favorites to the basket
  addToFavorite(item) {
    this.props
      .addToFavoriteAction(item)
      .then((message) => {
        this.setState({
          addedToFavorite: true,
          addedToFavoriteMessage: message,
        });
        setTimeout(() => this.setState({ addedToFavorite: false }), 100);
      })
      .catch((message) => {
        this.setState({
          alreadyInFavorite: true,
          alreadyInBasketMessage: message,
        });
        setTimeout(() => this.setState({ alreadyInFavorite: false }), 100);
      });
  }

  // to take a Number and convert it to Star
  starMaker(n) {
    let stars = [];
    for (let i = 0; i < n; i++) {
      stars.push(<li key={i} className="fa fa-star"></li>);
    }
    return stars;
  }
  render() {
    return (
      <>
        <div className="container">
          {this.state.addedToBasket && (
            <SuccessMessage text={this.state.addedToBasketMessage} />
          )}
          {this.state.alreadyInBasket && (
            <SuccessMessage text={this.state.alreadyInBasketMessage} />
          )}

          {this.state.addedToFavorite && (
            <SuccessMessage text={this.state.addedToFavoriteMessage} />
          )}
          {this.state.alreadyInFavorite && (
            <SuccessMessage text={this.state.alreadyInFavoriteMessage} />
          )}

          <h3 className="h3">Men's Collection </h3>
          <div className="row">
            {this.state.data ? (
              this.state.data.map((item, index) => {
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
                        <li onClick={() => this.sendProductToModal(item)}>

                            <a onClick={this.toggle(13)}>
                              <img
                                alt="alt"
                                className="pic-1"
                                style={{ maxHeight: "400px" }}
                                src={item.images.protoTypes[0]}
                              />
                              <img
                                alt="alt2"
                                className="pic-2"
                                src={item.images.protoTypes[1]}
                              />
                            </a>
                          </li>
                          <ul className="social">
                          <li onClick={() => this.sendProductToModal(item)}>

                              <a
                                onClick={this.toggle(13)}
                                className="fas fa-expand-arrows-alt"
                              ></a>
                            </li>
                            {this.props.isAuthenticated && (
                              <li>
                                <a
                                  href="#"
                                  className="far fa-heart"
                                  role="button"
                                  tabIndex={1}
                                  onClick={() => this.addToFavorite(item)}
                                ></a>
                              </li>
                            )}

                            {this.props.isAuthenticated && (
                              <li>
                                <a
                                  role="button"
                                  onClick={() => this.addToBasket(item)}
                                  className="fa fa-shopping-cart"
                                ></a>
                              </li>
                            )}
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
                            {item.prices[1]}
                            <span>{item.prices[0]}</span>
                          </div>

                          {/* <img src={ImageZoomAnim} />
                           */}
                        </div>
                      </div>
                    </div>
                  </>
                );
              })
            ) : (
              <div
                style={{
                  height: "350px",
                  width: "200px",
                  textAlign: "center",
                  position: "relative",
                  left: "40%",
                }}
              >
                <span style={{ fontSize: "20px", fontWeight: "700" }}>
                  Loading ...
                  <WaveLoading />
                </span>
              </div>
            )}
          </div>
        </div>

        {this.state.currentProduct && (
          <ModalRouter
            show={this.state.show}
            handleClose={this.handleClose.bind(this)}
            product={this.state.currentProduct}
          />
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    getMenProducts: state.productReducer,
    isAuthenticated: state.userReducer.token,
  };
};
export default connect(mapStateToProps, {
  fetchMenProducts,
  addToBasketAction,
  addToFavoriteAction,
})(Men);
