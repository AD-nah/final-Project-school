import React, { Component } from "react";

export default class TestingPage extends Component {
  render() {
    return (
      <div>


        <li><a href="#" className="fas fa-expand-arrows-alt" data-toggle="modal" data-target="#product_view"></a></li>



        <div class="modal fade product_view" id="product_view">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-body">
                <div class="row">
                 


                    <div class="col-md-12 product_img">
                        <div id="demo" class="carousel slide" data-ride="carousel">
                            <ul class="carousel-indicators" S>
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
                                    src="https://picsum.photos/200/300"
                                    alt="Los Angeles"
                                    width="1100"
                                    height="500"
                                />
                               
                                </div>
                                <div class="carousel-item">
                                <img
                                    src="https://picsum.photos/200/300"
                                    alt="Chicago"
                                    width="1100"
                                    height="500"
                                />
                               
                                </div>
                                <div class="carousel-item">
                                <img
                                    src="https://picsum.photos/200/300"
                                    alt="New York"
                                    width="1100"
                                    height="500"
                                />
                                
                                </div>
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
