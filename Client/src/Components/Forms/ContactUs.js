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

          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true">

            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    New message
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <form>
                    <div class="form-group">
                      <input
                        type="name"
                        class="form-control"
                        id="recipient-name"
                        placeholder="Name"
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="email"
                        class="form-control"
                        id="recipient-name"
                        placeholder="Email"
                      />
                    </div>
                    <div class="form-group">
                      <textarea
                        class="form-control"
                        id="message-text"
                        placeholder="your message..."
                      ></textarea>
                    </div>
                  </form>
                </div>
                <div class="modal-footer">
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
