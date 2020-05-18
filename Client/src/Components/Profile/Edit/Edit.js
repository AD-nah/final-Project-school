import React from "react";
import { connect } from "react-redux";
import { MDBBtn } from "mdbreact";
import api from "../../../APIs/AuthApi";
import SuccessMessage from "../../Messages/SuccessMessage";
import gravatarUrl from "gravatar-url";

class Edit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: null,
      err: null,
      success: false,
      successMsg: "",
    };
  }

  componentDidMount() {
    api.user
      .getUserData()
      .then((res) => {
        this.setState({ userData: res });
      })
      .catch((err) => {
        this.setState({ err: err.response.data.message });
      });
  }
  onChange = (e) =>
    this.setState({
      userData: {
        ...this.state.userData,
        [e.target.name]: e.target.value,
      },
    });

  onSubmit = (e) => {
    e.preventDefault();
    api.user
      .saveUserData(this.state.userData)
      .then((message) => {
        this.setState({ success: true, successMsg: message });
      })
      .catch((err) => {
        return this.setState({
          err: err.response.data.errors,
        });
      });
  };

  render() {
    return (
      <div className="container">
        {this.state.success && <SuccessMessage text={this.state.successMsg} />}
        <div className="row  m-2 ">
          <div className="col-sm-10 m-4">
            {this.props.isAuthenticated && this.state.userData && (
              <h1>{"Hi " + this.state.userData.firstName}!</h1>
            )}
          </div>

          <div className="col-sm-3">
            <div className="text-center">
              <img
                src={gravatarUrl("example.com", { size: 200 })}
                className="avatar img-circle img-thumbnail"
                alt="avatar"
              />
              {/* <h6>Upload a different photo...</h6> */}
              {/* <input type="file" className="text-center center-block file-upload  p-4" /> */}
            </div>
          </div>

          {this.props.isAuthenticated && this.state.userData && (
            <div className="col-sm-9 p-4">
              {/* {this.state.err && this.state.err} */}
              <div className="tab-content">
                <div className="tab-pane active" id="home">
                  <form
                    onSubmit={this.onSubmit}
                    className="form"
                    action="##"
                    method="post"
                    id="registrationForm"
                  >
                    <div className="form-group">
                      <label>first Name</label>
                      <input
                        type="text"
                        className="form-control"
                        value={this.state.userData.firstName ? this.state.userData.firstName : ''}
                        placeholder = 'Please Enter firstName'
                        name = "firstName"
                        onChange={this.onChange}
                        aria-label="Username"
                        aria-describedby="basic-addon"
                      />
                    </div>

                    <div className="form-group">
                      <label>last Name</label>
                      <input
                        type="text"
                        className="form-control"
                        value={this.state.userData.lastName ? this.state.userData.lastName : ''}
                        placeholder = 'Please Enter lastName'
                        name = "lastName"
                        onChange={this.onChange}
                        aria-label="Username"
                        aria-describedby="basic-addon"
                      />
                    </div>

                    <div className="form-group">
                      <label>email</label>
                      <input
                        type="text"
                        className="form-control"
                        value={this.state.userData.email ? this.state.userData.email : ''}
                        placeholder = 'Please Enter email'
                        name = "email"
                        onChange={this.onChange}
                        aria-label="Username"
                        aria-describedby="basic-addon"
                      />
                    </div>

                    <div className="form-group">
                      <label>country</label>
                      <input
                        type="text"
                        className="form-control"
                        value={this.state.userData.country ? this.state.userData.country : ''}
                        placeholder = 'Please Enter country'
                        name = "country"
                        onChange={this.onChange}
                        aria-label="Username"
                        aria-describedby="basic-addon"
                      />
                    </div>

                    <div className="form-group">
                      <label>city</label>
                      <input
                        type="text"
                        className="form-control"
                        value={this.state.userData.city ? this.state.userData.city : ''}
                        placeholder = 'Please Enter city'
                        name = "city"
                        onChange={this.onChange}
                        aria-label="Username"
                        aria-describedby="basic-addon"
                      />
                    </div>

                    <div className="form-group">
                      <label>post Code</label>
                      <input
                        type="text"
                        className="form-control"
                        value={this.state.userData.postCode ? this.state.userData.postCode : ''}
                        placeholder = 'Please Enter postCode'
                        name = "postCode"
                        onChange={this.onChange}
                        aria-label="Username"
                        aria-describedby="basic-addon"
                      />
                    </div>

                    <div className="form-group">
                      <label>Address</label>
                      <input
                        type="text"
                        className="form-control"
                        value={this.state.userData.userAddress ? this.state.userData.userAddress : ''}
                        placeholder = 'Please Enter userAddress'
                        name = "userAddress"
                        onChange={this.onChange}
                        aria-label="Username"
                        aria-describedby="basic-addon"
                      />
                    </div>

                    <div className="form-group">
                      <label>phone Number</label>
                      <input
                        type="text"
                        className="form-control"
                        value={this.state.userData.phoneNumber ? this.state.userData.phoneNumber : ''}
                        placeholder = 'Please Enter phoneNumber'
                        name = "phoneNumber"
                        onChange={this.onChange}
                        aria-label="Username"
                        aria-describedby="basic-addon"
                      />
                    </div>

                    <div className="form-group">
                      <label>birth Date</label>
                      <input
                        type="date"
                        className="form-control"
                        value={this.state.userData.birthDate ? this.state.userData.birthDate : ''}
                        placeholder = 'Please Enter birthDate'
                        name = "birthDate"
                        onChange={this.onChange}
                        aria-label="Username"
                        aria-describedby="basic-addon"
                      />
                    </div>

                    {/* <MDBInput
                      label="Your password"
                      type="password"
                      name="userPassword"
                      onChange={this.onChange}
                        value={this.state.userData.userPassword}
                        // value={this.state.userData.userPassword}
                    />

                    <MDBInput
                      type="password"
                      id="passwordConfirmation"
                      className="text-dark"
                      //label="verify Your password"
                        value={this.state.userData.passwordConfirmation}
                        // value={this.state.userData.passwordConfirmation}
                    // //   onChange={this.onChange}
                      name="passwordConfirmation"
                    /> */}
                    <div className="text-center mb-3">
                      <MDBBtn
                        type="submit"
                        color="elegant"
                        outline
                        rounded
                        className=" z-depth-1a"
                      >
                        Save
                      </MDBBtn>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.userReducer.token,
  };
};

export default connect(mapStateToProps)(Edit);
