import React, { Component } from "react";

class ContactUs extends Component {
  render() {
    return (
      <form>
        <div>
          <span
            data-toggle="modal"
            data-target="#exampleModal"
            className="far fa-envelope fa-2x"
          ></span>

          <div className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true">

            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    New message
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  
                    <div className="form-group">
                      <input
                        type="name"
                        className="form-control"
                        id="recipient-name"
                        placeholder="Name"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        id="recipient-name"
                        placeholder="Email"
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        id="message-text"
                        placeholder="your message..."
                      ></textarea>
                    </div>
                  
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    data-dismiss="modal"
                    className="btn btn-outline-dark"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-outline-success">
                    Send message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default ContactUs;
